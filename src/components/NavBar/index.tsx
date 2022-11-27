import styled from "styled-components";
import { useState } from "react";
import Button from "../Button";
import { HamburgerMenuIcon, WalletIcon } from "../svgs";
import { Grid } from "../shared";

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

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <Button>
        <WalletIcon />
      </Button>
      <Button
        style={{ zIndex: "20" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HamburgerMenuIcon color="white" />
      </Button>
    </Grid>
  );
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const isMobile = props.isMobile;
  const onNavigate = props.onNavigate;

  return isMobile ? <MobileNavBar /> : <Menu onNavigate={onNavigate} />;
};

const NavLinks = styled(Grid)`
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  justify-content: flex-end;

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-gap: 40px;
  }
`;

export default NavBar;
