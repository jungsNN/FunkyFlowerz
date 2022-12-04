import styled from "styled-components";
import { Grid } from "../../components/shared";
import { Page } from "../../components";
import {
  IPFS_API_URL,
  RARITY_CHART_URI,
  RARITY_SPECIAL_EDITIONS_URI,
  RARITY_SUPERIOR_TRAITS_URI,
} from "../../constants/assets";

const Rarity = () => {
  return (
    <Page>
      <Container container display="grid">
        <img
          src={[IPFS_API_URL, RARITY_CHART_URI].join("/")}
          alt="rarity-chart"
        />
        <img
          src={[IPFS_API_URL, RARITY_SPECIAL_EDITIONS_URI].join("/")}
          alt="rarity-chart"
        />
        <img
          src={[IPFS_API_URL, RARITY_SUPERIOR_TRAITS_URI].join("/")}
          alt="rarity-chart"
        />
      </Container>
    </Page>
  );
};

const Container = styled(Grid)`
  grid-auto-flow: row;
  grid-gap: calc(100vw * (140 / 1512));

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1512px) {
    grid-gap: 140px;
  }
`;

export default Rarity;
