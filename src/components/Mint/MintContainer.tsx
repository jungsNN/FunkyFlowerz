import React from "react";
import styled, { CSSProperties } from "styled-components";

const MintContainer: React.FC<
  React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = (props) => {
  const { children, ...rest } = props;

  return <StyledMintContainer {...rest}>{children}</StyledMintContainer>;
};

const StyledMintContainer = styled.div`
  position: relative;

  ${(props) => props.theme.mediaQueries.mobile} {
    position: initial;
  }
`;

export default MintContainer;
