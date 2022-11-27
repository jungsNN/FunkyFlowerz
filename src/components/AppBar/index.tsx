import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "../shared";
import { FunkyFlowerzLogo } from "../svgs";
import NavBar from "../NavBar";
import Wallet from "../Wallet";
import { useStore, useWindowSize } from "../../hooks";

const AppBar = () => {
  const store = useStore();
  const navigate = useNavigate();
  const windowWidth = useWindowSize();
  const isMobile = useMemo(() => store.isMobile, [store.isMobile]);

  const setIsMobile = () => {
    store.setIsMobile((windowWidth?.width ?? window.innerWidth) < 768);
  };

  useEffect(() => {
    setIsMobile();
  }, []);

  return (
    <Container
      style={{
        marginTop: store.isMobile ? "16px" : "32px",
        marginBottom: store.isMobile ? "32px" : "64px",
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
          <AppBarGrid display="grid" isMobile={isMobile}>
            <div className="home-logo" onClick={() => navigate("/")}>
              <FunkyFlowerzLogo />
            </div>
            <Grid display="grid" gap="32px" gridFlow="column">
              <NavBar
                isMobile={store.isMobile}
                onNavigate={(path: string) => navigate(path)}
              />
              {!isMobile && <Wallet />}
            </Grid>
          </AppBarGrid>
        </Paper>
      </Container>
    </Container>
  );
};

const AppBarGrid = styled(Grid)<{ isMobile: boolean }>`
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 48px;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;

  .home-logo {
    cursor: pointer;
    width: 48px;
    height: 48px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-gap: 32px;
  }
`;

export default AppBar;
