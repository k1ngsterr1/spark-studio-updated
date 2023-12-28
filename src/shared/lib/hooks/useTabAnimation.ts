import { useRef, useCallback } from "react";
import gsap from "gsap";

export const useTabAnimations = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onHoverAnimation = useCallback(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: 0.3,
        opacity: 1,
        ease: "Linear.easeNone",
      });
    }
  }, []);

  const offHoverAnimation = useCallback(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: 0.3,
        opacity: 0,
        ease: "Linear.easeNone",
      });
    }
  }, []);

  return { ref, onHoverAnimation, offHoverAnimation };
};
