import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import './styles.css'

const items = range(5)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

function currentProgram() {
  fetch("/devices/desk-led")
    .then(response => response.json())
    .then(data => {
      var elements = document.getElementsByClassName("script-bf-box");
      for (const x of Array(5).keys()) {
        console.log(elements[x]);
        elements[x].style.backgroundColor = data.data[0][3];
      }
    });
}


function Animation() {
  currentProgram();
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return items.map(i => <animated.div key={i} className="script-bf-box"
  style={{ "transform": radians.interpolate(interp(i)) }} />)
}

export default Animation
