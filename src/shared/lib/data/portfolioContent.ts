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

// Showtime Mafia
import SHOWTIME_LOGO from "@assets/images/logo/SHOWTIME_LOGO.webp";
import SHOWTIME_MOCKUP from "@assets/images/sites/mockups/SA_MOCKUP.png";
import SHOWTIME_PHONE_MOCKUP from "@assets/images/sites/mockups/SA_PHONE_MOCKUP.webp";
import SHOWTIME_MAIN from "@assets/images/sites/mockups/SA_MAIN_IMAGE.webp";
import SHOWTIME_MAIN_2 from "@assets/images/sites/mockups/SA_MAIN_IMAGE_2.webp";
import SHOWTIME_MAIN_3 from "@assets/images/sites/mockups/SA_MAIN_IMAGE_3.webp";

// Sungrain
import SUNGRAIN_MAIN from "@assets/images/sites/mockups/SUNGRAIN_MAIN_IMAGE.png";
import SUNGRAIN_MAIN_2 from "@assets/images/sites/mockups/SUNGRAIN_MAIN_IMAGE_3.png";
import SUNGRAIN_MAIN_3 from "@assets/images/sites/mockups/SUNGRAIN_MAIN_IMAGE_3.png";
import SUNGRAIN_PHONE from "@assets/images/sites/mockups/SUNGRAIN_MAIN_IMAGE_PHONE.png";
import SUNGRAIN_LOGO from "@assets/images/logo/SUNGRAIN_Logo.webp";
import SG_MOCKUP from "@assets/images/sites/mockups/SG_MOCKUP.png";

// Vkus Hleba
import VK_MAIN from "@assets/images/sites/mockups/VK_MAIN_IMAGE_01.png";
import VK_MAIN_2 from "@assets/images/sites/mockups/VK_MAIN_IMAGE_03.png";
import VK_MAIN_3 from "@assets/images/sites/mockups/VK_MAIN_IMAGE_03.png";
import VK_PHONE_MOCKUP from "@assets/images/sites/mockups/VK_PHONE_MOCKUP.png";
import VK_MOCKUP from "@assets/images/sites/mockups/VK_MOCKUP.png";

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
      "Проект по разработке лендинга для проектно-строительной компании – это комплексное задание, направленное на создание привлекательной, информативной и функциональной одностраничной веб-страницы, которая будет служить витриной для демонстрации услуг и преимуществ компании в сфере строительства и проектирования.",
    subTitle: "Сайт для проектно-строительной компании",
    description:
      "Special Solutions представляет портфолио передовых строительных работ. Мы стремимся к инновациям в каждом проекте, создавая функциональные и эстетически привлекательные объекты для наших клиентов.",
    techStackTitle: "Технологический стэк",
    mainImage: SS_MAIN,
    mainImage_2: SS_MAIN_2,
    mainImage_3: SS_MAIN_3,
    backgroundImage: "SS_BG",
    logo: SS_LOGO,
    mockUpImage: SS_MOCKUP,
    linkProject: "https://special-solutions.kz/home",
    metaTitle: "Special Solutions - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Special Solutions.",
    phoneMockup: SS_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "В современном мире, где пользователи доступаются к интернет-ресурсам через множество устройств с различными экранами и разрешениями, адаптивный дизайн лендинга не является просто удобством — это критически важный элемент эффективности веб-сайта. Наш подход к разработке лендинга для проектно-строительной компании исходит из необходимости гарантировать, что каждый элемент дизайна, каждый блок контента и каждый пользовательский интерфейс будет идеально адаптирован для максимального удобства использования.",
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
      "Проект разработки лендинга для проектно-архитектурной компании AS & Partners направлен на создание высококачественной веб-страницы, которая будет служить цифровой визитной карточкой компании. Этот лендинг станет ключевым инструментом для привлечения новых клиентов и партнёров, демонстрируя профессионализм, портфолио и фирменный стиль AS & Partners.",
    subTitle: "Сайт для проектно-архитектурной компании",
    description:
      "Добро пожаловать на сайт AS Partners Architect, вашего надежного партнера в мире современной архитектуры и дизайна. Мы специализируемся на создании инновационных, функциональных и эстетически привлекательных архитектурных решений, которые отражают последние тенденции в области урбанистики и дизайна интерьеров.",
    techStackTitle: "Технологический стэк",
    mainImage: AS_MAIN,
    mainImage_2: AS_MAIN_2,
    mainImage_3: AS_MAIN_3,
    backgroundImage: "AS_BG",
    logo: SS_LOGO,
    mockUpImage: AS_MOCKUP,
    linkProject: "https://arconica.kz/home",
    metaTitle: "AS & Partners - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с AS & Partners.",
    phoneMockup: AS_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "В основе успешного представления проектно-архитектурной компании AS & Partners в цифровом пространстве лежит не только стильный дизайн и качественное содержание, но и адаптивность лендинга. Адаптация проекта к различным устройствам и разрешениям экранов – это фундаментальный принцип, который мы внедряем на каждом этапе разработки лендинга.",
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
      "Проект Cargo Express PV ставит своей целью создание одностраничного сайта, который будет отражать ключевые аспекты деятельности компании, специализирующейся на перевозке зерна. Лендинг предназначен для увеличения узнаваемости бренда и привлечения новых клиентов, представляя информацию о компании, её услугах, преимуществах сотрудничества и способах контакта.",
    subTitle: "Сайт для компании Ж/Д перевозок",
    description:
      "CargoExpress PV гордится своей способностью эффективно сотрудничать с собственниками различных типов вагонов, предоставляя клиентам уникальные возможности для перевозки грузов. Мы ценим многообразие в транспортном парке и обеспечиваем гибкость в выборе вагонов для наших клиентов.",
    techStackTitle: "Технологический стэк",
    mainImage: CARGO_MAIN,
    mainImage_2: CARGO_MAIN_2,
    mainImage_3: CARGO_MAIN_3,
    backgroundImage: "CARGO_BG",
    logo: SS_LOGO,
    mockUpImage: CARGO_MOCKUP,
    linkProject: "https://cargopv.kz/",
    metaTitle: "Cargo Express PV - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Cargo Express PV.",
    phoneMockup: CARGO_PHONE_MOCKUP,
    adaptiveDescription: [
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
      "Проект по разработке лендинга для Sharbakty Bidai Terminal направлен на создание эффективного и визуально привлекательного веб-представления компании, специализирующейся на логистике и перевозке зерновых культур. Целью данного проекта является разработка одностраничного сайта, который будет выступать в роли ключевого инструмента для увеличения узнаваемости бренда, привлечения новых клиентов и партнёров, а также предоставления исчерпывающей информации о предлагаемых услугах, особенностях работы компании и способах связи.",
    subTitle: "Сайт для зернового терминала",
    description:
      "Sharbakty Bidai Terminal - это современный терминал и элеватор, специализирующийся на хранении и переработке сельскохозяйственных продуктов. Расположенный в стратегически важном регионе, этот терминал служит центральным узлом для множества аграрных операций, обеспечивая сельскохозяйственным предприятиям и фермерам эффективное хранение и транспортировку их урожаев.",
    techStackTitle: "Технологический стэк",
    mainImage: SHBT_MAIN,
    mainImage_2: SHBT_MAIN_2,
    mainImage_3: SHBT_MAIN_3,
    backgroundImage: "SHBT_BG",
    logo: SS_LOGO,
    mockUpImage: SHBT_MOCKUP,
    linkProject: "https://shbt.kz/",
    metaTitle: "Sharbakty Bidai Terminal - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Sharbakty Bidai Terminal.",
    phoneMockup: SHBT_PHONE_MOCKUP,
    adaptiveDescription: [
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
    title: "China Drive",
    taskDescription:
      "Разработка интернет-магазина полного цикла дизайн-макеты страниц, верстка, адаптивные версии под мобильные устройства, интеграция с Битрикс и платежными системами.",
    subTitle: "Сайт для компании поставщика автомобильных деталей",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    techStackTitle: "Технологический стэк",
    mainImage: CHINA_MAIN,
    mainImage_2: CHINA_MAIN_2,
    mainImage_3: CHINA_MAIN_3,
    backgroundImage: "CHINA_BG",
    logo: SS_LOGO,
    mockUpImage: CHINA_MOCKUP,
    linkProject: "https://chinadrive.kz/",
    metaTitle: "China Drive - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с China Drive.",
    phoneMockup: CHINA_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "В современном мире, где доступ к интернету возможен с разнообразных устройств, адаптивность веб-страницы является неотъемлемым аспектом её успешности. В рамках проекта Cargo Express PV особое внимание уделяется адаптации дизайна под все возможные разрешения экранов и типы устройств. Это означает, что лендинг будет идеально отображаться как на широкоформатных мониторах, так и на экранах мобильных телефонов и планшетов.",
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
      "Проект по разработке лендинга для Agro Partners PV направлен на создание высокоэффективного и визуально привлекательного онлайн-представительства компании, специализирующейся на логистических услугах в сфере аграрной индустрии, в частности на перевозке зерновых культур. Целью проекта является разработка одностраничного сайта, который будет служить надёжным инструментом для привлечения новых клиентов, предоставляя полную и актуальную информацию о предлагаемых услугах, преимуществах работы с компанией, а также способах связи для дальнейшего сотрудничества.",
    subTitle: "Сайт для агро компании",
    description:
      "«AGRO PARTNERS» – группа специалистов, готовая помочь в поиске решений по вопросам экспорта зерновых и масличных культур.",
    techStackTitle: "Технологический стэк",
    mainImage: AGRO_MAIN,
    mainImage_2: AGRO_MAIN_2,
    mainImage_3: AGRO_MAIN_3,
    backgroundImage: "AGRO_BG",
    logo: SS_LOGO,
    mockUpImage: AGRO_MOCKUP,
    linkProject: "https://agropv.kz/home",
    metaTitle: "Agro Partners PV - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Agro Partners PV.",
    phoneMockup: AGRO_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Для обеспечения максимальной доступности и удобства использования лендинга компании Agro Partners PV важно гарантировать его корректное отображение на всех типах устройств. Адаптивный дизайн сайта позволит достичь этой цели, обеспечивая отличное визуальное восприятие и удобство навигации как на широкоформатных мониторах, так и на экранах мобильных телефонов и планшетов.",
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
  mafia: {
    title: "Showtime Mafia",
    logo: SHOWTIME_LOGO,
    taskDescription:
      "Проект по разработке лендинга для Showtime Mafia направлен на создание высокоэффективного и визуально привлекательного онлайн лэндинга компании, специализирующейся на проведении игр в оффлайн и онлайн мафию.",
    subTitle: "Сайт для event компании",
    description:
      "«Showtime Mafia» – группа специалистов, готовая помочь в поиске решений по вопросам организации ивентов.",
    techStackTitle: "Технологический стэк",
    mainImage: SHOWTIME_MAIN,
    mainImage_2: SHOWTIME_MAIN_2,
    mainImage_3: SHOWTIME_MAIN_3,
    backgroundImage: "SA_BG",
    mockUpImage: SHOWTIME_MOCKUP,
    linkProject: "https://mafshow.kz/",
    metaTitle: "Showtime Mafia - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Showtime Mafia.",
    phoneMockup: SHOWTIME_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Для обеспечения максимальной доступности и удобства использования лендинга компании Showtime Mafia важно гарантировать его корректное отображение на всех типах устройств. Адаптивный дизайн сайта позволит достичь этой цели, обеспечивая отличное визуальное восприятие и удобство навигации как на широкоформатных мониторах, так и на экранах мобильных телефонов и планшетов.",
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
  sungrain: {
    title: "Sungrain",
    taskDescription:
      "Проект по разработке лендинга для Sungrain направлен на создание высокоэффективного и визуально привлекательного онлайн лэндинга компании, специализирующейся на продаже муки.",
    subTitle: "Сайт для компании занимающейся поставкой и продажей муки",
    description:
      "«Sungrain» – группа специалистов, готовая помочь в поставке качественной муки.",
    techStackTitle: "Технологический стэк",
    mainImage: SUNGRAIN_MAIN,
    mainImage_2: SUNGRAIN_MAIN_2,
    mainImage_3: SUNGRAIN_MAIN_3,
    backgroundImage: "SUNGRAIN_BG",
    logo: SUNGRAIN_LOGO,
    mockUpImage: SG_MOCKUP,
    linkProject: "https://sungrain.kz/home",
    metaTitle: "Sungrain - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Showtime Mafia.",
    phoneMockup: SUNGRAIN_MAIN_3,
    adaptiveDescription: [
      {
        text: "Для обеспечения максимальной доступности и удобства использования лендинга компании Sungrain важно гарантировать его корректное отображение на всех типах устройств. Адаптивный дизайн сайта позволит достичь этой цели, обеспечивая отличное визуальное восприятие и удобство навигации как на широкоформатных мониторах, так и на экранах мобильных телефонов и планшетов.",
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
  vkus_hleba: {
    title: "Вкус Хлеба",
    taskDescription:
      "Проект по разработке лендинга для пекарни Вкус хлеба направлен на создание высокоэффективного и визуально привлекательного онлайн лэндинга компании, специализирующейся на выпечке.",
    subTitle: "Сайт для пекарни",
    description: "«Вкус Хлеба» – профессиональная пекарня .",
    techStackTitle: "Технологический стэк",
    mainImage: VK_MAIN,
    mainImage_2: VK_MAIN_2,
    mainImage_3: VK_MAIN_3,
    backgroundImage: "VK_BG",
    logo: SUNGRAIN_LOGO,
    mockUpImage: VK_MOCKUP,
    linkProject: "https://vkushleba.kz/",
    metaTitle: "Вкус хлеба - Разработка Лэндинга от Spark Studio",
    metaDescription:
      "Spark Studio предлагает индивидуальные решения в разработке лендингов для бизнеса. Откройте для себя высокоэффективные, творческие и SEO-оптимизированные одностраничные сайты, которые превращают посетителей в клиентов. Специальные решения для вашего уникального бренда с Showtime Mafia.",
    phoneMockup: VK_PHONE_MOCKUP,
    adaptiveDescription: [
      {
        text: "Для обеспечения максимальной доступности и удобства использования лендинга компании Вкус Хлеба важно гарантировать его корректное отображение на всех типах устройств. Адаптивный дизайн сайта позволит достичь этой цели, обеспечивая отличное визуальное восприятие и удобство навигации как на широкоформатных мониторах, так и на экранах мобильных телефонов и планшетов.",
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
