import styled from "styled-components";
import { Container, Grid } from "../../components/shared";
import FlowerSamples from "../../components/FlowerSamples";
import HomeSplashBG from "../../components/svgs/HomeSplashBG";
import Page from "../../components/Page";
import { useStore } from "../../hooks";

const Home = () => {
  const isMobile = useStore.getState().isMobile;

  return isMobile ? (
    <Page>
      <SplashContainer>
        <SplashHeader
          container
          align="center"
          direction="column-reverse"
          display="flex"
          gap="48px"
          gridCols="repeat(2, 1fr)"
          wrap="nowrap"
        >
          <HomeSplashBG isMobile />
          <SplashImage>
            <img src="./funky-flowerz-top.gif" alt="funkyflowerz-top" />
          </SplashImage>
        </SplashHeader>
        <FlowerSamples />
      </SplashContainer>
    </Page>
  ) : (
    <Page>
      <SplashContainer>
        <HomeSplashBG />
      </SplashContainer>
    </Page>
  );
};

const SplashContainer = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    display: grid;
    grid-auto-flow: row;
    align-items: start;
    justify-content: center;
    grid-gap: 64px;
  }
`;

const SplashHeader = styled(Grid)`
  height: 100%;
  justify-content: center;
`;

const SplashImage = styled.div`
  width: calc(100vw * (128 / 480));
  height: calc(100vw * (128 / 480));

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Home;
