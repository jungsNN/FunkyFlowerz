import styled from "styled-components";

export const Row = styled.div<{}>`
    display: grid;
    grid-auto-flow: row;
`;

export const Col = styled.div<{}>`
    display: grid;
    grid-auto-flow: column;
`;
