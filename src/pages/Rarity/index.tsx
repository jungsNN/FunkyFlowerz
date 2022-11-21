import { Grid } from "@material-ui/core";
import styled from "styled-components";
import Page from "../../components/Page";
import RarityChartTitle from "../../components/svgs/RarityChartTitle";
import SpecialEditionTitle from "../../components/svgs/SpecialEditionTitle";
import SuperiorTraitTitle from "../../components/svgs/SuperiorTraitTitle";
import useStore from "../../states";

const Rarity = () => {
  const store = useStore();

  return (
    <Page isMobile={store.isMobile}>
      <Grid container direction="column" style={{ gridGap: store.isMobile ? '64px' : 140 }}>
        <div className="grid grid-rows-2">
          <TitleWrapper>
            <RarityChartTitle />
          </TitleWrapper>
          <RarityChart>
            <img src="./rarity-chart.png" alt="rarity-chart" />
          </RarityChart>
        </div>
        <div className="grid grid-rows-2">
          <TitleWrapper>
            <SpecialEditionTitle />
          </TitleWrapper>
          <SpecialEditions>
            <img src="./special-editions.png" alt="rarity-chart" />
          </SpecialEditions>
        </div>
        <div className="grid grid-rows-2">
          <TitleWrapper>
            <SuperiorTraitTitle />
          </TitleWrapper>
          <SuperiorTraits>
            <img src="./superior-traits.png" alt="rarity-chart" />
          </SuperiorTraits>
        </div>
      </Grid>
    </Page>
  );
};

const TitleWrapper = styled.div`

  svg {
    width: 100%;
    height: 100%;
  }
  
  min-width: 845px;
  max-width: 845px;
  
  @media(max-width: 1339px) {
    min-width: calc(100vw / 1.6);
    max-width: calc(100vw / 1.6);
  }
  

  @media(max-width: 768px) {
    min-width: calc(100vw / 1.5);
    max-width: calc(100vw / 1.5);
  }
`;

const RarityChart = styled.div`
  padding-top: 2.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

const SpecialEditions = styled.div`
  padding-top: 2.5rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

const SuperiorTraits = styled.div`
  padding-top: 2.5rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 479px) {
    padding-top: 1.5rem;
  }
`;

export default Rarity;
