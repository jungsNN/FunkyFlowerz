import styled from "styled-components";
import { Container, Title } from "../shared";

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <Wrapper>
        <Title thin small>{`${"Copyright © 2022 Funky Flowerz"}`}</Title>
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
`;

const Wrapper = styled.div`
  padding-bottom: calc(100vw * (64 / 1512));
  padding-top: calc(100vw * (48 / 1512));
`;

export default Footer;
