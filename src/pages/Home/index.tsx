import styled from "styled-components";
import { Container, Grid } from "../../components/shared";
import FlowerSamples from "../../components/FlowerSamples";
import HomeSplashBG from "../../components/svgs/HomeSplashBG";
import { FUNKY_FLOWERZ_INTRO_URI, IPFS_API_URL } from "../../constants/assets";
import Page from "../../components/Page";

const Home = ({ isMobile }: { isMobile: boolean }) => {
  return isMobile ? (
    <Page>
      <SplashContainer>
        <SplashHeader display="grid" gridAutoFlow="row">
          <SplashImage>
            <img
              className="funkyflowerz-gif"
              src="./funky-flowerz-top.gif"
              alt="funkyflowerz-gif"
            />
          </SplashImage>
          <SplashImage>
            <img
              className="funkyflowerz-intro"
              src={[IPFS_API_URL, FUNKY_FLOWERZ_INTRO_URI].join("/")}
              alt="funkyflowerz-intro"
            />
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
    grid-gap: calc(100vw * (64 / 480));
  }
`;

const SplashHeader = styled(Grid)`
  height: 100%;
  grid-gap: calc(100vw * (32 / 480));
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SplashImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .funkyflowerz-gif {
    width: calc(100vw * (128 / 480));
    height: calc(100vw * (128 / 480));
  }

  .funkyflowerz-intro {
    width: 100%;
    height: 100%;
  }
`;

export default Home;
