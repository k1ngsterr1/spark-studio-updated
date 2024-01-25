import { useMemo } from "react";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { PortfolioItem } from "@shared/ui/PortfolioItem";

import work01 from "@assets/images/sites/works/work01.webp";
import work02 from "@assets/images/sites/works/work02.webp";
import work03 from "@assets/images/sites/works/work03.webp";
import work04 from "@assets/images/sites/works/work04.webp";
import work05 from "@assets/images/sites/works/work05.webp";
import work06 from "@assets/images/sites/works/work06.webp";
import work10 from "@assets/images/sites/works/work10.webp";
import work11 from "@assets/images/sites/works/work11.webp";

import logo01 from "@assets/images/logo/logo.webp";
import logo02 from "@assets/images/logo/logo2.webp";
import logo03 from "@assets/images/logo/logo3.webp";
import logo04 from "@assets/images/logo/logo4.webp";
import logo05 from "@assets/images/logo/logo5.webp";

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
        name: "China Drive",
        img: logo01,
        description: "A sleek logo",
      },
      {
        name: "Logo Two",
        img: logo02,
        description: "Sun Grain",
      },
      {
        name: "Agro Class",
        img: logo03,
        description: "Another sleek logo",
      },
      {
        name: "Cargo Express PV",
        img: logo04,
        description: "Cargo Express PV",
      },
      {
        name: "SAMIGROUP",
        img: logo05,
        description: "Another sleek logo",
      },
    ],
  };

  const itemsToDisplay = useMemo(() => {
    return portfolioItems[selectedOption] || [];
  }, [selectedOption]);

  return (
    <>
      <div className="portfolio-list w-full">
        {itemsToDisplay.map((item, index) => (
          <Slide cascade triggerOnce>
            <PortfolioItem
              key={index}
              name={item.name}
              img={item.img}
              onClick={() => {
                console.log(`${item.name} clicked`);
              }}
            />
          </Slide>
        ))}
      </div>
    </>
  );
};
