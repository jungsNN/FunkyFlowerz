import { DefaultTheme } from "styled-components";
import colors from "./colors";
import layouts from "./layouts";

export const theme: DefaultTheme = {
  ...layouts,
  isDark: false,
  colors: colors,
};
