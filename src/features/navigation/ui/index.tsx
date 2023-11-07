import { useState } from "react";
import { Menu } from "@features/menu/ui";
import { Hamburger } from "@shared/ui/hamburger";
import { useBurgerAnimation } from "@shared/lib/hooks/useBurgerAnimation";
import Logo from "@assets/images/spark_logo.svg";

import "./styles.scss";

interface NavigationProps {
  menuOpen: boolean;
}

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation  mt-8">
      <div className="navigation__mob flex flex-row items-center justify-between">
        <img src={Logo} className="navigation__mob__logo" alt="logo" />{" "}
        <div className="navigation__mob__wrapper items-center justify-between">
          <Hamburger
            onHover={animateOnHover}
            offHover={animateOffHover}
            isEnabled={true}
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
