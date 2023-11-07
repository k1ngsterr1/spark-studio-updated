import { LanguageButton } from "@shared/ui/languageButton";
import { NavigationLink } from "@shared/ui/link";

import "./styles.scss";

export const Menu = () => {
  return (
    <aside className="menu flex flex-col items-end">
      <nav className="mt-16 mr-8 flex flex-col items-end">
        <NavigationLink to="" linkName="Главная" />
        <NavigationLink to="" linkName="О нас" />
        <NavigationLink to="" linkName="Услуги" />
        <NavigationLink to="" linkName="Портфолио" />
      </nav>
      <div className="flex items-end mt-6 mr-8">
        <LanguageButton language="RU" onClick={() => console.log("RU")} />
        <LanguageButton language="EN" onClick={() => console.log("EN")} />
      </div>
    </aside>
  );
};
