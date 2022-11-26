import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";
import {
  RarityChartTitle,
  SpecialEditionTitle,
  SuperiorTraitTitle,
} from "@/components/svgs";

const Rarity = () => {
  return (
    <Container style={{ paddingBottom: "10rem" }}>
      <Grid container direction="column" style={{ gridGap: 140 }}>
        <div className="rarity-chart">
          <TitleWrapper>
            <RarityChartTitle />
          </TitleWrapper>
          <RarityChart>
            <img src="./rarity-chart.png" alt="rarity-chart" />
          </RarityChart>
        </div>
        <div className="special-editions">
          <TitleWrapper>
            <SpecialEditionTitle />
          </TitleWrapper>
          <SpecialEditions>
            <img src="./special-editions.png" alt="rarity-chart" />
          </SpecialEditions>
        </div>
        <div className="superior-traits">
          <TitleWrapper>
            <SuperiorTraitTitle />
          </TitleWrapper>
          <SuperiorTraits>
            <img src="./superior-traits.png" alt="rarity-chart" />
          </SuperiorTraits>
        </div>
      </Grid>
    </Container>
  );
};

const TitleWrapper = styled.div`
  padding-left: 2rem;
  svg {
    width: 100%;
    height: 100%;
    max-width: calc(100vw / 2);
  }
`;

const RarityChart = styled(Container)`
  padding-top: 60px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SpecialEditions = styled(Container)`
  padding-top: 60px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SuperiorTraits = styled(Container)`
  padding-top: 60px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rarity;
