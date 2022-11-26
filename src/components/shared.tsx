import { Grid as MuiGrid } from "@mui/material";
import { GridProps } from "@mui/material/Grid";
import { TypographyProps } from "@mui/material/Typography";
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
  items?: string | "unset";
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  width?: string;
}>`
  ${(props) => props.height};
  ${(props) => props.maxHeight};
  ${(props) => props.minHeight};
  ${(props) => props.maxWidth};
  ${(props) => props.minWidth};
  ${(props) => props.width};
  ${(props) => props.items};
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
  { align?: string; justify?: string } & GridProps & LayoutProps
>`
  align-items: ${(props) => props.align ?? "center"};
  display: ${(props) => props.display};
  flex-direction: ${(props) => `${props.by ?? props.direction}`};
  justify-content: ${(props) => props.justify ?? "start"};
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
    size?: "sm" | "lg" | "default";
    color?: string;
  } & TypographyProps
>`
  color: ${(props) => props.color ?? "#ffffff"};
  font-family: "Gotham", sans-serif;
  font-size: ${(props) =>
    props.size === "sm" ? "18px" : props.size === "lg" ? "32px" : "24px"};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  line-height: ${(props) =>
    props.size === "sm" ? "22px" : props.size === "lg" ? "36px" : "28px"};

  ${(props) => props.theme.mediaQueries.desktop} {
    font-size: ${(props) =>
      props.size === "sm" ? "16px" : props.size === "lg" ? "32px" : "20px"};
    line-height: ${(props) =>
      props.size === "sm" ? "20px" : props.size === "lg" ? "32px" : "24px"};
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) =>
      props.size === "sm" ? "16px" : props.size === "lg" ? "24px" : "18px"};
    line-height: ${(props) =>
      props.size === "sm" ? "20px" : props.size === "lg" ? "24px" : "24px"};
  }
`;

export const Title = styled.h1<
  {
    small?: boolean;
    color?: string;
  } & TypographyProps
>`
  color: ${(props) => props.color ?? "#ffffff"};
  font-family: "Gotham", sans-serif;
  font-size: ${(props) => (props.small ? "24px" : "40px")};
  font-weight: ${(props) => (props.small ? "700" : "400")};
  line-height: 48px;

  ${(props) => props.theme.mediaQueries.desktop} {
    font-size: ${(props) => (props.small ? "20px" : "32px")};
    line-height: 40px;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => (props.small ? "18px" : "28px")};
    line-height: 32px;
  }
`;
