import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../shared";

const Page: React.FC = ({ children }) => {
  return (
    <Container width="100%" height="100vh" maxW="calc(100vw * (1288 / 1512))">
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

  @media (min-width: 1512px) {
    max-width: 1288px;
  }
`;

export default Page;
