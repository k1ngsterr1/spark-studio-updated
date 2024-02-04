import {
  IconDefinition,
  faFigma,
  faGit,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// Special Solutions
import SS_LOGO from "@assets/images/sites/logos/ss_logo.svg";
import SS_MOCKUP from "@assets/images/sites/mockups/SS_MOCKUP.png";
import SS_PHONE_MOCKUP from "@assets/images/sites/mockups/SS_PHONE_MOCKUP.png";
import SS_MAIN from "@assets/images/sites/mockups/SS_MAIN_IMAGE.png";
import SS_MAIN_2 from "@assets/images/sites/mockups/SS_MAIN_IMAGE_2.png";
import SS_MAIN_3 from "@assets/images/sites/mockups/SS_MAIN_IMAGE_3.png";

// AS Solutions
import AS_MOCKUP from "@assets/images/sites/mockups/AS_MOCKUP.png";
import AS_PHONE_MOCKUP from "@assets/images/sites/mockups/AS_PHONE_MOCKUP.png";
import AS_MAIN from "@assets/images/sites/mockups/AS_MAIN_IMAGE.png";
import AS_MAIN_2 from "@assets/images/sites/mockups/AS_MAIN_IMAGE_2.png";
import AS_MAIN_3 from "@assets/images/sites/mockups/AS_MAIN_IMAGE_3.png";

// Cargo
import CARGO_MOCKUP from "@assets/images/sites/mockups/CARGO_MOCKUP.png";
import CARGO_PHONE_MOCKUP from "@assets/images/sites/mockups/CARGO_PHONE_MOCKUP.png";
import CARGO_MAIN from "@assets/images/sites/mockups/CARGO_MAIN_IMAGE.png";
import CARGO_MAIN_2 from "@assets/images/sites/mockups/CARGO_MAIN_IMAGE_2.png";
import CARGO_MAIN_3 from "@assets/images/sites/mockups/CARGO_MAIN_IMAGE_3.png";

// SHBT
import SHBT_MOCKUP from "@assets/images/sites/mockups/SHBT_MOCKUP.png";
import SHBT_PHONE_MOCKUP from "@assets/images/sites/mockups/SHBT_PHONE_MOCKUP.png";
import SHBT_MAIN from "@assets/images/sites/mockups/SHBT_MAIN_IMAGE.png";
import SHBT_MAIN_2 from "@assets/images/sites/mockups/SHBT_MAIN_IMAGE_2.png";
import SHBT_MAIN_3 from "@assets/images/sites/mockups/SHBT_MAIN_IMAGE_3.png";

// China Drive
import CHINA_MOCKUP from "@assets/images/sites/mockups/CD_MOCKUP.png";
import CHINA_PHONE_MOCKUP from "@assets/images/sites/mockups/CD_PHONE_MOCKUP.png";
import CHINA_MAIN from "@assets/images/sites/mockups/CD_MAIN_IMAGE.png";
import CHINA_MAIN_2 from "@assets/images/sites/mockups/CD_MAIN_IMAGE_2.png";
import CHINA_MAIN_3 from "@assets/images/sites/mockups/CD_MAIN_IMAGE_3.png";

// Agro Partners
import AGRO_MOCKUP from "@assets/images/sites/mockups/AGRO_MOCKUP.png";
import AGRO_PHONE_MOCKUP from "@assets/images/sites/mockups/AGRO_PHONE_MOCKUP.png";
import AGRO_MAIN from "@assets/images/sites/mockups/AGRO_MAIN_IMAGE.png";
import AGRO_MAIN_2 from "@assets/images/sites/mockups/AGRO_MAIN_IMAGE_2.png";
import AGRO_MAIN_3 from "@assets/images/sites/mockups/AGRO_MAIN_IMAGE_3.png";

export interface PhotoItem {
  photo: string;
}

export interface DevicesGalleryProps {
  devicesImages: PhotoItem[];
}

interface ListItem {
  icon: IconDefinition;
  list: string;
}

interface Paragraphs {
  text: string;
}

export interface PortfolioInfo {
  title: string;
  taskDescription: string;
  subTitle: string;
  description: string;
  mainImage: string;
  mainImage_2: string;
  mainImage_3: string;
  backgroundImage: string;
  logo: string;
  mockUpImage: string;
  techStackTitle: string;
  metaTitle: string;
  metaDescription: string;
  options: ListItem[];
  gallery?: PhotoItem[];
  phoneMockup: string;
  linkProject: string;
  adaptiveDescription: Paragraphs[];
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
    mainImage: SS_MAIN,
    mainImage_2: SS_MAIN_2,
    mainImage_3: SS_MAIN_3,
    backgroundImage: "SS_BG",
    logo: SS_LOGO,
    mockUpImage: SS_MOCKUP,
    linkProject: "https://special-solutions.kz/home",
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    phoneMockup: SS_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
    ],
    // gallery: [
    //   {
    //     photo: photo,
    //   },
    // ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
      {
        icon: faGit,
        list: "Git",
      },
      {
        icon: faFigma,
        list: "Figma",
      },
    ],
  },
  as_partners: {
    title: "AS & Partners",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: AS_MAIN,
    mainImage_2: AS_MAIN_2,
    mainImage_3: AS_MAIN_3,
    backgroundImage: "AS_BG",
    logo: SS_LOGO,
    mockUpImage: AS_MOCKUP,
    linkProject: "https://arconica.kz/home",
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    phoneMockup: AS_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
    ],
    // gallery: [
    //   {
    //     photo: photo,
    //   },
    // ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
      {
        icon: faGit,
        list: "Git",
      },
      {
        icon: faFigma,
        list: "Figma",
      },
    ],
  },
  cargo: {
    title: "Cargo Express PV",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: CARGO_MAIN,
    mainImage_2: CARGO_MAIN_2,
    mainImage_3: CARGO_MAIN_3,
    backgroundImage: "CARGO_BG",
    logo: SS_LOGO,
    mockUpImage: CARGO_MOCKUP,
    linkProject: "https://cargopv.kz/",
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    phoneMockup: CARGO_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
    ],
    // gallery: [
    //   {
    //     photo: photo,
    //   },
    // ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
      {
        icon: faGit,
        list: "Git",
      },
      {
        icon: faFigma,
        list: "Figma",
      },
    ],
  },
  sharbakty: {
    title: "Sharbakty Bidai Terminal",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: SHBT_MAIN,
    mainImage_2: SHBT_MAIN_2,
    mainImage_3: SHBT_MAIN_3,
    backgroundImage: "SHBT_BG",
    logo: SS_LOGO,
    mockUpImage: SHBT_MOCKUP,
    linkProject: "https://cargopv.kz/",
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    phoneMockup: SHBT_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
    ],
    // gallery: [
    //   {
    //     photo: photo,
    //   },
    // ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
      {
        icon: faGit,
        list: "Git",
      },
      {
        icon: faFigma,
        list: "Figma",
      },
    ],
  },
  china_drive: {
    title: "Sharbakty Bidai Terminal",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: CHINA_MAIN,
    mainImage_2: CHINA_MAIN_2,
    mainImage_3: CHINA_MAIN_3,
    backgroundImage: "CHINA_BG",
    logo: SS_LOGO,
    mockUpImage: CHINA_MOCKUP,
    linkProject: "https://cargopv.kz/",
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    phoneMockup: CHINA_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
    ],
    // gallery: [
    //   {
    //     photo: photo,
    //   },
    // ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
      {
        icon: faGit,
        list: "Git",
      },
      {
        icon: faFigma,
        list: "Figma",
      },
    ],
  },
  agro: {
    title: "Agro Partners PV",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: AGRO_MAIN,
    mainImage_2: AGRO_MAIN_2,
    mainImage_3: AGRO_MAIN_3,
    backgroundImage: "AGRO_BG",
    logo: SS_LOGO,
    mockUpImage: AGRO_MOCKUP,
    linkProject: "https://agropv.kz/home",
    metaTitle: "Проверка",
    metaDescription: "Проверка",
    phoneMockup: AGRO_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
      {
        text: "Сайт спроектирован таким образом, что-бы соответствовать современным требованиям юзабилити. По умолчанию сайт интернет-магазина проектируется не только в десктопной версии, но и под мобильные устройства (планшет и смартфон).",
      },
    ],
    // gallery: [
    //   {
    //     photo: photo,
    //   },
    // ],
    options: [
      {
        icon: faReact,
        list: "React",
      },
      {
        icon: faGit,
        list: "Git",
      },
      {
        icon: faFigma,
        list: "Figma",
      },
    ],
  },
};
