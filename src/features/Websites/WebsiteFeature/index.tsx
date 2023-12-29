import { Button } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";
import { PriceScreen } from "@features/Screens/PriceScreen";
import { WorkScreen } from "@features/Screens/WorkScreen";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

import FormFeature from "@features/Home/ui/FormFeature";

export const WebsiteFeature = () => {
  return (
    <>
      <Slide direction="left" delay={100} triggerOnce={true}>
        <h1 className="text-center">
          Разработка <span className="orange">Веб-Сайтов</span>{" "}
        </h1>
      </Slide>
      <Breadcrumbs
        sx={{
          marginTop: "16px",
        }}
      >
        <Link to="/home">Главная</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/services/websites" className="orange">
          Разработка Веб-Сайтов
        </Link>
      </Breadcrumbs>
      <Slide direction="right" delay={200} triggerOnce={true}>
        <p className="mt-8 w-[100%]">
          Команда "Spark Studio" - это творческая мастерская, где воплощаются
          самые смелые идеи в веб-разработке. Мы специализируемся на создании
          уникальных и инновационных веб-сайтов, которые не только удовлетворяют
          потребности вашего бизнеса, но и вдохновляют вашу аудиторию.
        </p>
      </Slide>

      <Slide direction="left" delay={300} triggerOnce={true}>
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
    </>
  );
};
