import type { ButtonProps } from "@mui/material/Button";
import { Button as MuiButton } from "@mui/material";

const Button = (props: ButtonProps) => {
  const children = props.children;
  return (
    <MuiButton style={{ padding: 0, margin: 0, minWidth: "100%" }} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
