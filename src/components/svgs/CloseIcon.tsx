interface CloseIconProps {
  className?: string;
  bg?: string;
  color?: string;
  height?: string;
  stroke?: string;
  width?: string;
  variant?:
    | "filled"
    | "outlined"
    | "rounded-filled"
    | "rounded-outlined"
    | undefined;
}

const CloseIcon: React.FC<CloseIconProps> = (props) => {
  const { bg, stroke, variant, ...rest } = props;

  return variant === "outlined" ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1_1999)">
        <path
          d="M9.87869 10.1213L14.1213 14.3639"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.1213 10.1213L9.87867 14.3639"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9.25"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1999">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1_2006)">
        <circle cx="12" cy="12" r="10" fill="#292929" />
        <path
          d="M9.87868 10.1213L14.1213 14.3639"
          stroke={(bg || stroke) ?? "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.1213 10.1213L9.87868 14.3639"
          stroke={(bg || stroke) ?? "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2006">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
