import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../shared";

const Page: React.FC = ({ children }) => {
  return (
    <Container width="100%" height="100vh" maxW="1400px">
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

const Wrapper = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  align-items: start;
  justify-content: center;

  @media (min-width: 1568px) {
    padding-left: 0;
    padding-right: 0;
  }

  ${(props) => props.theme.mediaQueries.desktopXl} {
    padding-left: 128px;
    padding-right: 128px;
  }

  ${(props) => props.theme.mediaQueries.desktop} {
    padding-left: 64px;
    padding-right: 64px;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    padding-left: 48px;
    padding-right: 48px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export default Page;
