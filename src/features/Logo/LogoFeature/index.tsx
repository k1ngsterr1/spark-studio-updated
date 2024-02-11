import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/button";
import { PriceTab } from "@entities/PriceTab/ui";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import FormFeature from "@features/Home/ui/FormFeature";

import logo from "@assets/images/assets/logo_illustration.svg";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import { Meta } from "@shared/index";

export const LogoFeature = () => {
  return (
    <>
      <Meta
        title="Профессиональная Разработка Логотипов - Spark Studio | Создание Уникальных Брендов"
        ogTitle="Профессиональная Разработка Логотипов - Spark Studio | Создание Уникальных Брендов"
        description="Откройте для себя силу уникального брендинга с профессиональной разработкой логотипов от Spark Studio. Наша команда экспертов создаст идеальный логотип, который выделит ваш бизнес и усилит вашу маркетинговую стратегию. Заходите на сайт, чтобы начать трансформацию вашего бренда уже сегодня!"
        ogDescription="Откройте для себя силу уникального брендинга с профессиональной разработкой логотипов от Spark Studio. Наша команда экспертов создаст идеальный логотип, который выделит ваш бизнес и усилит вашу маркетинговую стратегию. Заходите на сайт, чтобы начать трансформацию вашего бренда уже сегодня!"
      />
      <main className="mobile flex flex-col items-center justify-center">
        <Slide direction="left" delay={100}>
          <h1 className="text-center">
            Разработка <span className="orange">Логотипов</span>
          </h1>
        </Slide>
        <Breadcrumbs
          sx={{
            marginTop: "clamp(8px,3.73824vw,32px)",
          }}
        >
          <Link to="/home">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/services/logo" className="orange">
            Разработка Логотипов
          </Link>
        </Breadcrumbs>
        <Slide direction="right" delay={200}>
          <p className="mt-8 w-[100%]">
            В поисках уникального и запоминающегося логотипа для вашего бизнеса?
            Spark Studio предлагает профессиональные услуги по разработке
            логотипов, которые помогут вашему бренду выделиться и оставить
            неизгладимое впечатление.
          </p>
        </Slide>
        <Slide direction="left" delay={300}>
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
            Выберите подходящий под вашу задачу тарифный план либо
            воспользуйтесь планом “Exclusive” для нестандартных и кастомных
            решений
          </p>
        </Slide>
        <PriceTab
          marginTop="mt-8"
          tabNaming="Базовый"
          tabDescription="Лендинг, сайт - визитка"
          price="300 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "1",
            },
            {
              propertyName: "Дизайн внутренних страниц десктоп версии",
              propertyGraph: "1",
            },
            {
              propertyName: "Дизайн внутренних страниц мобильной версии",
              propertyGraph: "1",
            },
            {
              propertyName: "Адаптивная версия",
              propertyGraph: "Имеется",
            },
            {
              propertyName: "Наполнение страниц контентом",
              propertyGraph: "10",
            },
            {
              propertyName: "Дополнительный язык",
              propertyGraph: "+50%",
            },
            {
              propertyName: "Срок разработки",
              propertyGraph: "15 дней",
            },
          ]}
        />
        <PriceTab
          marginTop="mt-8"
          tabNaming="Бизнес"
          tabDescription="Корпоративный сайт"
          price="1 078 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "2",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "2",
            },
            {
              propertyName: "Дизайн внутренних страниц десктоп версии",
              propertyGraph: "2",
            },
            {
              propertyName: "Дизайн внутренних страниц мобильной версии",
              propertyGraph: "2",
            },
            {
              propertyName: "Адаптивная версия",
              propertyGraph: "Имеется",
            },
            {
              propertyName: "Наполнение страниц контентом",
              propertyGraph: "20",
            },
            {
              propertyName: "Дополнительный язык",
              propertyGraph: "+50%",
            },
            {
              propertyName: "Срок разработки",
              propertyGraph: "20 дней",
            },
          ]}
        />
        <PriceTab
          marginTop="mt-8"
          tabNaming="Магазин"
          tabDescription="Готовый интернет магазин"
          price="1 526 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "2",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "2",
            },
            {
              propertyName: "Дизайн внутренних страниц десктоп версии",
              propertyGraph: "3",
            },
            {
              propertyName: "Дизайн внутренних страниц мобильной версии",
              propertyGraph: "3",
            },
            {
              propertyName: "Адаптивная версия",
              propertyGraph: "Имеется",
            },
            {
              propertyName: "Наполнение страниц контентом",
              propertyGraph: "10",
            },
            {
              propertyName: "Дополнительный язык",
              propertyGraph: "+50%",
            },
            {
              propertyName: "Срок разработки",
              propertyGraph: "30 дней",
            },
          ]}
        />
        <FormFeature />
      </main>
      <main className="pc flex flex-col">
        <div className="flex  items-center justify-between">
          <div className="flex flex-col items-start">
            <Slide direction="left" delay={100}>
              <h1 className="text-left w-[50%]">
                Разработка <span className="orange">Логотипов</span>
              </h1>
            </Slide>
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
              <Link
                to="/services/logo"
                className="orange hoverable transition-all hover:text-custom-orange"
              >
                Разработка Логотипов
              </Link>
            </Breadcrumbs>
            <Slide direction="right" delay={200}>
              <p className="mt-8 w-[55%]">
                В поисках уникального и запоминающегося логотипа для вашего
                бизнеса? Spark Studio предлагает профессиональные услуги по
                разработке логотипов, которые помогут вашему бренду выделиться и
                оставить неизгладимое впечатление.
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
            <img src={logo} alt="logo" className="logo" />
          </Slide>
        </div>
        <div className="flex flex-col items-start">
          {" "}
          <Slide direction="left" className="mt-20" delay={400} triggerOnce>
            <h2 className="text-center">
              Тарифные <span className="orange">Планы</span>{" "}
            </h2>
          </Slide>
          <Slide direction="right" delay={500} triggerOnce>
            <p className="mt-4 w-[60%]">
              Выберите подходящий под вашу задачу тарифный план либо
              воспользуйтесь планом “Exclusive” для нестандартных и кастомных
              решений
            </p>
          </Slide>
          <div className="w-full flex items-start justify-between mt-10">
            <Slide direction="right" cascade damping={0.3}>
              <PriceTab
                marginTop="mt-8"
                tabNaming="Базовый"
                tabDescription="Лендинг, сайт - визитка"
                price="300 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "1",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "1",
                  },
                  {
                    propertyName: "Дизайн внутренних страниц десктоп версии",
                    propertyGraph: "1",
                  },
                  {
                    propertyName: "Дизайн внутренних страниц мобильной версии",
                    propertyGraph: "1",
                  },
                  {
                    propertyName: "Адаптивная версия",
                    propertyGraph: "Имеется",
                  },
                  {
                    propertyName: "Наполнение страниц контентом",
                    propertyGraph: "10",
                  },
                  {
                    propertyName: "Дополнительный язык",
                    propertyGraph: "+50%",
                  },
                  {
                    propertyName: "Срок разработки",
                    propertyGraph: "15 дней",
                  },
                ]}
              />
              <PriceTab
                marginTop="mt-8"
                tabNaming="Бизнес"
                tabDescription="Корпоративный сайт"
                price="1 078 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "2",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "2",
                  },
                  {
                    propertyName: "Дизайн внутренних страниц десктоп версии",
                    propertyGraph: "2",
                  },
                  {
                    propertyName: "Дизайн внутренних страниц мобильной версии",
                    propertyGraph: "2",
                  },
                  {
                    propertyName: "Адаптивная версия",
                    propertyGraph: "Имеется",
                  },
                  {
                    propertyName: "Наполнение страниц контентом",
                    propertyGraph: "20",
                  },
                  {
                    propertyName: "Дополнительный язык",
                    propertyGraph: "+50%",
                  },
                  {
                    propertyName: "Срок разработки",
                    propertyGraph: "20 дней",
                  },
                ]}
              />
              <PriceTab
                marginTop="mt-8"
                tabNaming="Магазин"
                tabDescription="Готовый интернет магазин"
                price="1 526 000 ₸"
                properties={[
                  {
                    propertyName: "Макеты дизайна ПК версии",
                    propertyGraph: "2",
                  },
                  {
                    propertyName: "Макеты дизайна моб. версии",
                    propertyGraph: "2",
                  },
                  {
                    propertyName: "Дизайн внутренних страниц десктоп версии",
                    propertyGraph: "3",
                  },
                  {
                    propertyName: "Дизайн внутренних страниц мобильной версии",
                    propertyGraph: "3",
                  },
                  {
                    propertyName: "Адаптивная версия",
                    propertyGraph: "Имеется",
                  },
                  {
                    propertyName: "Наполнение страниц контентом",
                    propertyGraph: "10",
                  },
                  {
                    propertyName: "Дополнительный язык",
                    propertyGraph: "+50%",
                  },
                  {
                    propertyName: "Срок разработки",
                    propertyGraph: "30 дней",
                  },
                ]}
              />
            </Slide>
          </div>
        </div>
        <PortfolioFeature />
        <FormFeature />
      </main>
    </>
  );
};
