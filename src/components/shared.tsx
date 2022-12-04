import React from "react";
import { Grid as MuiGrid } from "@mui/material";
import styled, { CSSProperties } from "styled-components";
import { LayoutProps, TextProps } from "./types";
import { useStore } from "../hooks";

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
  width: ${(props) => props.width ?? "auto"};
  margin-left: auto;
  margin-right: auto;
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
  flex-wrap: ${(props) => props.wrap ?? "nowrap"};
`;

export const StyledText = styled.p<TextProps>`
  color: ${(props) =>
    props.color ?? props.variant === "caption" ? "#cdcdcd" : "#ffffff"};
  font-family: ${(props) =>
    props.fontFamily ?? props.thin ? "gotham-book" : "gotham-bold"};
  font-size: ${(props) =>
    props.fontSize ?? props.size === "sm"
      ? `calc(100vw * (20 / ${props.maxw}))`
      : props.size === "lg"
      ? `calc(100vw * (32 / ${props.maxw}))`
      : `calc(100vw * (24 / ${props.maxw}))`};
  font-weight: ${(props) =>
    props.bold ? "700" : props.thin ? "400" : `${props.weight ?? "700"}`};
  line-height: ${(props) =>
    props.lineHeight ?? props.size === "sm"
      ? `calc(100vw * (6 / ${props.maxw}))` // 10
      : props.size === "lg"
      ? `calc(100vw * (33 / ${props.maxw}))`
      : `calc(100vw * (25 / ${props.maxw}))`};
  margin-top: ${(props) =>
    `${props.mt ?? `calc(100vw * (14 / ${props.maxw}))`}`};
  text-align: ${(props) => `${props.textAlign ?? "start"}`};
  white-space: ${(props) => `${props.whiteSpace ?? "normal"}`};

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
    margin-top: ${(props) => `${props.mt ?? "14px"}`};
  }
`;
export const StyledTitle = styled.h1<TextProps>`
  color: ${(props) =>
    props.color ?? (props.variant === "caption" && !props.bold)
      ? "#cdcdcd"
      : "#ffffff"};
  font-family: ${(props) =>
    props.fontFamily ?? props.thin ? "gotham-light" : "gotham-bold"};
  font-size: ${(props) =>
    props.fontSize ?? props.variant === "caption"
      ? `calc(100vw * (16 / ${props.maxw}))`
      : props.small
      ? `calc(100vw * (24 / ${props.maxw}))`
      : `calc(100vw * (40 / ${props.maxw}))`};
  font-weight: ${(props) =>
    props.weight ?? props.bold
      ? "700"
      : props.thin
      ? "bold"
      : props.small
      ? "700"
      : "500"};
  line-height: ${(props) =>
    props.lineHeight ?? (props.variant === "caption" || props.small) // 25
      ? `calc(100vw * (10 / ${props.maxw}))`
      : `calc(100vw * (41 / ${props.maxw}))`};
  margin-top: ${(props) =>
    `${
      props.mt ?? `calc(100vw * (${props.small ? "16" : "12"} / ${props.maxw}))`
    }`};
  text-align: ${(props) => `${props.textAlign ?? "center"}`};
  white-space: ${(props) => `${props.whiteSpace ?? "normal"}`};

  @media (min-width: 1512px) {
    font-size: ${(props) =>
      props.fontSize ?? props.variant === "caption"
        ? "16px"
        : props.small
        ? "24px"
        : "40px"};
    line-height: ${(props) =>
      props.lineHeight ?? (props.variant === "caption" || props.small)
        ? "10px"
        : "41px"};
    margin-top: ${(props) => `${props.mt ?? props.small ? "16px" : "12px"}`};
  }
`;

export const Text: React.FC<TextProps & CSSProperties> = (props) => {
  const { children, ...rest } = props;
  const isMobile = useStore.getState().isMobile;

  return (
    <StyledText maxw={isMobile ? 480 : 1512} {...rest}>
      {children}
    </StyledText>
  );
};

export const Title: React.FC<TextProps & CSSProperties> = (props) => {
  const { children, ...rest } = props;
  const isMobile = useStore.getState().isMobile;

  return (
    <StyledTitle maxw={isMobile ? 480 : 1512} {...rest}>
      {children}
    </StyledTitle>
  );
};
