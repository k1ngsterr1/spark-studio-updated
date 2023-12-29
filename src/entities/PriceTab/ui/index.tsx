import React from "react";
import { Button } from "@shared/ui/button";
import spark from "@assets/images/spark.svg";

import "./styles.scss";

interface PriceProperty {
  propertyName: string;
  propertyGraph: string;
}

interface PriceTabProps {
  tabNaming: string;
  tabDescription: string;
  price: string;
  marginTop: string;
  properties?: PriceProperty[];
}

export const PriceTab: React.FC<PriceTabProps> = ({
  tabNaming,
  tabDescription,
  price,
  marginTop,
  properties,
}) => {
  return (
    <div className={`price-tab ${marginTop}`}>
      <div className="price-tab__container">
        <img src={spark} alt="spark" className="price-tab__container__image" />
        <div className="price-tab__container__heading-container">
          <span className="price-tab__container__heading-container__heading">
            {tabNaming}
          </span>
          <span className="price-tab__container__heading-container__description">
            {tabDescription}
          </span>
        </div>
        <span className="price-tab__container__price">{price}</span>
        <div className="price-tab__container__properties">
          {properties &&
            properties.map((prop, index) => (
              <div
                key={index}
                className="price-tab__container__properties__property"
              >
                <span className="font-normal">{prop.propertyName}</span>
                <span>{prop.propertyGraph}</span>
              </div>
            ))}
        </div>
        <button className="price-tab__container__button">Заказать</button>
      </div>
    </div>
  );
};
