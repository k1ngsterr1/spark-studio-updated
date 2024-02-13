import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PortfolioItem } from "@shared/ui/PortfolioItem";
import { useNavigate } from "react-router-dom";

import work01 from "@assets/images/sites/works/cargo_portfolio.webp";

import work05 from "@assets/images/sites/works/china_portfolio.webp";
import work06 from "@assets/images/sites/works/agro_portfolio.webp";
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
        name: "AGRO PARTNERS PV",
        img: work06,
        navigate: "agro",
        description: "A cool website",
      },
      {
        name: "China Drive",
        img: work05,
        navigate: "china_drive",
        description: "A cool website",
      },
      {
        name: "Cargo Express PV",
        img: work01,
        navigate: "cargo",
        description: "A cool website",
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
