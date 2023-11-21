import React from "react";

interface PortfolioTabsProps {
  name: string;
  img: string;
  onClick: () => void;
}

export const PortfolioTab: React.FC<PortfolioTabsProps> = ({
  name,
  img,
  onClick,
}) => {
  return (
    <div className="portfolio-tab" onClick={onClick}>
      <div className="portfolio-tab__name-tab flex items-center justify-center">
        <span className="portfolio-tab__name-tab__text">{name}</span>
      </div>
      <img src={img} className="portfolio-tab__image" alt={name} />
    </div>
  );
};
