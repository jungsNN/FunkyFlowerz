import * as anchor from "@project-serum/anchor";
import {
  Commitment,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { useWallet } from "@solana/wallet-adapter-react";
import Alert from "@mui/material/Alert";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@mui/material/Snackbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  createAccountsForMint,
  getCandyMachineState,
  getCollectionPDA,
  mintOneToken,
  SetupState,
} from "../../utils/candy-machine";
import {
  AlertState,
  formatNumber,
  getAtaForMint,
  getCountdownDate,
  toDate,
} from "../../utils/candy-utils";
import ConnectButton from "../../components/Wallet/ConnectButton";
import { ConnectionProps } from "../../models/connection";
import { Container, Grid, Text, Title } from "../shared";
import {
  MintButton,
  MintContainer,
  MintCountdown,
} from "../../components/Mint";
import { MoreIcon } from "../svgs";
import SideDrawer from "../SideDrawer";
import React from "react";

const isDevelopment = process.env.NODE_ENV !== "production";

interface AppBarProps {
  isMobile: boolean;
  rpcHost: string;
  connection?: Connection | undefined;
}

const AppBar: React.FC<AppBarProps & ConnectionProps> = (props) => {
  const isMobile = props.isMobile;
  const navigate = useNavigate();
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });
  const [isActive, setIsActive] = useState(false);
  const [endDate, setEndDate] = useState<Date>();
  const [itemsRemaining, setItemsRemaining] = useState<number>();
  const [isWhitelistUser, setIsWhitelistUser] = useState(false);
  const [isPresale, setIsPresale] = useState(false);
  const [isValidBalance, setIsValidBalance] = useState(false);
  const [discountPrice, setDiscountPrice] = useState<anchor.BN>();
  const [needTxnSplit, setNeedTxnSplit] = useState(true);
  const [setupTxn, setSetupTxn] = useState<SetupState>();

  const wallet = useWallet();
  const cluster = props.network;
  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(
    async (commitment: Commitment = "confirmed") => {
      if (!anchorWallet) {
        return;
      }
      if (props.error) {
        setAlertState({
          open: true,
          message: props.error.message,
          severity: "error",
          hideDuration: null,
        });
        return;
      }

      const connection = new Connection(props.rpcHost, commitment);

      if (props.candyMachineId) {
        try {
          const cndy = await getCandyMachineState(
            anchorWallet,
            props.candyMachineId,
            connection
          );
          isDevelopment && console.log("Candy machine state: ", cndy);
          let active = cndy?.state.goLiveDate
            ? cndy?.state.goLiveDate.toNumber() < new Date().getTime() / 1000
            : false;

          let presale = false;

          // duplication of state to make sure we have the right values!
          let isWLUser = false;
          let userPrice = cndy.state.price;

          // whitelist mint?
          if (cndy?.state.whitelistMintSettings) {
            // is it a presale mint?
            if (
              cndy.state.whitelistMintSettings.presale &&
              (!cndy.state.goLiveDate ||
                cndy.state.goLiveDate.toNumber() > new Date().getTime() / 1000)
            ) {
              presale = true;
            }
            // is there a discount?
            if (cndy.state.whitelistMintSettings.discountPrice) {
              setDiscountPrice(cndy.state.whitelistMintSettings.discountPrice);
              userPrice = cndy.state.whitelistMintSettings.discountPrice;
            } else {
              setDiscountPrice(undefined);
              // when presale=false and discountPrice=null, mint is restricted
              // to whitelist users only
              if (!cndy.state.whitelistMintSettings.presale) {
                cndy.state.isWhitelistOnly = true;
              }
            }
            // retrieves the whitelist token
            const mint = new anchor.web3.PublicKey(
              cndy.state.whitelistMintSettings.mint
            );
            const token = (
              await getAtaForMint(mint, anchorWallet.publicKey)
            )[0];

            try {
              const balance = await connection.getTokenAccountBalance(token);
              isWLUser = parseInt(balance.value.amount) > 0;
              // only whitelist the user if the balance > 0
              setIsWhitelistUser(isWLUser);

              if (cndy.state.isWhitelistOnly) {
                active = isWLUser && (presale || active);
              }
            } catch (e) {
              setIsWhitelistUser(false);
              // no whitelist user, no mint
              if (cndy.state.isWhitelistOnly) {
                active = false;
              }
              setAlertState({
                message: "There was a problem fetching whitelist token balance",
                open: true,
                severity: "error",
              });
              isDevelopment && console.log(e);
            }
          }
          userPrice = isWLUser ? userPrice : cndy.state.price;

          if (cndy?.state.tokenMint) {
            // retrieves the SPL token
            const mint = new anchor.web3.PublicKey(cndy.state.tokenMint);
            const token = (
              await getAtaForMint(mint, anchorWallet.publicKey)
            )[0];
            try {
              const balance = await connection.getTokenAccountBalance(token);

              const valid = new anchor.BN(balance.value.amount).gte(userPrice);

              // only allow user to mint if token balance >  the user if the balance > 0
              setIsValidBalance(valid);
              active = active && valid;
            } catch (e) {
              setIsValidBalance(false);
              active = false;
              // no whitelist user, no mint
              setAlertState({
                message: "There was a problem fetching SPL token balance",
                open: true,
                severity: "error",
              });
              isDevelopment && console.log(e);
            }
          } else {
            const balance = new anchor.BN(
              await connection.getBalance(anchorWallet.publicKey)
            );
            const valid = balance.gte(userPrice);
            setIsValidBalance(valid);
            active = active && valid;
          }

          // datetime to stop the mint?
          if (cndy?.state.endSettings?.endSettingType.date) {
            setEndDate(toDate(cndy.state.endSettings.number));
            if (
              cndy.state.endSettings.number.toNumber() <
              new Date().getTime() / 1000
            ) {
              active = false;
            }
          }
          // amount to stop the mint?
          if (cndy?.state.endSettings?.endSettingType.amount) {
            const limit = Math.min(
              cndy.state.endSettings.number.toNumber(),
              cndy.state.itemsAvailable
            );
            if (cndy.state.itemsRedeemed < limit) {
              setItemsRemaining(limit - cndy.state.itemsRedeemed);
            } else {
              setItemsRemaining(0);
              cndy.state.isSoldOut = true;
            }
          } else {
            setItemsRemaining(cndy.state.itemsRemaining);
          }

          if (cndy.state.isSoldOut) {
            active = false;
          }

          const [collectionPDA] = await getCollectionPDA(props.candyMachineId);
          const collectionPDAAccount = await connection.getAccountInfo(
            collectionPDA
          );

          setIsActive((cndy.state.isActive = active));
          setIsPresale((cndy.state.isPresale = presale));
          setCandyMachine(cndy);

          const txnEstimate =
            892 +
            (!!collectionPDAAccount && cndy.state.retainAuthority ? 182 : 0) +
            (cndy.state.tokenMint ? 66 : 0) +
            (cndy.state.whitelistMintSettings ? 34 : 0) +
            (cndy.state.whitelistMintSettings?.mode?.burnEveryTime ? 34 : 0) +
            (cndy.state.gatekeeper ? 33 : 0) +
            (cndy.state.gatekeeper?.expireOnUse ? 66 : 0);

          setNeedTxnSplit(txnEstimate > 1230);
        } catch (e) {
          if (e instanceof Error) {
            if (
              e.message === `Account does not exist ${props.candyMachineId}`
            ) {
              setAlertState({
                open: true,
                message: `Couldn't fetch candy machine state from candy machine with address: ${props.candyMachineId}, using rpc: ${props.rpcHost}! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!`,
                severity: "error",
                hideDuration: null,
              });
            } else if (
              e.message.startsWith("failed to get info about account")
            ) {
              setAlertState({
                open: true,
                message: `Couldn't fetch candy machine state with rpc: ${props.rpcHost}! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!`,
                severity: "error",
                hideDuration: null,
              });
            }
          } else {
            setAlertState({
              open: true,
              message: `${e}`,
              severity: "error",
              hideDuration: null,
            });
          }
          isDevelopment && console.log(e);
        }
      } else {
        setAlertState({
          open: true,
          message: `Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!`,
          severity: "error",
          hideDuration: null,
        });
      }
    },
    [anchorWallet, props.candyMachineId, props.error, props.rpcHost]
  );

  const onMint = async (
    beforeTransactions: Transaction[] = [],
    afterTransactions: Transaction[] = []
  ) => {
    try {
      setIsUserMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        let setupMint: SetupState | undefined;
        if (needTxnSplit && setupTxn === undefined) {
          setAlertState({
            open: true,
            message: "Please sign account setup transaction",
            severity: "info",
          });
          setupMint = await createAccountsForMint(
            candyMachine,
            wallet.publicKey
          );
          let status: any = { err: true };
          if (setupMint.transaction) {
            status = await awaitTransactionSignatureConfirmation(
              setupMint.transaction,
              props.txTimeout,
              props.connection!,
              true
            );
          }
          if (status && !status.err) {
            setSetupTxn(setupMint);
            setAlertState({
              open: true,
              message:
                "Setup transaction succeeded! Please sign minting transaction",
              severity: "info",
            });
          } else {
            setAlertState({
              open: true,
              message: "Mint failed! Please try again!",
              severity: "error",
            });
            setIsUserMinting(false);
            return;
          }
        } else {
          setAlertState({
            open: true,
            message: "Please sign minting transaction",
            severity: "info",
          });
        }

        const mintResult = await mintOneToken(
          candyMachine,
          wallet.publicKey,
          beforeTransactions,
          afterTransactions,
          setupMint ?? setupTxn
        );

        let status: any = { err: true };
        let metadataStatus = null;
        if (mintResult) {
          status = await awaitTransactionSignatureConfirmation(
            mintResult.mintTxId,
            props.txTimeout,
            props.connection!,
            true
          );

          metadataStatus =
            await candyMachine.program.provider.connection.getAccountInfo(
              mintResult.metadataKey,
              "processed"
            );
          isDevelopment && console.log("Metadata status: ", !!metadataStatus);
        }

        if (status && !status.err && metadataStatus) {
          // manual update since the refresh might not detect
          // the change immediately
          const remaining = itemsRemaining! - 1;
          setItemsRemaining(remaining);
          setIsActive((candyMachine.state.isActive = remaining > 0));
          candyMachine.state.isSoldOut = remaining === 0;
          setSetupTxn(undefined);
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
            hideDuration: 7000,
          });
          refreshCandyMachineState("processed");
        } else if (status && !status.err) {
          setAlertState({
            open: true,
            message:
              "Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",
            severity: "error",
            hideDuration: 8000,
          });
          refreshCandyMachineState();
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
          refreshCandyMachineState();
        }
      }
    } catch (error: any) {
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction timeout! Please try again.";
        } else if (error.message.indexOf("0x137")) {
          isDevelopment && console.log(error);
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          isDevelopment && console.log(error);
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
      // updates the candy machine state to reflect the latest
      // information on chain
      refreshCandyMachineState();
    } finally {
      setIsUserMinting(false);
    }
  };

  const toggleMintButton = () => {
    let active = !isActive || isPresale;

    if (active) {
      if (candyMachine!.state.isWhitelistOnly && !isWhitelistUser) {
        active = false;
      }
      if (endDate && Date.now() >= endDate.getTime()) {
        active = false;
      }
    }

    if (
      isPresale &&
      candyMachine!.state.goLiveDate &&
      candyMachine!.state.goLiveDate.toNumber() <= new Date().getTime() / 1000
    ) {
      setIsPresale((candyMachine!.state.isPresale = false));
    }

    setIsActive((candyMachine!.state.isActive = active));
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

  useEffect(() => {
    !isDevelopment &&
      (function loop() {
        setTimeout(() => {
          refreshCandyMachineState();
          loop();
        }, 20000);
      })();
  }, [refreshCandyMachineState]);

  const mintButton = () => (
    <MintButtonWrapper>
      {candyMachine?.state.isActive &&
      candyMachine?.state.gatekeeper &&
      wallet.publicKey &&
      wallet.signTransaction ? (
        <GatewayProvider
          wallet={{
            publicKey: wallet.publicKey || new PublicKey(CANDY_MACHINE_PROGRAM),
            //@ts-ignore
            signTransaction: wallet.signTransaction,
          }}
          gatekeeperNetwork={candyMachine?.state?.gatekeeper?.gatekeeperNetwork}
          clusterUrl={props.rpcHost!}
          cluster={cluster}
          options={{ autoShowModal: false }}
        >
          <MintButton
            candyMachine={candyMachine}
            isMinting={isUserMinting}
            setIsMinting={(val: boolean | ((prevState: boolean) => boolean)) =>
              setIsUserMinting(val)
            }
            onMint={onMint}
            isActive={
              isActive || (isPresale && isWhitelistUser && isValidBalance)
            }
            isLoading={
              ((wallet && !anchorWallet) || (anchorWallet && !candyMachine)) ??
              false
            }
            isValidBalance={isValidBalance}
          />
        </GatewayProvider>
      ) : (
        <MintButton
          candyMachine={candyMachine}
          isMinting={isUserMinting}
          setIsMinting={(val: boolean | ((prevState: boolean) => boolean)) =>
            setIsUserMinting(val)
          }
          onMint={onMint}
          isActive={
            isActive || (isPresale && isWhitelistUser && isValidBalance)
          }
          isLoading={
            ((wallet && !anchorWallet) || (anchorWallet && !candyMachine)) ??
            false
          }
          isValidBalance={isValidBalance}
        />
      )}
    </MintButtonWrapper>
  );

  const mockMintCountDown = ({
    variant = "status",
    status = "live",
  }: {
    variant: "status" | "countdown";
    status?: "completed" | "presale" | "live";
  }) => {
    return variant === "countdown" ? (
      <Grid by="row" justify="center">
        <MintCountdown
          isMock
          isMobile={isMobile}
          showMockCountdown
          key="endSettings"
          date={new Date(Date.now() + 3600000)}
          style={{ justifyContent: "flex-end" }}
          status="COMPLETED"
          onComplete={toggleMintButton}
        />
        <Text
          display="block"
          size="sm"
          style={{
            fontSize: `calc(100vw * (12 / ${isMobile ? "480" : "1512"}))`,
            letterSpacing: `calc(100vw * (0.04em / ${
              isMobile ? "480" : "1512"
            }))`,
            lineHeight: "0",
          }}
          textAlign="center"
          whiteSpace="nowrap"
          variant="caption"
        >
          TO END OF MINT
        </Text>
      </Grid>
    ) : (
      <Grid by="row" justify="center">
        <MintCountdown
          isMock
          isMobile={isMobile}
          key="goLive"
          date={getCountdownDate(candyMachine!)}
          onComplete={toggleMintButton}
          style={{ justifyContent: "flex-end" }}
          status={
            status === "completed"
              ? "COMPLETED"
              : status === "presale"
              ? "PRESALE"
              : "LIVE"
          }
        />
        {status === "presale" &&
          candyMachine!.state.goLiveDate &&
          candyMachine!.state.goLiveDate.toNumber() >
            new Date().getTime() / 1000 && (
            <Text
              thin
              display="block"
              size="sm"
              style={{
                fontSize: `calc(100vw * (12 / ${isMobile ? "480" : "1512"}))`,
                letterSpacing: `calc(100vw * (0.04em / ${
                  isMobile ? "480" : "1512"
                }))`,
                lineHeight: "0",
              }}
              textAlign="center"
              whiteSpace="nowrap"
              variant="caption"
            >
              UNTIL PUBLIC MINT
            </Text>
          )}
      </Grid>
    );
  };

  const mintContainer = ({
    isMock = false,
  }: {
    isMock: boolean | undefined;
  }) => {
    return (
      <MintContainer className="mint-container">
        {mintButton()}
        {candyMachine && (
          <>
            <MintDetails className="mint-details-floater">
              <Grid
                container
                direction="row"
                justify="center"
                wrap="nowrap"
                gap={isMobile ? "calc(100vw * (16 / 480))" : "unset"}
                style={{ position: "relative" }}
              >
                <MintStatus by="column" className="mint-status">
                  {isMock ? (
                    mockMintCountDown({
                      variant: "countdown",
                      status: "presale",
                    })
                  ) : isActive && endDate && Date.now() < endDate.getTime() ? (
                    <Grid by="row" justify="center">
                      <MintCountdown
                        isMobile={isMobile}
                        key="endSettings"
                        date={getCountdownDate(candyMachine)}
                        style={{ justifyContent: "flex-end" }}
                        status="COMPLETED"
                        onComplete={toggleMintButton}
                      />
                      <Text
                        display="block"
                        size="sm"
                        style={{
                          fontSize: `calc(100vw * (12 / ${
                            isMobile ? "480" : "1512"
                          }))`,
                          letterSpacing: `calc(100vw * (0.04em / ${
                            isMobile ? "480" : "1512"
                          }))`,
                          lineHeight: "0",
                        }}
                        textAlign="center"
                        whiteSpace="nowrap"
                        variant="caption"
                      >
                        TO END OF MINT
                      </Text>
                    </Grid>
                  ) : (
                    <Grid by="row" justify="center">
                      <MintCountdown
                        isMobile={isMobile}
                        key="goLive"
                        date={getCountdownDate(candyMachine)}
                        style={{ justifyContent: "flex-end" }}
                        status={
                          candyMachine?.state?.isSoldOut ||
                          (endDate && Date.now() > endDate.getTime())
                            ? "COMPLETED"
                            : isPresale
                            ? "PRESALE"
                            : "LIVE"
                        }
                        onComplete={toggleMintButton}
                      />
                      {isPresale &&
                        candyMachine.state.goLiveDate &&
                        candyMachine.state.goLiveDate.toNumber() >
                          new Date().getTime() / 1000 && (
                          <Text
                            display="block"
                            size="sm"
                            style={{
                              fontSize: `calc(100vw * (12 / ${
                                isMobile ? "480" : "1512"
                              }))`,
                              letterSpacing: `calc(100vw * (0.04em / ${
                                isMobile ? "480" : "1512"
                              }))`,
                              lineHeight: "0",
                            }}
                            textAlign="center"
                            whiteSpace="nowrap"
                            variant="caption"
                          >
                            UNTIL PUBLIC MINT
                          </Text>
                        )}
                    </Grid>
                  )}
                </MintStatus>
                <Grid
                  item
                  align="center"
                  display="flex"
                  gap={`calc(100vw * (4 / ${isMobile ? "480" : "1512"}))`}
                  justify="flex-end"
                  style={{
                    width: "100%",
                  }}
                  xs={5.5}
                >
                  <Title thin variant="caption">
                    {isWhitelistUser && discountPrice
                      ? "Discount Price"
                      : "Price"}
                  </Title>
                  <Text
                    bold
                    size="sm"
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      wordBreak: "keep-all",
                    }}
                  >
                    {isWhitelistUser && discountPrice
                      ? `◎${formatNumber.asNumber(discountPrice)}`
                      : `◎${formatNumber.asNumber(candyMachine.state.price)}`}
                  </Text>
                </Grid>
                <Grid
                  item
                  align="center"
                  display="flex"
                  gap={`calc(100vw * (4 / ${isMobile ? "480" : "1512"}))`}
                  justify="flex-end"
                  style={{
                    width: "100%",
                  }}
                  xs={7.5}
                >
                  <Title thin variant="caption">
                    Remaining
                  </Title>
                  <Text bold size="sm" variant="h6">
                    {`${itemsRemaining}`}
                  </Text>
                </Grid>
              </Grid>
            </MintDetails>
          </>
        )}
      </MintContainer>
    );
  };

  const logoImg = (
    <img src="./sunhead.png" alt="sunhead-logo" width="100%" height="100%" />
  );

  return (
    <AppBarContainer>
      <Container style={{ position: "relative" }}>
        <Paper
          elevation={0}
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 0,
            width: "100%",
          }}
        >
          <AppBarGrid display="grid">
            <div className="home-logo" onClick={() => navigate("/")}>
              {logoImg}
            </div>
            <Grid
              className="navbar-right"
              display="grid"
              gap={`calc(100vw * 32 / ${isMobile ? "480" : "1512"})`}
              gridAutoFlow="column"
              style={{ position: isMobile ? "relative" : "initial" }}
            >
              {isMobile ? (
                <>
                  {wallet.connected ? (
                    mintContainer({ isMock: false })
                  ) : (
                    <ConnectButton isMobile />
                  )}
                  <MobileNavBar
                    // candyProps={store.connection}
                    onNavigate={navigate}
                  />
                </>
              ) : (
                <>
                  <Menu onNavigate={navigate} />
                  {wallet.connected ? (
                    mintContainer({ isMock: false })
                  ) : (
                    <ConnectButton isMobile={false} />
                  )}
                </>
              )}
            </Grid>
          </AppBarGrid>
        </Paper>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={alertState.open === true}
          autoHideDuration={
            alertState.hideDuration === undefined
              ? 6000
              : alertState.hideDuration
          }
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </Container>
    </AppBarContainer>
  );
};

const Menu = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <NavLinks container display="grid">
      <MenuButton onClick={() => onNavigate("/")}>
        <Title small>Home</Title>
      </MenuButton>
      <MenuButton onClick={() => onNavigate("/rarity")}>
        <Title small>Rarity</Title>
      </MenuButton>
      <MenuButton onClick={() => onNavigate("/team")}>
        <Title small>Team</Title>
      </MenuButton>
    </NavLinks>
  );
};

const MobileNavBar = ({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
  // candyProps?: ConnectionProps;
}) => {
  return (
    <Grid
      item
      align="center"
      display="grid"
      gap="calc(100vw * (32 / 480))"
      gridAutoFlow="column"
      justify="justify-between"
    >
      <SideDrawer
        actionButton={
          <MoreIcon
            height="calc(100vw * (55 / 480))"
            stroke="#ffffffd1"
            bg="black"
            width="calc(100vw * (55 / 480))"
            variant="rounded-filled"
          />
        }
      >
        <Grid
          by="column"
          align="center"
          justify="space-between"
          pt="calc(100vw * (48 / 480))"
        >
          <Menu onNavigate={onNavigate} />
        </Grid>
      </SideDrawer>
    </Grid>
  );
};

const AppBarContainer = styled(Container)`
  margin-bottom: calc(100vw * (93.7 / 1512));
  margin-top: calc(100vw * (45 / 1512));

  @media (min-width: 1512px) {
    margin-bottom: 93.7px;
    margin-top: 45px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    margin-bottom: calc(100vw * (93.7 / 480));
    margin-top: calc(100vw * (45 / 480));
  }
`;

const AppBarGrid = styled(Grid)`
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: calc(100vw * (32 / 1512));
  justify-content: space-between;
  width: 100%;
  min-width: calc(100vw * (1288 / 1512));
  max-width: calc(100vw * (1288 / 1512));

  .home-logo {
    cursor: pointer;
    height: calc(100vw * (100 / 1512));
    width: calc(100vw * (100 / 1512));
  }

  @media (min-width: 1512px) {
    min-width: 1288px;
    max-width: 1288px;

    .home-logo {
      width: 100px;
      height: 100px;
    }
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: calc(100vw * (32 / 480));
    min-width: calc(100vw * (392 / 480));
    max-width: calc(100vw * (392 / 480));

    .home-logo {
      height: calc(100vw * (64 / 480));
      width: calc(100vw * (64 / 480));
    }
  }
`;

const MintButtonWrapper = styled.div`
  width: 100%;
  position: relative;

  ${(props) => props.theme.mediaQueries.mobile} {
    position: initial;
  }
`;

const MintDetails = styled.div`
  overflow: visible;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: calc(100vw * (62 / 1512) * 1.4);
  right: 0;

  ${(props) => props.theme.mediaQueries.mobile} {
    width: 100%;
    top: calc(100vw * (62 / 480) * 1.33);
    right: calc(25% + (100vw * (8 / 392)));
  }
`;

const NavLinks = styled(Grid)`
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc(100vw * (35 / 1512));
  justify-content: flex-end;
  z-index: 70;

  @media (min-width: 1512px) {
    grid-gap: 35px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: calc(100vw * (48 / 480));
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    padding-right: calc(100vw * (64 / 480));
    padding-top: calc(100vw * (48 / 480));
  }
`;

const MenuButton = styled.button`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  box-shadow: none;
  min-width: calc(100vw * (80 / 1512));
  max-width: calc(100vw * (80 / 1512));
  min-height: calc(100vw * (25 / 1512));
  max-height: calc(100vw * (25 / 1512));
  z-index: 90;
  h1 {
    font-size: calc(100vw * (24 / 1512));
    line-height: calc(100vw * (8 / 1512));
    margin-top: calc(100vw * (16 / 1512));
  }

  @media (min-width: 1512px) {
    min-width: 80px;
    max-width: 80px;
    min-height: 25px;
    max-height: 25px;
    > * h1 {
      font-size: 24px;
      line-height: 8px;
      margin-top: 16px;
    }
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    min-width: calc(100vw * (64 / 480));
    max-width: calc(100vw * (64 / 480));
    min-height: calc(100vw * (24 / 480));
    max-height: calc(100vw * (24 / 480));
    h1 {
      font-size: calc(100vw * (24 / 480));
      line-height: calc(100vw * (8 / 480));
      margin-top: calc(100vw * (16 / 480));
    }
  }
`;

const MintStatus = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
  padding-right: calc(100vw * (42 / 1512));
  position: absolute;
  right: 100%;
  width: 100%;

  ${(props) => props.theme.mediaQueries.mobile} {
    position: initial;
    padding-right: 0;
  }
`;

export default AppBar;
