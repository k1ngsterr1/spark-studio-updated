import { Slide } from "react-awesome-reveal";
import { PriceTab } from "@entities/PriceTab/ui";

export const PriceScreen = () => {
  return (
    <>
      <div className="mobile main mt-20">
        <Slide direction="left" delay={400}>
          <h2 className="text-center">
            Тарифные <span className="orange">Планы</span>{" "}
          </h2>
        </Slide>
        <Slide direction="right" delay={500}>
          <p className="mt-4">
            Выберите подходящий под вашу задачу тарифный план либо
            воспользуйтесь планом “Exclusive” для нестандартных и кастомных
            решений
          </p>
        </Slide>
        <PriceTab
          marginTop="mt-8"
          tabNaming="Базовый"
          tabDescription="SEO оптимизация вашего кода"
          price="Индивидуально"
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
          tabDescription="SEO оптимизация вашего кода"
          price="Индивидуально"
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
          tabDescription="SEO оптимизация вашего кода"
          price="Индивидуально"
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
      </div>
      <div className="pc flex flex-col mt-40">
        <div className="flex flex-col items-start">
          <Slide direction="left" delay={400}>
            <h2 className="text-center">
              Тарифные <span className="orange">Планы</span>{" "}
            </h2>
          </Slide>
          <Slide direction="right" delay={500}>
            <p className="mt-4 w-[60%]">
              Выберите подходящий под вашу задачу тарифный план либо
              воспользуйтесь планом “Exclusive” для нестандартных и кастомных
              решений
            </p>
          </Slide>
        </div>
        <div className="flex justify-between items-start">
          <Slide cascade direction="right" damping={0.3}>
            <PriceTab
              marginTop="mt-8"
              tabNaming="Базовый"
              tabDescription="SEO оптимизация вашего кода"
              price="Индивидуально"
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
              tabDescription="SEO оптимизация вашего кода"
              price="Индивидуально"
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
              tabDescription="SEO оптимизация вашего кода"
              price="Индивидуально"
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
    </>
  );
};
