import { createGlobalStyle } from "styled-components";
import { AppTheme } from "./types";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.colors.bg}; 
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export default GlobalStyles;
