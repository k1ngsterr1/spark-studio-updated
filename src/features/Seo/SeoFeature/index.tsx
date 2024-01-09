import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/button";
import { PriceTab } from "@entities/PriceTab/ui";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import FormFeature from "@features/Home/ui/FormFeature";

export const SeoFeature = () => {
  return (
    <>
      <Slide direction="left" delay={100} triggerOnce={true}>
        <h1 className="text-center">
          SEO <span className="orange">Оптимизация</span>
        </h1>
      </Slide>
      <Breadcrumbs
        sx={{
          marginTop: "clamp(8px,3.73824vw,32px)",
        }}
      >
        <Link to="/home">Главная</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/services/seo" className="orange">
          SEO Оптимизация
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
      <Slide direction="left" className="mt-20" delay={400} triggerOnce>
        <h2 className="text-center">
          Тарифные <span className="orange">Планы</span>{" "}
        </h2>
      </Slide>
      <Slide direction="right" delay={500} triggerOnce>
        <p className="mt-4">
          Выберите подходящий под вашу задачу тарифный план либо воспользуйтесь
          планом “Exclusive” для нестандартных и кастомных решений
        </p>
      </Slide>
      <PriceTab
        marginTop="mt-8"
        tabNaming="Базовый"
        tabDescription="Корпоративный сайт"
        price="550 000 ₸"
        properties={[
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
        ]}
      />
      <PriceTab
        marginTop="mt-8"
        tabNaming="Базовый"
        tabDescription="Корпоративный сайт"
        price="550 000 ₸"
        properties={[
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
        ]}
      />
      <PriceTab
        marginTop="mt-8"
        tabNaming="Базовый"
        tabDescription="Корпоративный сайт"
        price="550 000 ₸"
        properties={[
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна моб. версии",
            propertyGraph: "Value 1",
          },
          {
            propertyName: "Макеты дизайна ПК версии",
            propertyGraph: "Value 1",
          },
        ]}
      />
      <FormFeature />
    </>
  );
};
