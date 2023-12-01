import React, { useMemo } from "react";
import { usePortfolioNameReveal } from "@shared/lib/hooks/usePortfolioNameReveal";
import { useSelector } from "react-redux";
import { PortfolioTab } from "@shared/ui/portfolioTab";

import work01 from "@assets/images/work01.webp";
import work02 from "@assets/images/work02.webp";
import work03 from "@assets/images/work03.webp";
import work04 from "@assets/images/work04.webp";
import work05 from "@assets/images/work05.webp";
import work06 from "@assets/images/work06.webp";
import work07 from "@assets/images/work07.webp";
import work08 from "@assets/images/work08.webp";
import work10 from "@assets/images/work10.webp";
import work11 from "@assets/images/work11.webp";

export const PortfolioList = () => {
  const selectedOption: string = useSelector(
    (state: any) => state.selector.selectedOption
  );

  const { portfolioTab, tabOnHoverAnimation, tabOffHoverAnimation } =
    usePortfolioNameReveal();

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
        name: "Arconica Special Solutions",
        img: work10,
        description: "A cool website",
      },
      {
        name: "Arconica Special Solutions",
        img: work11,
        description: "A cool website",
      },
      {
        name: "Jintropine.kz",
        img: work06,
        description: "A cool website",
      },
      {
        name: "Your Domain Bot",
        img: work05,
        description: "A cool website",
      },
      {
        name: "Intelligence.io",
        img: work01,
        description: "A cool website",
      },
      {
        name: "Prime Properties",
        img: work02,
        description: "Another cool website",
      },
      {
        name: "Vintage.io",
        img: work03,
        description: "Another cool website",
      },
      {
        name: "Drekt.io",
        img: work04,
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
          tabRef={portfolioTab}
          onHover={tabOnHoverAnimation}
          offHover={tabOffHoverAnimation}
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
