import { ScrollButton } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";
import { PriceScreen } from "@features/Screens/PriceScreen";
import { WorkScreen } from "@features/Screens/WorkScreen";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import FormFeature from "@features/Home/ui/FormFeature";

import websites from "@assets/images/assets/websites.svg";

import "./styles.scss";

export const WebsiteFeature = () => {
  return (
    <>
      <main className="mobile flex flex-col justify-center items-center">
        <Slide direction="left" delay={100}>
          <h1 className="text-center">
            Разработка <span className="orange">Веб-Сайтов</span>{" "}
          </h1>
        </Slide>
        <Breadcrumbs
          sx={{
            marginTop: "clamp(8px,3.73824vw,32px)",
          }}
        >
          <Link to="/home">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/services/websites" className="orange">
            Разработка Веб-Сайтов
          </Link>
        </Breadcrumbs>
        <Slide direction="right" delay={200}>
          <p className="mt-8 w-[100%]">
            В Spark Studio мы предлагаем высококачественные услуги по разработке
            веб-сайтов, которые помогут вашему бизнесу выделиться в цифровом
            пространстве. Наша команда опытных разработчиков и дизайнеров
            работает над созданием инновационных и эффективных веб-сайтов,
            которые не только привлекательны визуально, но и оптимизированы для
            поисковых систем, обеспечивая лучшее взаимодействие с пользователем
            и повышение конверсии.
          </p>
        </Slide>

        <Slide direction="left" delay={300}>
          <ScrollButton text="Заказать" marginTop="mt-4" to="contacts" />
        </Slide>
        <PriceScreen />
        <WorkScreen />
        <PortfolioFeature />
        <FormFeature />
      </main>
      <div className="pc flex flex-col">
        <main className="flex justify-between items-start">
          <div className="flex flex-col items-start">
            <Slide direction="left" className="ml-0" delay={100}>
              <h1 className="text-left inline-block w-[60%]">
                Разработка <span className="orange">Веб-Сайтов</span>{" "}
              </h1>
            </Slide>
            <Slide direction="left" delay={150}>
              <Breadcrumbs
                sx={{
                  marginTop: "clamp(8px,3.73824vw,32px)",
                }}
              >
                <Link
                  to="/home"
                  className="hoverable transition-all hover:text-custom-orange"
                >
                  Главная
                </Link>
                <Link
                  to="/services"
                  className="hoverable transition-all hover:text-custom-orange"
                >
                  Услуги
                </Link>
                <Link to="/services/websites" className="orange hoverable">
                  Разработка Веб-Сайтов
                </Link>
              </Breadcrumbs>
            </Slide>
            <Slide direction="left" delay={200}>
              <p className="inline-block  mt-8 w-[60%]">
                В Spark Studio мы предлагаем высококачественные услуги по
                разработке веб-сайтов, которые помогут вашему бизнесу выделиться
                в цифровом пространстве. Наша команда опытных разработчиков и
                дизайнеров работает над созданием инновационных и эффективных
                веб-сайтов, которые не только привлекательны визуально, но и
                оптимизированы для поисковых систем, обеспечивая лучшее
                взаимодействие с пользователем и повышение конверсии.
              </p>
            </Slide>
            <Slide direction="left" delay={300}>
              <ScrollLink></ScrollLink>
              <ScrollButton text="Заказать" marginTop="mt-4" to="contacts-pc" />
            </Slide>
          </div>
          <Slide direction="right" className="w-full" delay={300}>
            <img src={websites} alt="websites" className="websites" />
          </Slide>
        </main>
        <PriceScreen />
        <WorkScreen />
        <PortfolioFeature />
        <FormFeature />
      </div>
    </>
  );
};
