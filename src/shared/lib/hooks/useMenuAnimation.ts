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
      gsap.to(menuRef.current, {
        x: isOpen ? 0 : "100%",
        autoAlpha: isOpen ? 1 : 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [isOpen]);

  return { menuRef };
};
