import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@shared/lib/redux/hooks";
import { toggleMenu as toggleMenuAction } from "../model";
import { Hamburger } from "@shared/ui/hamburger";
import { useBurgerAnimation } from "@shared/lib/hooks/useBurgerAnimation";
import Logo from "@assets/images/spark_logo.svg";

import "./styles.scss";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMenuOpen = useAppSelector((state: any) => state.menu.isOpen);

  function handleNavigateHome() {
    navigate("/home");
  }

  const {
    topLine,
    middleLine,
    bottomLine,
    animateOnHover,
    animateOffHover,
    toggleMenu,
  } = useBurgerAnimation(isMenuOpen, () => dispatch(toggleMenuAction()));

  const handleHamburgerClick = () => {
    dispatch(toggleMenuAction());
    toggleMenu();
  };
  return (
    <nav className="navigation  mt-8">
      <div className="navigation__mob flex flex-row items-center justify-between">
        <img
          src={Logo}
          onClick={handleNavigateHome}
          className="navigation__mob__logo"
          alt="logo"
        />
        <div className="navigation__mob__wrapper items-center justify-between">
          <Hamburger
            onHover={animateOnHover}
            offHover={animateOffHover}
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
