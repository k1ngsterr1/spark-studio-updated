import { LanguageButton } from "@shared/ui/languageButton";
import { NavigationLink } from "@shared/ui/link";

export const Menu = () => {
  return (
    <aside className="menu flex flex-col">
      <NavigationLink to="" linkName="Главная" />
      <NavigationLink to="" linkName="О нас" />
      <NavigationLink to="" linkName="Услуги" />
      <NavigationLink to="" linkName="Портфолио" />
      <div className="flex items-center">
        <LanguageButton language="RU" onClick={() => console.log("RU")} />
        <LanguageButton language="EN" onClick={() => console.log("EN")} />
      </div>
    </aside>
  );
};
