import styled from "styled-components";
import { Grid } from "../../components/shared";
import { Page } from "../../components";
import {
  RarityChartTitle,
  SpecialEditionTitle,
  SuperiorTraitTitle,
} from "../../components/svgs";

const Rarity = () => {
  return (
    <Page>
      <Container container direction="column">
        <Section>
          <TitleWrapper>
            <RarityChartTitle />
          </TitleWrapper>
          <img src="./rarity-chart.png" alt="rarity-chart" />
        </Section>
        <Section>
          <TitleWrapper>
            <SpecialEditionTitle />
          </TitleWrapper>
          <img src="./special-editions.png" alt="rarity-chart" />
        </Section>
        <Section>
          <TitleWrapper>
            <SuperiorTraitTitle />
          </TitleWrapper>
          <img src="./superior-traits.png" alt="rarity-chart" />
        </Section>
      </Container>
    </Page>
  );
};

const Container = styled(Grid)`
  grid-gap: 144px;

  ${(props) => props.theme.mediaQueries.desktop} {
    grid-gap: 128px;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-gap: 96px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: 64px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  min-width: 192px;
  max-width: calc(100vw / 1.5);

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.desktopXl} {
    max-width: 896px;
  }
`;

const Section = styled(Grid)`
  display: grid;
  flex-direction: row;
  grid-gap: 64px;
  padding-left: 32px;
  padding-right: 32px;

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    grid-gap: 48px;
    padding-left: 16px;
    padding-right: 16px;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-gap: 32px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    grid-gap: 24px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export default Rarity;
