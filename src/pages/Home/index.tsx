import styled from "styled-components";
import { FunkyFlowerzTitle } from "../../components/svgs";
import { Container, Grid, Text, Title } from "../../components/shared";
import { FlowerSamples, Page } from "../../components";
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
        <FlowerSamples pt="128px" />
      </Container>
    </Page>
  );
};

const SplashHeader = styled(Grid)`
  flex-wrap: nowrap;
  padding-left: 0;
  padding-right: 0;

  ${(props) => props.theme.mediaQueries.mobile} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const SplashTitle = styled.div`
  padding-right: 48px;

  svg {
    height: 100%;
    width: 100%;
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    padding-right: 32px;
  }
`;

const SplashQuote = styled.div``;

const FunkyFlowerzDescription = styled.div``;

const SplashImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    max-width: 507px;
    max-height: 507px;
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    img {
      max-width: 392px;
      max-height: 392px;
    }
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    width: calc(100vw / 2.4);
  }
`;

export default Home;
