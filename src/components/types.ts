export interface LayoutProps {
  adjustVal?: string | undefined;
  align?: string | "start";
  by?: "column" | "column-reverse" | "row" | "row-reverse";
  defaultGap?: string | "0px";
  display?: string | "flex";
  gap?: string | undefined;
  gridFlow?: "column" | "row";
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
