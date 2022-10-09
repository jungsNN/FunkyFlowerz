import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FunkyFlowerzTitle from "../../components/svgs/FunkyFlowerzTitle";

const FUNKY_FLOWERZ_QUOTE =
  "There are always flowers for those who want to see them.\n-- Matisse";
const FUNKY_FLOWERS_DESC =
  "A collection of 2700 hand-made flowers from 9 species, including dozens of insect variants and mutations. 50% proceeds donated to environmental organizations.";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 1024);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 1024);
      });
    };
  }, []);

  return (
    <Container style={{ paddingBottom: "10rem" }}>
      <Container style={{ position: "relative" }}>
        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          wrap="nowrap"
          style={{ gridGap: "35px" }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            style={{ gridGap: "35px", height: "100%" }}
          >
            <SplashTitle>
              <FunkyFlowerzTitle />
            </SplashTitle>
            <SplashQuote>
              <Typography>{FUNKY_FLOWERZ_QUOTE}</Typography>
            </SplashQuote>
            <FunkyFlowerzDescription>
              <Typography style={{ fontWeight: 700, marginBottom: 10 }}>
                Collective Digital Art
              </Typography>
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
  @media (max-width: 1023px) {
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
