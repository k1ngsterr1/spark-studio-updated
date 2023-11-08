import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "@shared/lib/redux/store";

export const useMenuAnimation = (): {
  menuRef: React.RefObject<HTMLDivElement>;
} => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  useEffect(() => {
    if (menuRef.current) {
      const tl = gsap.timeline();

      if (isOpen) {
        // Animate the menu and links into view
        tl.to(menuRef.current, {
          x: "0%",
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        }).to(
          ".menu__link, .menu__link--language-btn, .menu__link--contact",
          {
            x: "0%",
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1, // Stagger the links appearing
            ease: "power3.out",
          },
          "-=0.25"
        );
        // Overlap the end of menu animation with the start of links animation
      } else {
        // Animate the links out before the menu starts closing
        tl.to(".menu__link, .menu__link--language-btn, .menu__link--contact", {
          x: "-500%", // Move to the right
          autoAlpha: 0, // Fade out
          scale: 0.95,
          stagger: 0.1, // Stagger the links disappearing
          duration: 0.3,
          ease: "power3.in",
        }).to(
          menuRef.current,
          {
            x: "-100%", // Move to the left
            autoAlpha: 0, // Fade out
            scale: 0.95,
            duration: 0.5,
            ease: "power3.in",
          },
          "+=0.1"
        );
      }
    }
  }, [isOpen]);

  return { menuRef };
};
