
// import styled from "styled-components";
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppBar, { AppBarProps } from "./AppBar";
import FunkyFlowerzTitle from "./components/svgs/FunkyFlowerzTitle";

// export interface HomeProps {
//   candyMachineId?: anchor.web3.PublicKey;
//   connection: anchor.web3.Connection;
//   txTimeout: number;
//   rpcHost: string;
//   network: WalletAdapterNetwork;
//   error?: string;
// }

const FUNKY_FLOWERZ_QUOTE = "There are always flowers for those who want to see them.\n-- Matisse"
const FUNKY_FLOWERS_DESC = "A collection of 2700 hand-made flowers from 9 species, including dozens of insect variants and mutations. 50% proceeds donated to environmental organizations."

const Home = (props: AppBarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && typeof window !== 'undefined') {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 1024)
        })

        return () => {
            window.removeEventListener('resize', () => {})
        }
    }
  }, [])
  // const [isUserMinting, setIsUserMinting] = useState(false);
  // const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  // const [alertState, setAlertState] = useState<AlertState>({
  //   open: false,
  //   message: "",
  //   severity: undefined,
  // });
  // const [isActive, setIsActive] = useState(false);
  // const [endDate, setEndDate] = useState<Date>();
  // const [itemsRemaining, setItemsRemaining] = useState<number>();
  // const [isWhitelistUser, setIsWhitelistUser] = useState(false);
  // const [isPresale, setIsPresale] = useState(false);
  // const [isValidBalance, setIsValidBalance] = useState(false);
  // const [discountPrice, setDiscountPrice] = useState<anchor.BN>();
  // const [needTxnSplit, setNeedTxnSplit] = useState(true);
  // const [setupTxn, setSetupTxn] = useState<SetupState>();

  // const rpcUrl = props.rpcHost;
  // const wallet = useWallet();
  // const cluster = props.network;
  // const anchorWallet = useMemo(() => {
  //   if (
  //     !wallet ||
  //     !wallet.publicKey ||
  //     !wallet.signAllTransactions ||
  //     !wallet.signTransaction
  //   ) {
  //     return;
  //   }

  //   return {
  //     publicKey: wallet.publicKey,
  //     signAllTransactions: wallet.signAllTransactions,
  //     signTransaction: wallet.signTransaction,
  //   } as anchor.Wallet;
  // }, [wallet]);

  // const refreshCandyMachineState = useCallback(
  //   async (commitment: Commitment = "confirmed") => {
  //     if (!anchorWallet) {
  //       return;
  //     }
  //     if (props.error !== undefined) {
  //       setAlertState({
  //         open: true,
  //         message: props.error,
  //         severity: "error",
  //         hideDuration: null,
  //       });
  //       return;
  //     }

  //     const connection = new Connection(props.rpcHost, commitment);

  //     if (props.candyMachineId) {
  //       try {
  //         const cndy = await getCandyMachineState(
  //           anchorWallet,
  //           props.candyMachineId,
  //           connection
  //         );
  //         console.log("Candy machine state: ", cndy);
  //         let active = cndy?.state.goLiveDate
  //           ? cndy?.state.goLiveDate.toNumber() < new Date().getTime() / 1000
  //           : false;
  //         let presale = false;

  //         // duplication of state to make sure we have the right values!
  //         let isWLUser = false;
  //         let userPrice = cndy.state.price;

  //         // whitelist mint?
  //         if (cndy?.state.whitelistMintSettings) {
  //           // is it a presale mint?
  //           if (
  //             cndy.state.whitelistMintSettings.presale &&
  //             (!cndy.state.goLiveDate ||
  //               cndy.state.goLiveDate.toNumber() > new Date().getTime() / 1000)
  //           ) {
  //             presale = true;
  //           }
  //           // is there a discount?
  //           if (cndy.state.whitelistMintSettings.discountPrice) {
  //             setDiscountPrice(cndy.state.whitelistMintSettings.discountPrice);
  //             userPrice = cndy.state.whitelistMintSettings.discountPrice;
  //           } else {
  //             setDiscountPrice(undefined);
  //             // when presale=false and discountPrice=null, mint is restricted
  //             // to whitelist users only
  //             if (!cndy.state.whitelistMintSettings.presale) {
  //               cndy.state.isWhitelistOnly = true;
  //             }
  //           }
  //           // retrieves the whitelist token
  //           const mint = new anchor.web3.PublicKey(
  //             cndy.state.whitelistMintSettings.mint
  //           );
  //           const token = (
  //             await getAtaForMint(mint, anchorWallet.publicKey)
  //           )[0];

  //           try {
  //             const balance = await connection.getTokenAccountBalance(token);
  //             isWLUser = parseInt(balance.value.amount) > 0;
  //             // only whitelist the user if the balance > 0
  //             setIsWhitelistUser(isWLUser);

  //             if (cndy.state.isWhitelistOnly) {
  //               active = isWLUser && (presale || active);
  //             }
  //           } catch (e) {
  //             setIsWhitelistUser(false);
  //             // no whitelist user, no mint
  //             if (cndy.state.isWhitelistOnly) {
  //               active = false;
  //             }
  //             console.log(
  //               "There was a problem fetching whitelist token balance"
  //             );
  //             console.log(e);
  //           }
  //         }
  //         userPrice = isWLUser ? userPrice : cndy.state.price;

  //         if (cndy?.state.tokenMint) {
  //           // retrieves the SPL token
  //           const mint = new anchor.web3.PublicKey(cndy.state.tokenMint);
  //           const token = (
  //             await getAtaForMint(mint, anchorWallet.publicKey)
  //           )[0];
  //           try {
  //             const balance = await connection.getTokenAccountBalance(token);

  //             const valid = new anchor.BN(balance.value.amount).gte(userPrice);

  //             // only allow user to mint if token balance >  the user if the balance > 0
  //             setIsValidBalance(valid);
  //             active = active && valid;
  //           } catch (e) {
  //             setIsValidBalance(false);
  //             active = false;
  //             // no whitelist user, no mint
  //             console.log("There was a problem fetching SPL token balance");
  //             console.log(e);
  //           }
  //         } else {
  //           const balance = new anchor.BN(
  //             await connection.getBalance(anchorWallet.publicKey)
  //           );
  //           const valid = balance.gte(userPrice);
  //           setIsValidBalance(valid);
  //           active = active && valid;
  //         }

  //         // datetime to stop the mint?
  //         if (cndy?.state.endSettings?.endSettingType.date) {
  //           setEndDate(toDate(cndy.state.endSettings.number));
  //           if (
  //             cndy.state.endSettings.number.toNumber() <
  //             new Date().getTime() / 1000
  //           ) {
  //             active = false;
  //           }
  //         }
  //         // amount to stop the mint?
  //         if (cndy?.state.endSettings?.endSettingType.amount) {
  //           const limit = Math.min(
  //             cndy.state.endSettings.number.toNumber(),
  //             cndy.state.itemsAvailable
  //           );
  //           if (cndy.state.itemsRedeemed < limit) {
  //             setItemsRemaining(limit - cndy.state.itemsRedeemed);
  //           } else {
  //             setItemsRemaining(0);
  //             cndy.state.isSoldOut = true;
  //           }
  //         } else {
  //           setItemsRemaining(cndy.state.itemsRemaining);
  //         }

  //         if (cndy.state.isSoldOut) {
  //           active = false;
  //         }

  //         const [collectionPDA] = await getCollectionPDA(props.candyMachineId);
  //         const collectionPDAAccount = await connection.getAccountInfo(
  //           collectionPDA
  //         );

  //         setIsActive((cndy.state.isActive = active));
  //         setIsPresale((cndy.state.isPresale = presale));
  //         setCandyMachine(cndy);

  //         const txnEstimate =
  //           892 +
  //           (!!collectionPDAAccount && cndy.state.retainAuthority ? 182 : 0) +
  //           (cndy.state.tokenMint ? 66 : 0) +
  //           (cndy.state.whitelistMintSettings ? 34 : 0) +
  //           (cndy.state.whitelistMintSettings?.mode?.burnEveryTime ? 34 : 0) +
  //           (cndy.state.gatekeeper ? 33 : 0) +
  //           (cndy.state.gatekeeper?.expireOnUse ? 66 : 0);

  //         setNeedTxnSplit(txnEstimate > 1230);
  //       } catch (e) {
  //         if (e instanceof Error) {
  //           if (
  //             e.message === `Account does not exist ${props.candyMachineId}`
  //           ) {
  //             setAlertState({
  //               open: true,
  //               message: `Couldn't fetch candy machine state from candy machine with address: ${props.candyMachineId}, using rpc: ${props.rpcHost}! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!`,
  //               severity: "error",
  //               hideDuration: null,
  //             });
  //           } else if (
  //             e.message.startsWith("failed to get info about account")
  //           ) {
  //             setAlertState({
  //               open: true,
  //               message: `Couldn't fetch candy machine state with rpc: ${props.rpcHost}! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!`,
  //               severity: "error",
  //               hideDuration: null,
  //             });
  //           }
  //         } else {
  //           setAlertState({
  //             open: true,
  //             message: `${e}`,
  //             severity: "error",
  //             hideDuration: null,
  //           });
  //         }
  //         console.log(e);
  //       }
  //     } else {
  //       setAlertState({
  //         open: true,
  //         message: `Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!`,
  //         severity: "error",
  //         hideDuration: null,
  //       });
  //     }
  //   },
  //   [anchorWallet, props.candyMachineId, props.error, props.rpcHost]
  // );

  // const onMint = async (
  //   beforeTransactions: Transaction[] = [],
  //   afterTransactions: Transaction[] = []
  // ) => {
  //   try {
  //     setIsUserMinting(true);
  //     if (wallet.connected && candyMachine?.program && wallet.publicKey) {
  //       let setupMint: SetupState | undefined;
  //       if (needTxnSplit && setupTxn === undefined) {
  //         setAlertState({
  //           open: true,
  //           message: "Please sign account setup transaction",
  //           severity: "info",
  //         });
  //         setupMint = await createAccountsForMint(
  //           candyMachine,
  //           wallet.publicKey
  //         );
  //         let status: any = { err: true };
  //         if (setupMint.transaction) {
  //           status = await awaitTransactionSignatureConfirmation(
  //             setupMint.transaction,
  //             props.txTimeout,
  //             props.connection,
  //             true
  //           );
  //         }
  //         if (status && !status.err) {
  //           setSetupTxn(setupMint);
  //           setAlertState({
  //             open: true,
  //             message:
  //               "Setup transaction succeeded! Please sign minting transaction",
  //             severity: "info",
  //           });
  //         } else {
  //           setAlertState({
  //             open: true,
  //             message: "Mint failed! Please try again!",
  //             severity: "error",
  //           });
  //           setIsUserMinting(false);
  //           return;
  //         }
  //       } else {
  //         setAlertState({
  //           open: true,
  //           message: "Please sign minting transaction",
  //           severity: "info",
  //         });
  //       }

  //       const mintResult = await mintOneToken(
  //         candyMachine,
  //         wallet.publicKey,
  //         beforeTransactions,
  //         afterTransactions,
  //         setupMint ?? setupTxn
  //       );

  //       let status: any = { err: true };
  //       let metadataStatus = null;
  //       if (mintResult) {
  //         status = await awaitTransactionSignatureConfirmation(
  //           mintResult.mintTxId,
  //           props.txTimeout,
  //           props.connection,
  //           true
  //         );

  //         metadataStatus =
  //           await candyMachine.program.provider.connection.getAccountInfo(
  //             mintResult.metadataKey,
  //             "processed"
  //           );
  //         console.log("Metadata status: ", !!metadataStatus);
  //       }

  //       if (status && !status.err && metadataStatus) {
  //         // manual update since the refresh might not detect
  //         // the change immediately
  //         const remaining = itemsRemaining! - 1;
  //         setItemsRemaining(remaining);
  //         setIsActive((candyMachine.state.isActive = remaining > 0));
  //         candyMachine.state.isSoldOut = remaining === 0;
  //         setSetupTxn(undefined);
  //         setAlertState({
  //           open: true,
  //           message: "Congratulations! Mint succeeded!",
  //           severity: "success",
  //           hideDuration: 7000,
  //         });
  //         refreshCandyMachineState("processed");
  //       } else if (status && !status.err) {
  //         setAlertState({
  //           open: true,
  //           message:
  //             "Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",
  //           severity: "error",
  //           hideDuration: 8000,
  //         });
  //         refreshCandyMachineState();
  //       } else {
  //         setAlertState({
  //           open: true,
  //           message: "Mint failed! Please try again!",
  //           severity: "error",
  //         });
  //         refreshCandyMachineState();
  //       }
  //     }
  //   } catch (error: any) {
  //     let message = error.msg || "Minting failed! Please try again!";
  //     if (!error.msg) {
  //       if (!error.message) {
  //         message = "Transaction timeout! Please try again.";
  //       } else if (error.message.indexOf("0x137")) {
  //         console.log(error);
  //         message = `SOLD OUT!`;
  //       } else if (error.message.indexOf("0x135")) {
  //         message = `Insufficient funds to mint. Please fund your wallet.`;
  //       }
  //     } else {
  //       if (error.code === 311) {
  //         console.log(error);
  //         message = `SOLD OUT!`;
  //         window.location.reload();
  //       } else if (error.code === 312) {
  //         message = `Minting period hasn't started yet.`;
  //       }
  //     }

  //     setAlertState({
  //       open: true,
  //       message,
  //       severity: "error",
  //     });
  //     // updates the candy machine state to reflect the latest
  //     // information on chain
  //     refreshCandyMachineState();
  //   } finally {
  //     setIsUserMinting(false);
  //   }
  // };

  // const toggleMintButton = () => {
  //   let active = !isActive || isPresale;

  //   if (active) {
  //     if (candyMachine!.state.isWhitelistOnly && !isWhitelistUser) {
  //       active = false;
  //     }
  //     if (endDate && Date.now() >= endDate.getTime()) {
  //       active = false;
  //     }
  //   }

  //   if (
  //     isPresale &&
  //     candyMachine!.state.goLiveDate &&
  //     candyMachine!.state.goLiveDate.toNumber() <= new Date().getTime() / 1000
  //   ) {
  //     setIsPresale((candyMachine!.state.isPresale = false));
  //   }

  //   setIsActive((candyMachine!.state.isActive = active));
  // };

  // useEffect(() => {
  //   refreshCandyMachineState();
  // }, [
  //   anchorWallet,
  //   props.candyMachineId,
  //   props.connection,
  //   refreshCandyMachineState,
  // ]);

  // useEffect(() => {
  //   (function loop() {
  //     setTimeout(() => {
  //       refreshCandyMachineState();
  //       loop();
  //     }, 20000);
  //   })();
  // }, [refreshCandyMachineState]);

  return (
    <Container style={{ marginTop: 20 }}>
      <AppBar 
        candyMachineId={props.candyMachineId}
        connection={props.connection}
        txTimeout={props.txTimeout}
        rpcHost={props.rpcHost}
        network={props.network}
        error={props.error}
        />
      <Container style={{ position: "relative", marginTop: 100 }}>
        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          wrap="nowrap"
          style={{gridGap: '35px'}}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            style={{gridGap: '35px', height: '100%'}}
          >
            <SplashTitle>
              <FunkyFlowerzTitle />
            </SplashTitle>
            <SplashQuote>
              <Typography>{FUNKY_FLOWERZ_QUOTE}</Typography>
            </SplashQuote>
            <FunkyFlowerzDescription>
              <Typography style={{fontWeight: 700, marginBottom: 10}}>Collective Digital Art</Typography>
              <Typography>{FUNKY_FLOWERS_DESC}</Typography>
            </FunkyFlowerzDescription>
          </Grid>
          <SplashImage>
            <img src="./funkyflowerz-top.png" alt="funkyflowerz top" />
          </SplashImage>
        </Grid>
        <Samples>
          <img src="./funkyflowerz-bg.png" alt="funky flowerz samples" />
        </Samples>
      </Container>
    </Container>
  );
};

const SplashTitle = styled.div`
  @media(max-width: 1023px) {
    svg {
      width: 100%;
      height: 100%;
      max-height: 167px;
    }
  }
`;

const SplashQuote = styled.div`
  p {
    font-size: 40px;
    font-height: 48px;
  }
`;

const FunkyFlowerzDescription = styled.div`
  margin-top: 66px;
  font-size: 24px;
  line-height: 25px;
`;

const SplashImage = styled.div`

  @media(max-width: 1023px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Samples = styled(Container)`
  padding-top: 140px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Home;
