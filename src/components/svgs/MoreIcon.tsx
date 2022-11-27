interface MoreIconProps {
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

const RoundedEllipses: React.FC<MoreIconProps> = (props) => {
  const { bg, stroke, variant, ...rest } = props;

  return variant === "rounded-filled" ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1_2301)">
        <circle cx="12" cy="12" r="10" fill={bg ?? "#292929"} />
        <rect
          x="7.90629"
          y="11.3813"
          width="1.2375"
          height="1.2375"
          rx="0.61875"
          stroke={stroke ?? "white"}
          strokeWidth="1.2375"
        />
        <rect
          x="11.3813"
          y="11.3813"
          width="1.2375"
          height="1.2375"
          rx="0.61875"
          stroke={stroke ?? "white"}
          strokeWidth="1.2375"
        />
        <rect
          x="14.8562"
          y="11.3813"
          width="1.2375"
          height="1.2375"
          rx="0.61875"
          stroke={stroke ?? "white"}
          strokeWidth="1.2375"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2301">
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
    >
      <g clipPath="url(#clip0_1_2294)">
        <circle
          cx="12"
          cy="12"
          r="9.25"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
        <rect
          x="7.90629"
          y="11.3813"
          width="1.2375"
          height="1.2375"
          rx="0.61875"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.2375"
        />
        <rect
          x="11.3813"
          y="11.3813"
          width="1.2375"
          height="1.2375"
          rx="0.61875"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.2375"
        />
        <rect
          x="14.8562"
          y="11.3813"
          width="1.2375"
          height="1.2375"
          rx="0.61875"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.2375"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2294">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Ellipses: React.FC<MoreIconProps> = (props) => {
  const { bg, stroke, variant, ...rest } = props;

  return variant === "filled" ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1_1898)">
        <rect
          x="2.75"
          y="9.75"
          width="4.5"
          height="4.5"
          rx="2.25"
          fill={(bg || stroke) ?? "#292929"}
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
        <rect
          x="9.75"
          y="9.75"
          width="4.5"
          height="4.5"
          rx="2.25"
          fill={(bg || stroke) ?? "#292929"}
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
        <rect
          x="16.75"
          y="9.75"
          width="4.5"
          height="4.5"
          rx="2.25"
          fill={(bg || stroke) ?? "#292929"}
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1898">
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
      <g clipPath="url(#clip0_1_1892)">
        <rect
          x="2.75"
          y="9.75"
          width="4.5"
          height="4.5"
          rx="2.25"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
        <rect
          x="9.75"
          y="9.75"
          width="4.5"
          height="4.5"
          rx="2.25"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
        <rect
          x="16.75"
          y="9.75"
          width="4.5"
          height="4.5"
          rx="2.25"
          stroke={stroke ?? "#292929"}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1892">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MoreIcon: React.FC<MoreIconProps> = (props) => {
  const { variant } = props;

  if (!variant || !variant.startsWith("rounded")) {
    return <Ellipses variant="filled" {...props} />;
  }

  return <RoundedEllipses {...props} />;
};

export default MoreIcon;
