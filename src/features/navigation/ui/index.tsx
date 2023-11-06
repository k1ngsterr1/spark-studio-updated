import { useState } from "react";
import { Hamburger } from "@shared/ui/hamburger";
import { useBurgerAnimation } from "@shared/lib/hooks/useBurgerAnimation";
import Logo from "@assets/images/spark_logo.svg";

import "./styles.scss";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    topLine,
    middleLine,
    bottomLine,
    toggleMenu,
    animateOnHover,
    animateOffHover,
  } = useBurgerAnimation(isOpen, setIsOpen);

  const handleHamburgerClick = () => {
    toggleMenu();
  };

  return (
    <nav className="navigation  mt-8">
      <div className="navigation__mob flex flex-row items-center justify-between">
        <img src={Logo} className="navigation__mob__logo" alt="logo" />{" "}
        <div className="navigation__mob__wrapper items-center justify-between">
          <Hamburger
            onHover={animateOnHover}
            offHover={animateOffHover}
            isEnabled={false}
            onClick={handleHamburgerClick}
            topLineRef={topLine}
            middleLineRef={middleLine}
            bottomLineRef={bottomLine}
          />
        </div>
      </div>
    </nav>
  );
};
