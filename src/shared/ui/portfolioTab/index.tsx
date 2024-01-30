import React from "react";

import "./styles.scss";

interface PortfolioTabsProps {
  name: string;
  onHover: () => void;
  offHover: () => void;
  img: string;
  onClick: () => void;
  tabRef: React.RefObject<HTMLDivElement>;
}

export const PortfolioTab: React.FC<PortfolioTabsProps> = ({
  name,
  img,
  onClick,
  onHover,
  offHover,
  tabRef,
}) => {
  return (
    <div
      className="portfolio-tab hoverable mt-12"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={offHover}
    >
      <div
        className="portfolio-tab__name-tab hoverable flex items-center justify-center"
        ref={tabRef}
      >
        <span className="portfolio-tab__name-tab__text">{name}</span>
      </div>
      <img src={img} className="portfolio-tab__image hoverable" alt={name} />
    </div>
  );
};
