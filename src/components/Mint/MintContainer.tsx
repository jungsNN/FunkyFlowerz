import styled from "styled-components";

const MintContainer: React.FC = (props) => {
  const { children, ...rest } = props;

  return <StyledMintContainer {...rest}>{children}</StyledMintContainer>;
};

const StyledMintContainer = styled.div`
  position: relative;

  ${(props) => props.theme.mediaQueries.mobile} {
    min-width: 40px;
  }
`;

export default MintContainer;
