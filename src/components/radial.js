import React from "react";
import ParticlesView from "./particles";

const circles = [
  { id: 1, val: ".1" },
  { id: 2, val: ".3" },
  { id: 3, val: ".55" },
  { id: 4, val: ".8" },
  { id: 5, val: "1.05" },
  { id: 6, val: "1.3" },
  { id: 7, val: "1.55" },
  { id: 8, val: "1.8" },
  { id: 9, val: "2.05" },
  { id: 10, val: "2.30" }
];
const bgStyle = {
  backgroundImage: "url('./assets/vape_bg.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};
const svgStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  opacity: "0.1"
};
const Radial = () => (
  <div className="radial" style={bgStyle}>
    <ParticlesView />
    <svg height="100vh" width="100%" viewBox="-1 -1 2 2" style={svgStyle}>
      {circles.map(circle => (
        <circle
          key={circle.id}
          cx="0"
          cy="0"
          r={circle.val}
          fill="transparent"
          strokeWidth=".005"
          stroke="white"
        />
      ))}
    </svg>
  </div>
);

export default Radial;
