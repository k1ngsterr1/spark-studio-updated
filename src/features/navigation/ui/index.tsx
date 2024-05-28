import { Link, useNavigate } from "react-router-dom";
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
          className="navigation__pc__logo hoverable"
          alt="logo"
        />
        <div className="w-[50%] flex justify-between items-center">
          <Link className="navigation__pc__link hoverable" to="/home">
            Главная
          </Link>
          <Link className="navigation__pc__link hoverable" to="/about">
            О нас
          </Link>
          <Link className="navigation__pc__link hoverable" to="/services">
            Услуги
          </Link>
          {/* <ScrollLink className="navigation__pc__link hoverable" to="/portfolio">
            Портфолио
          </ScrollLink> */}

          <Link className="navigation__pc__link hoverable" to="/skills">
            Возможности
          </Link>
          <Link className="navigation__pc__link hoverable" to="/products">
            Сервисы
          </Link>
          <ScrollLink
            className="navigation__pc__link--orange hoverable"
            to="contacts-pc"
            smooth
          >
            Заявка
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};
