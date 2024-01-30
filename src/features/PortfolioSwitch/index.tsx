import { useState } from "react";

import "./styles.scss";

export const PortfolioSwitch = () => {
  const [select, setSelected] = useState("");

  return (
    <div className="switcher">
      <span
        className={`switcher__text--${
          select === "Сайты" ? "active" : "disable"
        } hoverable`}
        onClick={() => setSelected("Сайты")}
      >
        Сайты
      </span>
      <span
        className={`switcher__text--${
          select === "Приложения" ? "active" : "disable"
        } hoverable ml-4`}
        onClick={() => setSelected("Приложения")}
      >
        Приложения
      </span>
      <span
        className={`switcher__text--${
          select === "Логотипы" ? "active" : "disable"
        } hoverable ml-4`}
        onClick={() => setSelected("Логотипы")}
      >
        Логотипы
      </span>
    </div>
  );
};
