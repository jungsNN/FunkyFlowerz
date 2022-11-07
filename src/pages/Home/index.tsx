import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import FunkyFlowerzTitle from "../../components/svgs/FunkyFlowerzTitle";
import useStore from "../../states";

const Home = () => {
  const store = useStore();

  return (
    <Container style={{ paddingBottom: "10rem" }}>
      <Container style={{ position: "relative" }}>
        <Grid
          container
          direction={store.isMobile ? "column" : "row"}
          justifyContent="space-between"
          wrap="nowrap"
          style={{ alignItems: "end", gridGap: "35px" }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            style={{ gridGap: "30px", height: "100%" }}
          >
            <SplashTitle>
              <FunkyFlowerzTitle />
            </SplashTitle>
            <SplashQuote>
              <Typography style={{ lineHeight: "48px" }}>
                <div>
                  There are always flowers for those who want to see them.
                </div>
                <div>- Matisse</div>
              </Typography>
            </SplashQuote>
            <FunkyFlowerzDescription>
              <Typography
                style={{ fontSize: "24px", fontWeight: 700, marginBottom: 10 }}
              >
                Collectible Digital Art
              </Typography>
              <Typography style={{ fontSize: "24px", lineHeight: "1.75rem" }}>
                <div>
                  A collection of 2700 hand-made flowers from 9 species,{" "}
                </div>
                <div>including dozens of insect variants and mutations. </div>
                <div>50% proceeds donated to environmental organizations.</div>
              </Typography>
            </FunkyFlowerzDescription>
          </Grid>
          <SplashImage>
            <img
              src="./funky-flowerz-top.gif"
              alt="funkyflowerz top"
              width={store.isMobile ? "100%" : "507px"}
              height={store.isMobile ? "100%" : "507px"}
            />
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
  @media (max-width: 1023px) {
    svg {
      width: 100%;
      height: 100%;
      max-height: 160px;
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
  margin-top: calc(66px - 50px);
  font-size: 24px;
  max-width: 680px;
`;

const SplashImage = styled.div`
  @media (max-width: 1023px) {
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
