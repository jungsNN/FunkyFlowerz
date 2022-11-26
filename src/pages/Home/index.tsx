import { Container } from "@material-ui/core";
import styled from "styled-components";
import { FunkyFlowerzTitle } from "../../components/svgs";
import { Grid, Text, Title } from "../../components/shared";
import { Page } from "../../components";
import { useStore } from "../../hooks";

const Home = () => {
  const store = useStore();

  return (
    <Page>
      <Container style={{ position: "relative" }}>
        <SplashHeader
          container
          align={store.isMobile ? "center" : "end"}
          direction={store.isMobile ? "column-reverse" : "row"}
          display={store.isMobile ? "flex" : "grid"}
          gap={store.isMobile ? "48px" : "35px"}
          gridCols="repeat(2, 1fr)"
        >
          <Grid
            container
            direction="column"
            align="start"
            justify="space-between"
            gap="35px"
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
            <img src="./funky-flowerz-top.gif" alt="funkyflowerz top" />
          </SplashImage>
        </SplashHeader>
        <Samples>
          <img src="./funkyflowerz-bg.png" alt="funky flowerz samples" />
        </Samples>
      </Container>
    </Page>
  );
};

const SplashHeader = styled(Grid)`
  flex-wrap: nowrap;
`;

const SplashTitle = styled.div`
  width: 576px;
  padding-right: 48px;

  svg {
    height: 100%;
    width: 100%;
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    width: 484px;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding-right: 0;
    width: 441px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    width: 100%;
  }
`;

const SplashQuote = styled.div``;

const FunkyFlowerzDescription = styled.div``;

const SplashImage = styled.div`
  width: 100%;
  min-width: 225px;

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    width: calc(100vw / 2.4);
  }
`;

const Samples = styled(Container)`
  padding-top: 140px;

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding-top: 100px;
  }
`;

export default Home;
