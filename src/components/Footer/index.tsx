import styled from "styled-components";
import { Container, Title } from "../shared";

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Wrapper>
        <Title
          thin
          variant="caption"
        >{`Copyright © ${new Date().getFullYear()} Funky Flowerz`}</Title>
      </Wrapper>
    </FooterBox>
  );
};

const FooterBox = styled(Container)`
  align-items: end;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: calc(100vw * (256 / 1512));

  ${(props) => props.theme.mediaQueries.mobile} {
    height: calc(100vw * (128 / 480));
  }
`;

const Wrapper = styled.div`
  padding-bottom: calc(100vw * (64 / 1512));
  padding-top: calc(100vw * (48 / 1512));

  ${(props) => props.theme.mediaQueries.mobile} {
    padding-bottom: calc(100vw * (48 / 480));
    padding-top: calc(100vw * (32 / 480));
  }
`;

export default Footer;
