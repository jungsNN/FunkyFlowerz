import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 100vw;
  height: 100%;
  background: var(--bg);
`;

export const Box = styled.div<{gap?: string, align?: string, justify?: string, items?: string}>`
  display: grid;
  padding: 1rem;
  grid-auto-flow: row;
  grid-gap: ${props => props.gap || "0"};
  align-items: ${props => props.align || "start"};
  justify-items: ${props => props.justify || "center"};
  justify-content: ${props => props.items || "start"};
`;

export const Col = styled.div<{gap?: string, align?: string, justify?: string, items?: string}>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || "0"};
  align-items: ${props => props.align || "start"};
  justify-items: ${props => props.justify || "center"};
  justify-content: ${props => props.items || "start"};
`;
