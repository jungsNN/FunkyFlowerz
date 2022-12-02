import type { ButtonProps } from "@mui/material/Button";
import { Button as MuiButton } from "@mui/material";

const Button = (props: ButtonProps) => {
  const children = props.children;
  return (
    <MuiButton
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
