import { Breakpoints, MediaQueries, Spacing } from "./types";

export const breakpointMap: { [key: string]: number } = {
  mobile: 480,
  tablet: 1023,
  desktop: 1440,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
);

const mediaQueries: MediaQueries = {
  mobile: `@media (max-width: ${breakpointMap.mobile}px)`,
  tablet: `@media (max-width: ${breakpointMap.tablet}px)`,
  desktop: `@media (max-width: ${breakpointMap.desktop - 1}px)`,
  desktopXl: `@media screen and (min-width: ${breakpointMap.desktop}px)`,
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  default: "8px",
  small: "4px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

const sizes = {
  card: {
    default: "calc(100vw / 4)",
    small: "calc(100vw / 6)",
    mobile: "100%",
    tablet: "calc(100vw / 4)",
  },
  button: {
    default: "160px",
    sm: "64",
  },
};

export const layouts = {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  radii,
  zIndices,
  sizes,
};

export default layouts;
