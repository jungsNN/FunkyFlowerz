import styled from "styled-components";
import { Container } from "../../components/shared";
import { Page } from "../../components";
import { FUNKY_FLOWERZ_SPLASH_URI, IPFS_API_URL } from "../../constants/assets";

const Home = () => {
  return (
    <Page>
      <SplashContainer>
        <SplashBG
          src={[IPFS_API_URL, FUNKY_FLOWERZ_SPLASH_URI].join("/")}
          alt="funkyflowerz-splash"
        />
      </SplashContainer>
    </Page>
  );
};

const SplashContainer = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SplashBG = styled.img`
  width: 100%;
  height: 100%;
`;

export default Home;
