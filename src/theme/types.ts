export interface AppTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  zIndices: ZIndices;
  radii: Radii;
  sizes: Sizes;
  shadows?: Shadows;
}

export type Breakpoints = string[];

export type MediaQueries = {
  mobile: string;
  tablet: string;
  desktop: string;
  desktopXl: string;
};

export type Spacing = number[];

export type ZIndices = {
  dropdown: number;
  modal: number;
};

export type Radii = {
  small: string;
  default: string;
  circle: string;
};

export type Colors = {
  orange: string;
  primary: string;
  purple: string;
  secondary?: string;
  tertiary?: string;
  textPrimary?: string;
  textSecondary?: string;
  textHighlight?: string;
  textDisabled?: string;
  textInverted?: string;
  red?: string;
  blue?: string;
  green?: string;
  bg?: string;
  card?: string;
  gradient?: string;
  buttonSurface?: string;
  buttonText?: string;
  border?: string;
  disabled?: string;
};

export type ElevationShadows = {
  default: string;
  card: string;
  hover: string;
};

export type BaseFonts = {
  fontFamily: string;
  fontStyle: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  textTransform?: string;
};

export type Fonts = {
  h1Regular: BaseFonts;
  bodyRegular: BaseFonts;
  bodyBold: BaseFonts;
  buttonBold: BaseFonts;
  label: BaseFonts;
  uppercaseRegular: BaseFonts;
  uppercaseBold: BaseFonts;
};

export interface Shadows extends ElevationShadows {
  default: string;
  card: string;
  hover: string;
}

export type Sizes = {
  card: {
    default: string;
    mobile: string;
    small: string;
    tablet: string;
  };
  button: {
    default: string;
    sm: string;
  };
};
