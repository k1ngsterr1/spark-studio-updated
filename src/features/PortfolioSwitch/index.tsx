import { useDispatch, useSelector } from "react-redux";

import { Fade } from "react-awesome-reveal";
import { switchState } from "@shared/lib/redux/portfolioSwitchSlice";

import "./styles.scss";

export const PortfolioSwitch = () => {
  const selectedValue = useSelector(
    (state: any) => state.portfolioState.portfolioState
  );

  const dispatch = useDispatch();

  const handleChange = (optionValue: string) => {
    dispatch(switchState(optionValue));
  };

  return (
    <div className="switcher">
      <Fade direction="up" cascade damping={0.3}>
        <span
          className={`switcher__text--${
            selectedValue === "Сайты" ? "active" : "disable"
          } hoverable text-lg`}
          onClick={() => handleChange("Сайты")}
        >
          Сайты
        </span>
        {/* <span
          className={`switcher__text--${
            selectedValue === "Приложения" ? "active" : "disable"
          } hoverable ml-4`}
          onClick={() => handleChange("Приложения")}
        >
          Приложения
        </span> */}
        <span
          className={`switcher__text--${
            selectedValue === "Логотипы" ? "active" : "disable"
          } hoverable ml-4 text-lg`}
          onClick={() => handleChange("Логотипы")}
        >
          Логотипы
        </span>
        {/* <span
          className={`switcher__text text-custom-orange hoverable ml-4`}
          onClick={() => navigate("/portfolio")}
        >
          Портфолио
        </span> */}
      </Fade>
    </div>
  );
};
