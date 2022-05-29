import { FC, SVGAttributes } from "react";

const ETH: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.2" d="M25.9295 13.0002C25.9295 20.1422 20.1399 25.9318 12.9981 25.9318C5.8562 25.9318 0.0666103 20.1422 0.0666103 13.0002C0.0666103 5.85841 5.8562 0.0688171 12.9981 0.0688171C20.1399 0.0688171 25.9295 5.85841 25.9295 13.0002Z" fill={props.fill ?? "#505050"}/>
      <g opacity="0.8">
      <path d="M12.9568 7L12.8769 7.27148V15.1493L12.9568 15.229L16.6135 13.0675L12.9568 7Z" fill="white"/>
      <path d="M12.9568 7L9.3 13.0675L12.9568 15.229V11.4054V7Z" fill="white"/>
      <path d="M12.9568 16.4188L12.9118 16.4736V19.2799L12.9568 19.4113L16.6157 14.2583L12.9568 16.4188Z" fill="white"/>
      <path d="M12.9568 19.4114V16.4188L9.3 14.2583L12.9568 19.4114Z" fill="white"/>
      <path d="M12.9568 15.229L16.6135 13.0675L12.9568 11.4054V15.229Z" fill="white"/>
      <path d="M9.3 13.0675L12.9567 15.229V11.4054L9.3 13.0675Z" fill="white"/>
      </g>
    </svg>
  )
}

export default ETH;
