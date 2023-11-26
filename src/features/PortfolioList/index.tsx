import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { PortfolioTab } from "@shared/ui/portfolioTab";

export const PortfolioList = () => {
  const selectedOption: string = useSelector(
    (state: any) => state.selector.selectedOption
  );

  // Define a type for portfolioItems
  type PortfolioCategory = {
    name: string;
    img: string;
    description: string;
  };

  type PortfolioItems = {
    [key: string]: PortfolioCategory[];
  };

  const portfolioItems: PortfolioItems = {
    websites: [
      {
        name: "Site One",
        img: "/images/site-one.jpg",
        description: "A cool website",
      },
      {
        name: "Site Two",
        img: "/images/site-two.jpg",
        description: "Another cool website",
      },
    ],
    applications: [
      {
        name: "App One",
        img: "/images/app-one.jpg",
        description: "A useful app",
      },
      {
        name: "App Two",
        img: "/images/app-two.jpg",
        description: "Another useful app",
      },
    ],
    logotypes: [
      {
        name: "Logo One",
        img: "/images/logo-one.jpg",
        description: "A sleek logo",
      },
      {
        name: "Logo Two",
        img: "/images/logo-two.jpg",
        description: "Another sleek logo",
      },
    ],
  };

  const itemsToDisplay = useMemo(() => {
    return portfolioItems[selectedOption] || [];
  }, [selectedOption]);

  return (
    <div className="portfolio-list">
      {itemsToDisplay.map((item, index) => (
        <PortfolioTab
          key={index}
          name={item.name}
          img={item.img}
          onClick={() => {
            console.log(`${item.name} clicked`);
          }}
        />
      ))}
    </div>
  );
};
