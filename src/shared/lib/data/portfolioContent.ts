import { IconDefinition, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import photo from "@assets/images/sites/works/work01.webp";

import SS_LOGO from "@assets/images/sites/logos/ss_logo.svg";
import SS_MOCKUP from "@assets/images/sites/mockups/SS_MOCKUP.png";

export interface PhotoItem {
  photo: string;
}

interface ListItem {
  icon: IconDefinition;
  list: string;
}

export interface PortfolioInfo {
  title: string;
  taskDescription: string;
  subTitle: string;
  description: string;
  mainImage: string;
  backgroundImage: string;
  logo: string;
  mockUpImage: string;
  techStackTitle: string;
  metaTitle: string;
  metaDescription: string;
  options: ListItem[];
  gallery: PhotoItem[];
  linkProject: string;
}

export const portfolioContent: Record<string, PortfolioInfo> = {
  special_solutions: {
    title: "Special Solutions",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: photo,
    backgroundImage: "SS_BG",
    logo: SS_LOGO,
    mockUpImage: SS_MOCKUP,
    linkProject: "https://special-solutions.kz/home",
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
