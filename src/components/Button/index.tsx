import type { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";

interface CustomButtonProps extends ButtonProps {
  isIcon?: boolean;
}

const Button: React.FC<CustomButtonProps> = (props) => {
  const children = props.children;

  return (
    <StyledButton isIcon={props.isIcon ?? false} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ isIcon: boolean }>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 100%;
  height: auto;
  padding: 0;
  background: ${(props) =>
    props.isIcon ? "transparent" : props.theme.colors.pink};
  border-radius: ${(props) =>
    props.isIcon ? "50%" : "calc(100vw * (20 / 1512))"};
  border: none;
  box-shadow: none;
  min-width: ${(props) =>
    props.isIcon ? "100%" : "calc(100vw * (237 / 1512))"};
  max-width: ${(props) =>
    props.isIcon ? "100%" : "calc(100vw * (237 / 1512))"};
  min-height: ${(props) =>
    props.isIcon ? "100%" : "calc(100vw * (62 / 1512))"};
  max-height: ${(props) =>
    props.isIcon ? "100%" : "calc(100vw * (62 / 1512))"};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  > * {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: calc(100vw * (24 / 1512));
    line-height: calc(100vw * (16 / 1512));
    margin-top: calc(100vw * (16 / 1512));
  }

  @media (min-width: 1512px) {
    border-radius: 20px;
    min-width: ${(props) => (props.isIcon ? "100%" : "237px")};
    max-width: ${(props) => (props.isIcon ? "100%" : "237px")};
    min-height: ${(props) => (props.isIcon ? "100%" : "62px")};
    max-height: ${(props) => (props.isIcon ? "100%" : "62px")};

    > * {
      font-size: 24px;
      line-height: 16px;
      margin-top: 16px;
    }
  }
`;

// ${(props) => props.theme.mediaQueries.mobile} {
//   border-radius: 16px;
//   padding: 16px 8px;
//   max-width: 128px;

//   > * {
//     p {
//       margin-top: 8px;
//     }
//   }
// }

export default Button;
