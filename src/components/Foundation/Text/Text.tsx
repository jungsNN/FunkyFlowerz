import { FC } from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  size?: string;
  spacing?: string;
  weight?: string;
  color?: string;
  font?: string;
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

const Text: FC<TextProps> = (props) => {
  const { align, font, text, size, spacing, weight, color } = props;
  return (
    <p
      style={{
        textAlign: align ?? 'left',
        fontFamily: font ?? 'inherit',
        fontSize: size || "1rem",
        letterSpacing: spacing || "0.05rem",
        fontWeight: weight || "500",
        color: color || "white",
      }}
    >
      {text}
    </p>
  )
}

export default Text;
