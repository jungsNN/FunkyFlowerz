/* eslint-disable react/display-name */
import React, { forwardRef } from "react"
import { Text, Title } from "../Foundation/Text"

// @ts-ignore
const ScrollOverlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref as any}
    onScroll={(e) => {
      // @ts-ignore
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll">
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <Title>headset</Title>
        <Text>{`
          Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
        `}</Text>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>headphone</h1>
      {`Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.`}
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <Title>rocket</Title>
        <Text>
        {`A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other
        vehicle use to obtain thrust from a rocket engine.`}
        </Text>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <Title>turbine</Title>
        <Text>{`A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a
        rotary mechanical device that extracts energy from a fluid flow and converts it into useful work.`}</Text>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <Title>table</Title>
        <Text>{`A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or
        on which to place things.[1][2]`}</Text>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <Title>laptop</Title>
        <Text>{`A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and
        alphanumeric keyboard.`}</Text>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <Title>zeppelin</Title>
        <Text>{`A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German
        pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning of the 20th century.`}</Text>
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default ScrollOverlay
