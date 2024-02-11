import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PortfolioItem } from "@shared/ui/PortfolioItem";
import { useNavigate } from "react-router-dom";

import work01 from "@assets/images/sites/works/work01.webp";
import work02 from "@assets/images/sites/works/work02.webp";
import work03 from "@assets/images/sites/works/work03.webp";
import work04 from "@assets/images/sites/works/work04.webp";
import work05 from "@assets/images/sites/works/work05.webp";
import work06 from "@assets/images/sites/works/work06.webp";
import work10 from "@assets/images/sites/works/work10.webp";
import work11 from "@assets/images/sites/works/work11.webp";
import as_partners from "@assets/images/sites/works/arconica_portfolio.webp";

import logo01 from "@assets/images/logo/Agro_Logo.webp";
import logo02 from "@assets/images/logo/Cargo_Logo.webp";
import logo03 from "@assets/images/logo/ChinaDrive_Logo.webp";
import logo04 from "@assets/images/logo/SHBT_Logo.webp";
import logo05 from "@assets/images/logo/SUNGRAIN_Logo.webp";

import "./styles.scss";

export const PortfolioList = () => {
  const selectedOption: string = useSelector(
    (state: any) => state.portfolioState.portfolioState
  );

  const navigate = useNavigate();

  type PortfolioCategory = {
    name: string;
    img: string;
    description: string;
    navigate: string;
  };

  type PortfolioItems = {
    [key: string]: PortfolioCategory[];
  };

  const portfolioItems: PortfolioItems = {
    Сайты: [
      {
        name: "Arconica Special Solutions",
        img: work10,
        navigate: "special_solutions",
        description: "A cool website",
      },
      {
        name: "Sharbakty Bidai Terminal",
        img: work11,
        navigate: "sharbakty",
        description: "A cool website",
      },
      {
        name: "Jintropine.kz",
        img: work06,
        navigate: "jintropine",
        description: "A cool website",
      },
      {
        name: "Your Domain Bot",
        img: work05,
        navigate: "your_domain_bot",
        description: "A cool website",
      },
      {
        name: "Intelligence.io",
        img: work01,
        navigate: "intelligence_io",
        description: "A cool website",
      },
      {
        name: "Prime Properties",
        img: work02,
        navigate: "prime_properties",
        description: "Another cool website",
      },
      {
        name: "Vintage.io",
        img: work03,
        navigate: "vintage_io",
        description: "Another cool website",
      },
      {
        name: "Drekt.io",
        img: work04,
        navigate: "drekt_io",
        description: "Another cool website",
      },
      {
        name: "AS & Partners",
        img: as_partners,
        navigate: "as_partners",
        description: "Another cool website",
      },
    ],
    Логотипы: [
      {
        name: "Agro Partners PV",
        navigate: "example",
        img: logo01,
        description: "A useful app",
      },
      {
        name: "Cargo Express PV",
        navigate: "example",
        img: logo02,
        description: "Another useful app",
      },
      {
        name: "China Drive",
        navigate: "example",
        img: logo03,
        description: "Another useful app",
      },
      {
        name: "Sharbakty Bidai Terminal",
        navigate: "example",
        img: logo04,
        description: "Another useful app",
      },
      {
        name: "Sungrain",
        navigate: "example",
        img: logo05,
        description: "Another useful app",
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
          <PortfolioItem
            key={index}
            name={item.name}
            img={item.img}
            onClick={() => {
              navigate(`/portfolio/${item.navigate}`);
            }}
          />
        ))}
      </div>
    </>
  );
};
