import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { useAppDispatch, useAppSelector } from "@shared/lib/redux/hooks";
import { LanguageButton } from "@shared/ui/languageButton";
import { NavigationLink } from "@shared/ui/link";
import { EmailLink, PhoneLink } from "@shared/index";
import { RootState } from "@shared/lib/redux/store";
import { serviceState } from "@shared/lib/redux/menuStateSlice";
import { noneState } from "@shared/lib/redux/menuStateSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "@features/navigation/model";

import "./styles.scss";

export const Menu = () => {
  const dispatch = useAppDispatch();
  const { menuRef } = useMenuAnimation();

  const menuState = useAppSelector(
    (state: RootState) => state.menuState.menuState
  );

  function handleServices() {
    dispatch(serviceState());
    console.log(menuState);
  }

  function handleClick() {
    dispatch(toggleMenu());
  }

  function handleBack() {
    dispatch(noneState());
  }

  if (menuState == "") {
    return (
      <aside className="menu flex flex-col items-start" ref={menuRef}>
        <div className="flex items-end mt-16 ml-8">
          <LanguageButton language="RU" onClick={() => console.log("RU")} />
          <LanguageButton
            language="EN"
            margin="ml-4"
            onClick={() => console.log("EN")}
          />
        </div>
        <nav className="mt-2 ml-8 flex flex-col items-start">
          <NavigationLink to="/home" linkName="Главная" />
          <NavigationLink to="/about" linkName="О нас" />
          <NavigationLink onClick={handleServices} linkName="Услуги" />
          <NavigationLink to="/portfolio" linkName="Портфолио" />
          <NavigationLink to="" linkName="Контакты" />
        </nav>
        <PhoneLink />
        <EmailLink />
      </aside>
    );
  }

  if (menuState == "services") {
    return (
      <>
        <aside className="menu flex flex-col items-start" ref={menuRef}>
          <span
            className="ml-8 mt-8 flex items-center orange text-xl"
            onClick={handleBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
            <span className="ml-2">Назад</span>
          </span>
          <nav className="mt-0 ml-8 flex flex-col items-start">
            <NavigationLink to="/services" linkName="Все Услуги" />
            <NavigationLink
              to="/services/websites"
              onClick={handleClick}
              linkName="Веб-Сайты"
            />
            <NavigationLink to="/services/design" linkName="Дизайн" />
            <NavigationLink to="/services/app" linkName="Приложения" />
            <NavigationLink to="/services/seo" linkName="SEO Оптимизация" />
          </nav>
          <PhoneLink />
          <EmailLink />
        </aside>
      </>
    );
  }
};
