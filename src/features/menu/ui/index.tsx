import React from "react";
import { useMenuAnimation } from "@shared/lib/hooks/useMenuAnimation";
import { LanguageButton } from "@shared/ui/languageButton";
import { NavigationLink } from "@shared/ui/link";

import "./styles.scss";

export const Menu = () => {
  const { menuRef } = useMenuAnimation(); // Get the menuRef
  return (
    <aside className="menu flex flex-col items-end" ref={menuRef}>
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
