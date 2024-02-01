import { useEffect, useRef, useState } from "react";

import "./styles.scss";

const ClickSpark = () => {
  const svgRef = useRef(null);
  const [sparkPosition, setSparkPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = (e: any) => {
      const svg = svgRef.current;
      if (!svg) return;

      setSparkPosition({
        x: e.clientX,
        y: e.clientY,
      });

      animateSpark(svg);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const animateSpark = (svg: any) => {
    const sparks: any = Array.from(svg.children);
    const size = parseInt(sparks[0].getAttribute("y1") || "0");
    const offset = size / 2 + "px";

    const keyframes = (i: any) => {
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

    sparks.forEach((spark: any, i: any) => {
      (spark as SVGLineElement).animate(keyframes(i), options);
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
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
          transform: "translate(-50%, -50%)",
          stroke: "#FF5722",
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <line key={i} x1="50" y1="30" x2="50" y2="4" />
        ))}
      </svg>
    </div>
  );
};

export default ClickSpark;
