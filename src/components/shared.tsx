import styled from "styled-components";
import { LayoutProps } from "./types";

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
