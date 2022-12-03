import styled from "styled-components";
import { Container } from "../../components/shared";
import HomeSplashBG from "../../components/svgs/HomeSplashBG";
import Page from "../../components/Page";

const Home = () => {
  return (
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
`;

export default Home;
