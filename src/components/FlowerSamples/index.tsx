import styled from "styled-components";
import { Container } from "../shared";

const FlowerSamples = ({ pt }: { pt?: string }) => {
  return (
    <Samples pt={pt}>
      <img src="./funkyflowerz-bg.png" alt="funky flowerz samples" />
    </Samples>
  );
};

const Samples = styled(Container)<{ pt?: string }>`
  padding-top: ${(props) => (props.pt ? props.pt : "0")};
  max-width: 720px;

  img {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    max-width: calc(100vw / 2);
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding-top: ${(props) => (props.pt ? `calc(${props.pt} - 32px)` : "0")};
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    padding-top: ${(props) => (props.pt ? `calc(${props.pt} / 2)` : "0")};
    max-width: calc(100vw / 1.6);
  }
`;

export default FlowerSamples;
