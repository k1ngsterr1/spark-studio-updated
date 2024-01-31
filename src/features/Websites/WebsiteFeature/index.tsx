import { Button } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";
import { PriceScreen } from "@features/Screens/PriceScreen";
import { WorkScreen } from "@features/Screens/WorkScreen";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
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
            Команда "Spark Studio" - это творческая мастерская, где воплощаются
            самые смелые идеи в веб-разработке. Мы специализируемся на создании
            уникальных и инновационных веб-сайтов, которые не только
            удовлетворяют потребности вашего бизнеса, но и вдохновляют вашу
            аудиторию.
          </p>
        </Slide>

        <Slide direction="left" delay={300}>
          <Button
            text="Заказать"
            marginTop="mt-4"
            onClick={() => console.log("Заказать")}
          />
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
                Команда "Spark Studio" - это творческая мастерская, где
                воплощаются самые смелые идеи в веб-разработке. Мы
                специализируемся на создании уникальных и инновационных
                веб-сайтов, которые не только удовлетворяют потребности вашего
                бизнеса, но и вдохновляют вашу аудиторию.
              </p>
            </Slide>
            <Slide direction="left" delay={300}>
              <Button
                text="Заказать"
                marginTop="mt-4"
                onClick={() => console.log("Заказать")}
              />
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
