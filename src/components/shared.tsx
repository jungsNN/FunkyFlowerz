import { Grid as MuiGrid } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";
import styled from "styled-components";
import { LayoutProps } from "./types";

export const Col = styled.div<LayoutProps>`
  align-items: ${(props) => props.align};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => props.gap ?? props.defaultGap};
  grid-template-columns: ${(props) => props.gridCols};
  justify-content: ${(props) => props.justify};
  justify-items: ${(props) => props.items};

  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-gap: ${(props) =>
      props.gap
        ? props.gap
        : props.defaultGap
        ? `calc(${props.defaultGap} - ${props.adjustVal})`
        : "0px"};
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-gap: ${(props) =>
      props.gap
        ? props.gap
        : props.defaultGap
        ? `calc((${props.defaultGap} - ${props.adjustVal}) - 8px)`
        : "0px"};
  }
`;

export const Container = styled.div<{
  height?: string;
  maxH?: string;
  minH?: string;
  maxW?: string;
  minW?: string;
  width?: string;
}>`
  box-sizing: border-box;
  display: block;
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxH};
  min-width: ${(props) => props.minH};
  max-width: ${(props) => props.maxW ?? "1440px"};
  min-width: ${(props) => props.minW};
  width: ${(props) => props.width ?? "100%"};
  margin-left: auto;
  margin-right: auto;
`;

export const Flex = styled.div<LayoutProps>`
  align-items: ${(props) => props.align};
  align-self: ${(props) => props.self};
  display: flex;
  direction: ${(props) => props.by ?? "row"};
  justify-content: ${(props) => props.justify};
  justify-items: ${(props) => props.items};
  flex-wrap: ${(props) => props.wrap};
  margin: ${(props) => props.m};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  margin-top: ${(props) => props.mt};
  padding: ${(props) => props.p};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding-top: ${(props) => props.pt};
`;

export const Grid = styled(MuiGrid)<
  { align?: string; justify?: string } & LayoutProps
>`
  align-items: ${(props) => props.align ?? "center"};
  display: ${(props) => props.display};
  flex-direction: ${(props) => `${props.by ?? props.direction}`};
  justify-content: ${(props) => props.justify ?? "start"};
  grid-auto-flow: ${(props) => props.gridAutoFlow};
  grid-template-columns: ${(props) => props.gridCols ?? "unset"};
  grid-template-rows: ${(props) => props.gridRows ?? "unset"};
  margin: ${(props) => `${props.m ?? 0}`};
  padding: ${(props) => `${props.p ?? 0}`};
`;

export const Row = styled.div<LayoutProps>`
  align-items: ${(props) => props.align};
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${(props) => props.gap ?? props.defaultGap};
  grid-template-rows: ${(props) => props.gridRows};
  justify-content: ${(props) => props.justify};
  justify-items: ${(props) => props.items};

  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-gap: ${(props) =>
      props.gap
        ? props.gap
        : props.defaultGap
        ? `calc(${props.defaultGap} - ${props.adjustVal})`
        : "0px"};
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-gap: ${(props) =>
      props.gap
        ? props.gap
        : props.defaultGap
        ? `calc((${props.defaultGap} - ${props.adjustVal}) / 2)`
        : "0px"};
  }
`;

export const Text = styled.p<
  {
    bold?: boolean;
    thin?: boolean;
    size?: "sm" | "lg" | "default";
    color?: string;
  } & TypographyProps
>`
  color: ${(props) => props.color ?? "#ffffff"};
  font-family: ${(props) =>
    props.fontFamily ?? props.thin ? "gotham-light" : "gotham-bold"};
  font-size: ${(props) =>
    props.fontSize ?? props.size === "sm"
      ? "calc(100vw * (20 / 1512))"
      : props.size === "lg"
      ? "calc(100vw * (32 / 1512))"
      : "calc(100vw * (24 / 1512))"};
  font-weight: ${(props) => (props.fontWeight ?? props.bold ? "700" : "400")};
  line-height: ${(props) =>
    props.lineHeight ?? props.size === "sm"
      ? "calc(100vw * (10 / 1512))"
      : props.size === "lg"
      ? "calc(100vw * (33 / 1512))"
      : "calc(100vw * (25 / 1512))"};
  margin-top: ${(props) =>
    `${(props.mt || props.marginTop) ?? "calc(100vw * (14 / 1512))"}`};

  @media (min-width: 1512px) {
    font-size: ${(props) =>
      props.fontSize ?? props.size === "sm"
        ? "20px"
        : props.size === "lg"
        ? "32px"
        : "24px"};
    line-height: ${(props) =>
      props.lineHeight ?? props.size === "sm"
        ? "10px"
        : props.size === "lg"
        ? "33px"
        : "25px"};
    margin-top: ${(props) => `${(props.mt || props.marginTop) ?? "14px"}`};
  }
`;
export const Title = styled.h1<
  {
    bold?: boolean;
    thin?: boolean;
    color?: string;
    small?: boolean;
  } & TypographyProps
>`
  color: ${(props) =>
    props.color ?? (props.variant === "caption" && !props.bold)
      ? "#cdcdcd"
      : "#ffffff"};
  font-family: ${(props) =>
    props.fontFamily ?? props.thin ? "gotham-light" : "gotham-bold"};
  font-size: ${(props) =>
    props.fontSize ?? props.variant === "caption"
      ? "calc(100vw * (16 / 1512))"
      : props.small
      ? "calc(100vw * (24 / 1512))"
      : "calc(100vw * (40 / 1512))"};
  font-weight: ${(props) =>
    props.fontWeight ?? props.bold
      ? "700"
      : props.thin
      ? "bold"
      : props.small
      ? "700"
      : "500"};
  line-height: ${(props) =>
    props.lineHeight ?? props.variant === "caption"
      ? "calc(100vw * (10 / 1512))"
      : props.small
      ? "calc(100vw * (25 / 1512))"
      : "calc(100vw * (41 / 1512))"};
  margin-top: ${(props) =>
    `${(props.mt || props.marginTop) ?? "calc(100vw * (12 / 1512))"}`};

  @media (min-width: 1512px) {
    font-size: ${(props) =>
      props.fontSize ?? props.variant === "caption"
        ? "16px"
        : props.small
        ? "24px"
        : "40px"};
    line-height: ${(props) =>
      props.lineHeight ?? props.variant === "caption"
        ? "10px"
        : props.small
        ? "25px"
        : "41px"};
    margin-top: ${(props) => `${(props.mt || props.marginTop) ?? "12px"}`};
  }
`;

// ${(props) => props.theme.mediaQueries.desktop} {
//   font-size: ${(props) => (props.fontSize ?? props.small ? "calc" : "24px")};
//   line-height: calc(100vw * (10 / 1512));
//   margin-top: calc(100vw * (10 / 1512));
// }
