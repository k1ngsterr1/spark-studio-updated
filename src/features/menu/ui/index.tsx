import { useEffect } from "react";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { useAppDispatch, useAppSelector } from "@shared/lib/redux/hooks";
import { NavigationLink } from "@shared/ui/link";
import { EmailLink, PhoneLink } from "@shared/index";
import { RootState } from "@shared/lib/redux/store";
import { serviceState } from "@shared/lib/redux/menuStateSlice";
import { noneState } from "@shared/lib/redux/menuStateSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { toggleMenu as toggleMenuAction } from "@features/navigation/model";
import { useBurgerAnimation } from "@shared/lib/hooks";

import "./styles.scss";

export const Menu = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state: any) => state.menu.isOpen);
  const { menuRef } = useMenuAnimation();

  const { toggleMenu } = useBurgerAnimation(isMenuOpen, () =>
    dispatch(toggleMenuAction())
  );

  const menuState = useAppSelector(
    (state: RootState) => state.menuState.menuState
  );

  function handleServices() {
    dispatch(serviceState());
  }

  function handleClick() {
    dispatch(toggleMenuAction());
    dispatch(noneState());
    toggleMenu();
  }

  function handleBack() {
    dispatch(noneState());
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    }
  });

  if (menuState == "") {
    return (
      <>
        <aside className="menu flex flex-col items-start" ref={menuRef}>
          <span className="none" onClick={() => handleBack()}></span>
          <nav className="mt-2 ml-8 flex flex-col items-start">
            <NavigationLink
              onClick={handleClick}
              to="/home"
              className="menu__link"
              linkName="Главная"
            />
            <NavigationLink
              onClick={handleClick}
              to="/about"
              className="menu__link"
              linkName="О нас"
            />
            <NavigationLink
              onClick={handleServices}
              className="menu__link"
              linkName="Услуги"
            />
            <NavigationLink
              onClick={handleClick}
              to="/portfolio"
              className="menu__link"
              linkName="Портфолио"
            />
            <NavigationLink
              onClick={handleClick}
              to="/products"
              className="menu__link"
              linkName="Наши продукты"
            />
            <NavigationLink
              onClick={handleClick}
              to="/skills"
              className="menu__link"
              linkName="Наши возможности"
            />
          </nav>
          <PhoneLink className="menu__link" />
          <EmailLink className="menu__link" />
        </aside>
      </>
    );
  }

  if (menuState == "services") {
    return (
      <>
        <aside className="menu flex flex-col items-start" ref={menuRef}>
          <span
            className="ml-8 mt-8 flex items-center orange text-xl"
            onClick={() => handleBack()}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
            <span className="ml-2">Назад</span>
          </span>
          <nav className="mt-0 ml-8 flex flex-col items-start">
            <NavigationLink
              onClick={handleClick}
              to="/services"
              className="menu__link"
              linkName="Все Услуги"
            />
            <NavigationLink
              to="/services/websites"
              onClick={handleClick}
              className="menu__link"
              linkName="Веб-Сайты"
            />
            <NavigationLink
              onClick={handleClick}
              to="/services/logo"
              className="menu__link"
              linkName="Логотипы"
            />
            <NavigationLink
              onClick={handleClick}
              to="/services/app"
              className="menu__link"
              linkName="Приложения"
            />
            <NavigationLink
              onClick={handleClick}
              to="/services/seo"
              className="menu__link"
              linkName="SEO Оптимизация"
            />
          </nav>
          <PhoneLink className="menu__link" />
          <EmailLink className="menu__link" />
        </aside>
      </>
    );
  }
};
