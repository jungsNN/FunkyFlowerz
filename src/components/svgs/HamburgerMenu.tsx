interface HamburgerMenuProps {
  className?: string;
  bg?: string;
  color?: string;
  height?: string;
  stroke?: string;
  width?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
  const { bg, stroke, ...rest } = props;

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="24" cy="24" r="24" fill={bg ?? "#FF5FDC"} />
      <g clipPath="url(#clip0_13_166)">
        <path
          d="M11.5 16L36.5 16"
          stroke={stroke ?? "white"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M11.5 24L36.5 24"
          stroke={stroke ?? "white"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M11.5 32L36.5 32"
          stroke={stroke ?? "white"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13_166">
          <rect
            width="36"
            height="36"
            fill={stroke ?? "white"}
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HamburgerMenu;
