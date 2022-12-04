import React from "react";
import styled from "styled-components";
import { Container } from "../shared";
import Footer from "../Footer";

const Page: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <Wrapper>{children}</Wrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageContainer>
  );
};

const PageContainer = styled(Container)`
  height: 100vh;
  max-width: calc(100vw * (1288 / 1512));
  align-items: start;
  justify-content: center;

  @media (min-width: 1512px) {
    max-width: 1288px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    max-width: calc(100vw * (392 / 480));
  }
`;

const Wrapper = styled.div`
  padding-left: 0;
  padding-right: 0;
`;

const FooterWrapper = styled.div`
  margin-top: calc(100vw * (128 / 1512));

  ${(props) => props.theme.mediaQueries.mobile} {
    margin-top: calc(100vw * (128 / 480));
  }
`;

export default Page;
