import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@shared/lib/redux/hooks";
import { toggleMenu as toggleMenuAction } from "../model";
import { Hamburger } from "@shared/ui/hamburger";
import { useBurgerAnimation } from "@shared/lib/hooks/useBurgerAnimation";
import { Link as ScrollLink } from "react-scroll";

import Logo from "@assets/images/assets/spark_logo.svg";

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
      <div className="navigation__pc flex flex-row items-center justify-between">
        <img
          src={Logo}
          onClick={handleNavigateHome}
          className="navigation__pc__logo"
          alt="logo"
        />
        <div className="w-[40%] flex justify-between items-center">
          <ScrollLink
            className="navigation__pc__link hoverable"
            to="main"
            smooth
          >
            Главная
          </ScrollLink>
          <ScrollLink
            className="navigation__pc__link hoverable"
            to="about"
            smooth
          >
            Кто мы
          </ScrollLink>
          <ScrollLink
            className="navigation__pc__link hoverable"
            to="services"
            smooth
          >
            Услуги
          </ScrollLink>
          <ScrollLink
            className="navigation__pc__link hoverable"
            to="portfolio"
            smooth
          >
            Портфолио
          </ScrollLink>
          <ScrollLink
            className="navigation__pc__link--orange hoverable"
            to="contacts"
            smooth
          >
            Заявка
          </ScrollLink>
          <Hamburger
            margin="ml-4"
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
