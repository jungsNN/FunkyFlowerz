import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../shared";

const Page: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container width="100%" height="100vh" maxWidth="1400px">
        {children}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  align-items: start;
  justify-content: center;

  ${(props) => props.theme.mediaQueries.desktopXl} {
    padding-left: 128px;
    padding-right: 128px;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default Page;
