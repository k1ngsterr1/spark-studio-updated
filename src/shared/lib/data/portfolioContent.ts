import { IconDefinition, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import photo from "@assets/images/sites/works/work01.webp";

export interface PhotoItem {
  photo: string;
}

interface ListItem {
  icon: IconDefinition;
  list: string;
}

interface PortfolioInfo {
  title: string;
  subTitle: string;
  description: string;
  mainImage: string;
  techStackTitle: string;
  metaTitle: string;
  metaDescription: string;
  options: ListItem[];
  gallery: PhotoItem[];
}

export const portfolioContent: Record<string, PortfolioInfo> = {
  special_solutions: {
    title: "Special Solutions",
    subTitle: "Сайт для проектно-архитектурной компании",
    description: "Проверочное описание",
    techStackTitle: "Технологический стэк",
    mainImage: photo,
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    gallery: [
      {
        photo: photo,
      },
    ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
    ],
  },
};
