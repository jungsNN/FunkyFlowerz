import type { ButtonProps } from "@mui/material/Button";
import { useCallback } from "react";
import styled from "styled-components";
import { useStore } from "../../hooks";
import { StyledText, StyledTitle } from "../shared";

interface CustomButtonProps extends ButtonProps {
  isIcon?: boolean;
}

const Button: React.FC<CustomButtonProps> = (props) => {
  const children = props.children;
  const isMobile = useCallback(() => useStore.getState().isMobile, []);

  return (
    <StyledButton
      isIcon={props.isIcon ?? false}
      isMobile={isMobile()}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ isIcon: boolean; isMobile: boolean }>`
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  background: ${(props) =>
    props.isIcon ? "transparent" : props.theme.colors.pink};
  border-radius: ${(props) =>
    props.isIcon
      ? "50%"
      : `calc(100vw * (${props.isMobile ? "16 / 480" : "20 / 1512"}))`};
  border: none;
  box-shadow: none;
  min-width: ${(props) =>
    props.isIcon
      ? "100%"
      : `calc(100vw * (${props.isMobile ? "160 / 480" : "237 / 1512"}))`};
  max-width: ${(props) =>
    props.isIcon
      ? "100%"
      : `calc(100vw * (${props.isMobile ? "160 / 480" : "237 / 1512"}))`};
  min-height: ${(props) =>
    props.isIcon
      ? "100%"
      : `calc(100vw * (${props.isMobile ? "48 / 480" : "62 / 1512"}))`};
  max-height: ${(props) =>
    props.isIcon
      ? "100%"
      : `calc(100vw * (${props.isMobile ? "48 / 480" : "62 / 1512"}))`};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  > * {
    ${{ StyledText, StyledTitle }}:where(:not(svg)) {
      color: ${(props) => props.theme.colors.textPrimary};
      font-size: calc(
        100vw * (${(props) => (props.isMobile ? "20 / 480" : "24 / 1512")})
      );
      line-height: calc(
        100vw * (${(props) => (props.isMobile ? "18 / 480" : "16 / 1512")})
      );
      margin-top: calc(
        100vw * (${(props) => (props.isMobile ? "12 / 480" : "16 / 1512")})
      );
    }
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

export default Button;
