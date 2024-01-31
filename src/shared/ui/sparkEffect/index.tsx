import React, { useEffect, useRef, useState } from "react";

import "./styles.scss";

interface ClickSparkProps {
  activeOn?: string;
}

const ClickSpark: React.FC<ClickSparkProps> = ({ activeOn }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [sparkPosition, setSparkPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target != null) {
        if (activeOn && !e.target.matches(activeOn)) return;
      }

      const svg = svgRef.current;
      if (!svg) return;

      setSparkPosition({
        x: e.clientX - 15,
        y: e.clientY - 15,
      });

      animateSpark(svg);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [activeOn]);

  const animateSpark = (svg: SVGSVGElement) => {
    const sparks = Array.from(svg.children);
    const size = parseInt(sparks[0].getAttribute("y1") || "0");
    const offset = size / 2 + "px";

    const keyframes = (i: number) => {
      const deg = `calc(${i} * (360deg / ${sparks.length}))`;
      return [
        {
          strokeDashoffset: size * 3,
          transform: `rotate(${deg}) translateY(${offset})`,
        },
        {
          strokeDashoffset: size,
          transform: `rotate(${deg}) translateY(0)`,
        },
      ];
    };

    const options = {
      duration: 660,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "forwards",
    };

    sparks.forEach((spark) =>
      (spark as SVGLineElement).animate(keyframes(i), options)
    );
  };

  return (
    <svg
      ref={svgRef}
      width="30"
      height="30"
      viewBox="0 0 100 100"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      style={{
        position: "absolute",
        left: `${sparkPosition.x}px`,
        top: `${sparkPosition.y}px`,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        stroke: "#FF5722",
      }}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <line key={i} x1="50" y1="30" x2="50" y2="4" />
      ))}
    </svg>
  );
};

export default ClickSpark;
