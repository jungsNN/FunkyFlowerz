import type { ButtonProps } from "@mui/material/Button";
import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";
import { Title } from "../shared";

const Button = (props: ButtonProps) => {
  const children = props.children;
  return (
    <MuiButton style={{ padding: 0, margin: 0, minWidth: "100%" }} {...props}>
      <ButtonLabel>{children}</ButtonLabel>
    </MuiButton>
  );
};

const ButtonLabel = styled.div`
  > & ${{ Title }} (size: "sm") {
    font-weight: 700;
  }
`;

export default Button;
