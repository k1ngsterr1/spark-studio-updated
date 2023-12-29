import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { LanguageButton } from "@shared/ui/languageButton";
import { NavigationLink } from "@shared/ui/link";

import "./styles.scss";
import { EmailLink, PhoneLink } from "@shared/index";

export const Menu = () => {
  const { menuRef } = useMenuAnimation();
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
        <NavigationLink to="/services" linkName="Услуги" />
        <NavigationLink to="/portfolio" linkName="Портфолио" />
        <NavigationLink to="" linkName="Контакты" />
      </nav>
      <PhoneLink />
      <EmailLink />
    </aside>
  );
};
