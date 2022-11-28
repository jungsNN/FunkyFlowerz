import styled from "styled-components";
import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import Button from "../Button";
import { Grid, Text } from "../shared";
import { MoreIcon, WalletIcon } from "../svgs";
import SideDrawer from "../SideDrawer";
import Wallet from "../Wallet";

interface NavBarProps {
  isMobile: boolean;
  onNavigate: (path: string) => void;
}

const Menu = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const navButtonStyle = {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
  };

  return (
    <NavLinks container display="grid">
      <Button
        onClick={() => onNavigate("/")}
        variant="text"
        style={navButtonStyle}
      >
        Home
      </Button>
      <Button
        onClick={() => onNavigate("/rarity")}
        variant="text"
        style={navButtonStyle}
      >
        Rarity
      </Button>
      <Button
        onClick={() => onNavigate("/team")}
        variant="text"
        style={navButtonStyle}
      >
        Team
      </Button>
    </NavLinks>
  );
};

const MobileNavBar = ({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) => {
  return (
    <Grid
      item
      align="center"
      by="column"
      display="grid"
      gap="32px"
      gridCols="repeat(2, 1fr)"
      justify="justify-between"
    >
      <Wallet
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
      />
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
          <MobileWallet />
          <Menu onNavigate={onNavigate} />
        </Grid>
      </SideDrawer>
    </Grid>
  );
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const isMobile = props.isMobile;
  const onNavigate = props.onNavigate;

  return isMobile ? (
    <MobileNavBar onNavigate={onNavigate} />
  ) : (
    <Menu onNavigate={onNavigate} />
  );
};

const NavLinks = styled(Grid)`
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
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

const MobileIconWallet = styled(WalletModalButton)`
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
`;

const MobileWallet = styled(Wallet)`
  ${(props) => props.theme.mediaQueries.mobile} {
    display: flex;
    justify-content: flex-end;
    padding-right: 48px;
    min-width: 0;
  }
`;

export default NavBar;
