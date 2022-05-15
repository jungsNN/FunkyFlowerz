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

const Title: FC<TextProps> = (props) => {
  const { align, font, text, size, spacing, weight, color } = props;
  return (
    <p
      style={{
        textAlign: align ?? 'left',
        fontFamily: font ?? 'inherit',
        fontSize: size ?? "1.5rem",
        letterSpacing: spacing ?? "0.05rem",
        fontWeight: weight ?? "bold",
        color: color ?? "white",
      }}
    >
      {text}
    </p>
  )
}

export default Title;
