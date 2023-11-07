import { useAppDispatch, useAppSelector } from "@shared/lib/redux/hooks";
import { toggleMenu as toggleMenuAction } from "../model";
import { Hamburger } from "@shared/ui/hamburger";
import { useBurgerAnimation } from "@shared/lib/hooks/useBurgerAnimation";
import Logo from "@assets/images/spark_logo.svg";

import "./styles.scss";

interface NavigationProps {
  menuOpen: boolean;
}

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state: any) => state.menu.isOpen); // Adjust 'state.navigation.isOpen' according to your state structure

  const { topLine, middleLine, bottomLine, animateOnHover, animateOffHover } =
    useBurgerAnimation(isMenuOpen, () => dispatch(toggleMenuAction()));

  const handleHamburgerClick = () => {
    dispatch(toggleMenuAction());
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
