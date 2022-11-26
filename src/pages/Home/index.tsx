import { Container } from "@material-ui/core";
import styled from "styled-components";
import { FunkyFlowerzTitle } from "../../components/svgs";
import { Grid, Text, Title } from "../../components/shared";
import { useStore } from "../../hooks";

const Home = () => {
  const store = useStore();

  return (
    <Container style={{ paddingBottom: "10rem" }}>
      <Container style={{ position: "relative" }}>
        <Grid
          container
          direction={store.isMobile ? "column-reverse" : "row"}
          align="end"
          justify="space-between"
          wrap="nowrap"
          gap="35px"
        >
          <Grid
            container
            direction="column"
            align="start"
            justify="space-between"
            gap="32px"
          >
            <SplashTitle>
              <FunkyFlowerzTitle />
            </SplashTitle>
            <SplashQuote>
              <Title>
                There are always flowers for those who want to see them.
              </Title>
              <Title>- Matisse</Title>
            </SplashQuote>
            <FunkyFlowerzDescription>
              <Title small>Collectible Digital Art</Title>
              <Text>
                A collection of 2700 hand-made flowers from 9 species, including
                dozens of insect variants and mutations. 50% proceeds donated to
                environmental organizations.
              </Text>
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

const SplashQuote = styled.div``;

const FunkyFlowerzDescription = styled.div`
  margin-top: 16px;
  max-width: 680px;

  ${(props) => props.theme.mediaQueries.tablet} {
    margin-top: 8px;
  }
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
