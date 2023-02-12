import React from "react";

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="50"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g clipPath="url(#clip0_4_84969)">
        <path d="M48 0H0V50H48V0Z" fill="url(#pattern0)" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_4_84969" transform="scale(0.0104167 0.01)" />
        </pattern>
        <clipPath id="clip0_4_84969">
          <rect width="48" height="50" fill="white" />
        </clipPath>
        <image
          id="image0_4_84969"
          width="96"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default LogoIcon;
