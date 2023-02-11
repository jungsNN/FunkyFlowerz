/** TODO: Clean up props */
export interface LayoutProps {
  adjustVal?: string | undefined;
  align?: string | "start";
  by?: "column" | "column-reverse" | "row" | "row-reverse";
  defaultGap?: string | "0px";
  display?: string | "flex";
  gap?: string | undefined;
  gridAutoFlow?: "column" | "row";
  gridRows?: string | "auto";
  gridCols?: string | "auto";
  items?: string | "unset";
  justify?: string | "start";
  m?: string | "0";
  mb?: string | "0";
  ml?: string | "0";
  mr?: string | "0";
  mt?: string | "0";
  p?: string | "0";
  pb?: string | "0";
  pl?: string | "0";
  pr?: string | "0";
  pt?: string | "0";
  self?: string | "unset";
  wrap?: string | "nowrap";
}

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLElement> {
  align?: "center" | "end" | "start" | undefined;
  bold?: boolean | false;
  color?: string | undefined;
  display?: string | undefined;
  fontFamily?:
    | "Gotham"
    | "gotham-bold"
    | "gotham-book"
    | "gotham-light"
    | "gotham-medium"
    | string
    | undefined;
  fontSize?: string | undefined;
  lineHeight?: string | undefined;
  justify?:
    | "baseline"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"
    | "initial"
    | "revert"
    | undefined;
  mb?: number | string | undefined;
  mt?: number | string | undefined;
  maxw?: number | undefined;
  marginTop?: number | string | undefined;
  marginBottom?: number | string | undefined;
  size?: "sm" | "lg" | "default" | undefined;
  small?: boolean | false;
  textAlign?: "center" | "end" | "start" | undefined;
  thin?: boolean | false;
  weight?: string | undefined;
  whiteSpace?: "nowrap" | string | undefined;
  variant?: string | undefined;
}
