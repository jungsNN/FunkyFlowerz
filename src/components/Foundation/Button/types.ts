import Button, { ButtonTypeMap } from "@mui/material/Button";
import { ExtendButtonBase } from "@mui/material/ButtonBase";
import { PublicKey } from "@solana/web3.js";
import { CSSProperties, HTMLAttributes, ReactElement } from "react";

export type WalletButtonProps = GlowButtonProps & {
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: Event) => void; // MouseEvent<HTMLButtonElement>
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
  endpoint?: string;
  account?: PublicKey;
}

export type GlowButtonProps = ButtonProps & {
  colorFrom?: string;
  colorTo?: string;
  hoverFrom?: string;
  hoverTo?: string;
  children: React.ReactNode;
}
export type MuiButtonProps = ExtendButtonBase<ButtonTypeMap>

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  className?: string;
  glow?: boolean
  disabled?: boolean
  type?: "submit" | "button" | "reset"
  color?: string
}
