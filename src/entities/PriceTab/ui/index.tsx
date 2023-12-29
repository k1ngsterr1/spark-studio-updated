import React from "react";
import "./styles.scss";

interface PriceProperty {
  propertyName: string;
  propertyGraph: string;
}

interface PriceTabProps {
  tabNaming: string;
  tabDescription: string;
  price: string;
  properties: PriceProperty[];
}

export const PriceTab: React.FC<PriceTabProps> = ({
  tabNaming,
  tabDescription,
  price,
  properties,
}) => {
  return (
    <div className="price-tab">
      <div className="price-tab__container">
        <div className="price-tab__container__heading-container">
          <span className="price-tab__container__heading-container__heading">
            {tabNaming}
          </span>
          <span className="price-tab__container__heading-container__description">
            {tabDescription}
          </span>
        </div>
        <span className="price-tab__container__price">{price}</span>
      </div>
    </div>
  );
};
