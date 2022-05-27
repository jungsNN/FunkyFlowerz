import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: string,
  align?: string,
  justify?: string,
  items?: string,
  w?: string,
  h?: string
}>`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.gap ?? "0"};
  align-items: ${props => props.align ?? "center"};
  justify-items: ${props => props.justify ?? "null"};
  justify-content: ${props => props.justify ?? "center"};
  width: ${props => props.w ?? "100%"};
  height: ${props => props.h ?? "100%"};
`;

export const Col = styled.div<{
  gap?: string,
  align?: string,
  justify?: string,
  items?: string,
  w?: string,
  h?: string
}>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap ?? "0"};
  align-items: ${props => props.align ?? "center"};
  justify-items: ${props => props.justify ?? "null"};
  justify-content: ${props => props.justify ?? "center"};
  width: ${props => props.w ?? "100%"};
  height: ${props => props.h ?? "100%"};
`;
