import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import "./styles.scss";

export const PortfolioSwitch = () => {
  const [select, setSelected] = useState("");
  const navigate = useNavigate();

  return (
    <div className="switcher">
      <Fade direction="up" cascade damping={0.3}>
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
        <span
          className={`switcher__text text-custom-orange hoverable ml-4`}
          onClick={() => navigate("/portfolio")}
        >
          Портфолио
        </span>
      </Fade>
    </div>
  );
};
