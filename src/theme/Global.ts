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
    font-family: "Lato", "Roboto", "Noto Sans SC Sliced", "Helvetica", "Arial",  sans-serif;
    overflow-x: hidden;
  }
  .light {
    background-color: #eef2f3;
  }
  .dark {
    background-color: #2D2E3;
  }
  // active theme
  .active{
      border: 3px solid hsl(0, 0%, 87%);
      }
`;

export default GlobalStyles;
