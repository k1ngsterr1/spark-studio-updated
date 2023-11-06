// useBurgerAnimation.ts
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";

type UseBurgerAnimationReturnType = {
  topLine: React.RefObject<HTMLDivElement>;
  middleLine: React.RefObject<HTMLDivElement>;
  bottomLine: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  animateOnHover: () => void;
  animateToBurger: () => void;
  animateOffHover: () => void;
};

export const useBurgerAnimation = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
): UseBurgerAnimationReturnType => {
  const topLine = useRef<HTMLDivElement>(null);
  const middleLine = useRef<HTMLDivElement>(null);
  const bottomLine = useRef<HTMLDivElement>(null);

  const animateToX = () => {
    gsap
      .timeline()
      .to(
        topLine.current,
        {
          rotation: 45,
          transformOrigin: "50% 50%",
          duration: 0.5,
          y: "+=11",
          ease: "elastic.out(1, 0.75)",
        },
        0
      )
      .to(
        middleLine.current,
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        0
      )
      .to(
        bottomLine.current,
        {
          rotation: -45,
          transformOrigin: "50% 50%",
          duration: 0.5,
          y: "-=11",
          ease: "elastic.out(1, 0.75)",
        },
        0
      );
  };

  const animateOnHover = () => {
    gsap.to(middleLine.current, {
      width: "100%",
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const animateOffHover = () => {
    gsap.to(middleLine.current, {
      width: "60%",
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const animateToBurger = () => {
    gsap
      .timeline()
      .to(
        topLine.current,
        {
          rotation: 0,
          transformOrigin: "50% 50%",
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.75)",
        },
        0
      )
      .to(
        middleLine.current,
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        0.3
      )
      .to(
        bottomLine.current,
        {
          rotation: 0,
          transformOrigin: "50% 50%",
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.75)",
        },
        0
      );
  };

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (isOpen) {
      animateToBurger();
    } else {
      animateToX();
    }
  }, [isOpen, setIsOpen]);

  return {
    topLine,
    middleLine,
    bottomLine,
    toggleMenu,
    animateOnHover,
    animateToBurger,
    animateOffHover,
  };
};
