import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
// import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ConnectionProps } from "../../models/connection";
import { Container, Grid, Title } from "../shared";
import { FunkyFlowerzLogo, MoreIcon } from "../svgs";
import SideDrawer from "../SideDrawer";
// import Wallet from "../Wallet";
import { useStore, useWindowSize } from "../../hooks";

const AppBar: React.FC<ConnectionProps> = (props) => {
  const store = useStore();
  const navigate = useNavigate();
  const windowWidth = useWindowSize();

  const setIsMobile = () => {
    store.setIsMobile((windowWidth?.width ?? window.innerWidth) < 768);
  };

  useEffect(() => {
    setIsMobile();
    store.setConnection({ ...props });
  }, []);

  return (
    <Container
      style={{
        marginTop: store.isMobile ? "32px" : "48px",
        marginBottom: store.isMobile ? "48px" : "64px",
      }}
    >
      <Container>
        <Paper
          elevation={0}
          style={{
            paddingBottom: 0,
            backgroundColor: "transparent",
          }}
        >
          <AppBarGrid display="grid">
            <div className="home-logo" onClick={() => navigate("/")}>
              <FunkyFlowerzLogo />
            </div>
            <Grid display="grid" gap="40px" gridAutoFlow="column">
              {store.isMobile ? (
                <MobileNavBar
                  // candyProps={store.connection}
                  onNavigate={navigate}
                />
              ) : (
                <Menu onNavigate={navigate} />
              )}
              {/* {!store.isMobile && <Wallet {...store.connection} />} */}
            </Grid>
          </AppBarGrid>
        </Paper>
      </Container>
    </Container>
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
  // candyProps,
  onNavigate,
}: {
  onNavigate: (path: string) => void;
  candyProps?: ConnectionProps;
}) => {
  return (
    <Grid
      item
      align="center"
      display="grid"
      gap={"32px"}
      gridAutoFlow="column"
      justify="justify-between"
    >
      {/* <Wallet
        customButton={
          <MobileIconWallet>
            <div style={{ height: "40px" }}>
              <WalletIcon stroke="#FF5FDC" bg="black" />
            </div>
            <Text
              bold
              color="#ffffffd1"
              style={{ fontSize: "10px", marginTop: "2px" }}
            >
              Connect
            </Text>
          </MobileIconWallet>
        }
        {...candyProps}
      /> */}
      <SideDrawer
        actionButton={
          <MoreIcon
            height="48px"
            stroke="#ffffffd1"
            bg="black"
            width="48px"
            variant="rounded-filled"
          />
        }
      >
        <Grid
          direction="column"
          align="center"
          justify="space-between"
          pt="48px"
        >
          {/* {!candyProps.connected && <MobileWallet {...candyProps} />} */}
          <Menu onNavigate={onNavigate} />
        </Grid>
      </SideDrawer>
    </Grid>
  );
};

const AppBarGrid = styled(Grid)`
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 32px;
  justify-content: space-between;
  padding-left: 64px;
  padding-right: 64px;

  .home-logo {
    cursor: pointer;
    width: 100%;
    height: auto;
    max-height: 96px;

    svg {
      width: 100%;
      height: auto;
      max-height: 96px;
    }
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    .home-logo {
      cursor: pointer;
      width: 100%;
      height: auto;
      max-height: 64px;

      svg {
        width: 100%;
        height: auto;
        max-height: 64px;
      }
    }
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-gap: 32px;
  }
`;

const NavLinks = styled(Grid)`
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  justify-content: flex-end;

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-gap: 40px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    padding-right: 48px;
    padding-top: 48px;
  }
`;

// const MobileIconWallet = styled(WalletModalButton)`
//   padding: 0;
//   margin: 0;
//   background: transparent;
//   border: none;
//   display: grid;
//   grid-template-rows: auto 1fr;
//   justify-content: center;
//   align-items: center;
// `;

// const MobileWallet = styled(Wallet)<{ connected?: boolean }>`
//   ${(props) => props.theme.mediaQueries.mobile} {
//     display: flex;
//     justify-content: flex-end;
//     padding-right: ${(props) => (props.connected ? "0" : "48px")};
//     min-width: 20px;
//   }
// `;

const MenuButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  box-shadow: none;
`;

export default AppBar;
