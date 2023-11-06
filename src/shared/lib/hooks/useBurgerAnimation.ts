import { useRef, useState, useCallback } from "react";
import gsap from "gsap";

type UseBurgerAnimationReturnType = {
  topLine: React.RefObject<HTMLDivElement>;
  middleLine: React.RefObject<HTMLDivElement>;
  bottomLine: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
};

export const useBurgerAnimation = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
): UseBurgerAnimationReturnType => {
  const topLine = useRef<HTMLDivElement>(null);
  const middleLine = useRef<HTMLDivElement>(null);
  const bottomLine = useRef<HTMLDivElement>(null);

  const animateToX = () => {
    gsap.to(topLine.current, {
      rotation: 45,
      transformOrigin: "50% 50%",
      y: 5,
      duration: 0.3,
    });
    gsap.to(middleLine.current, { opacity: 0, duration: 0.1 });
    gsap.to(bottomLine.current, {
      rotation: -45,
      transformOrigin: "50% 50%",
      y: -5,
      duration: 0.3,
    });
  };

  const animateToBurger = () => {
    gsap.to(topLine.current, {
      rotation: 0,
      transformOrigin: "50% 50%",
      y: 0,
      duration: 0.3,
    });
    gsap.to(middleLine.current, { opacity: 1, duration: 0.1 });
    gsap.to(bottomLine.current, {
      rotation: 0,
      transformOrigin: "50% 50%",
      y: 0,
      duration: 0.3,
    });
  };

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen); // Toggle the external state
    if (isOpen) {
      animateToBurger();
    } else {
      animateToX();
    }
  }, [isOpen, setIsOpen]);

  return { topLine, middleLine, bottomLine, toggleMenu };
};
