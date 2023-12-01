import { useRef, useCallback } from "react";
import gsap from "gsap";

export const useTabAnimations = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onHoverAnimation = useCallback(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        translateX: 1000,
      });
    }
  }, []);

  const offHoverAnimation = useCallback(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        translateX: -1000,
      });
    }
  }, []);

  return { ref, onHoverAnimation, offHoverAnimation };
};
