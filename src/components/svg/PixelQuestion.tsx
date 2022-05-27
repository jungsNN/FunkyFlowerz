import React, { FC } from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  markColor?: string;
}

const PixelQuestion: FC<IconProps> = (props) => {
  const { color, markColor, ...rest } = props;

  return (
    <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {/* <rect width="50" height="50" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 50)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 100)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 150)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 200)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 250)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 300)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 350)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 400)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 450)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 500)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 550)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 600)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 650)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 700)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(0 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(50 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(100 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(150 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(200 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(250 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(300 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(350 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(400 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(450 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(500 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(550 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(600 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(650 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(700 750)" fill={color ?? "#85E850"}/>
      <rect width="50" height="50" transform="translate(750 750)" fill={color ?? "#85E850"}/> */}
      <rect width="50" height="50" transform="translate(325 219)" fill={markColor ?? "white"} stroke="white"/>
      <rect width="50" height="50" transform="translate(375 219)" fill={markColor ?? "white"} stroke="white"/>
      <rect width="50" height="50" transform="translate(425 219)" fill={markColor ?? "white"}stroke="white" />
      {/* <g filter="url(#filter0_i_105_2303)">
      <rect width="50" height="50" transform="translate(275 269)" fill={markColor ?? "white"}/>
      </g> */}
      <rect width="50" height="50" transform="translate(475 269)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(475 319)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(475 369)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(325 419)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(375 419)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(425 419)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(325 469)" fill={markColor ?? "white"}stroke="white" />
      <rect width="50" height="50" transform="translate(325 569)" fill={markColor ?? "white"}stroke="white" />
      <defs>
      <filter id="filter0_i_105_2303" x="275" y="269" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="1" dy="1"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_105_2303"/>
      </filter>
      </defs>
    </svg>

  )
}

export default PixelQuestion;
