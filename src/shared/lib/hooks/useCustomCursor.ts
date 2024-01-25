import { useEffect } from "react";
import gsap from "gsap";

export const useCustomCursor = (cursorRef: any) => {
  useEffect(() => {
    const moveCursor = (e: any) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x,
          y: y,
          duration: 0.1,
          ease: "power3.out",
        });
      }
    };

    const onMouseOver = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 2,
          backgroundColor: "#FF4500",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const onMouseOut = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#FF4500",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(`.hoverable`);
    hoverElements.forEach((el) => {
      el.addEventListener("mouseover", onMouseOver);
      el.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseover", onMouseOver);
        el.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);
};
