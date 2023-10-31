import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./styles.scss";

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      console.log(x, y); // Debugging line
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x,
          y: y,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};
