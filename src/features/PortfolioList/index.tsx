import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { PortfolioTab } from "@shared/ui/portfolioTab";

import work01 from "@assets/images/work01.webp";
import work02 from "@assets/images/work02.webp";
import work03 from "@assets/images/work03.webp";

export const PortfolioList = () => {
  const selectedOption: string = useSelector(
    (state: any) => state.selector.selectedOption
  );

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
        name: "Intelligence.io",
        img: work01,
        description: "A cool website",
      },
      {
        name: "Site Two",
        img: work02,
        description: "Another cool website",
      },
      {
        name: "Site Three",
        img: work03,
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
    <div className="portfolio-list w-full">
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
