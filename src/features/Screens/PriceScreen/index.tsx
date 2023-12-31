import { Slide } from "react-awesome-reveal";
import { PriceTab } from "@entities/PriceTab/ui";

export const PriceScreen = () => {
  return (
    <>
      <div className="main mt-20">
        <Slide direction="left" delay={400} triggerOnce>
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
        <Slide direction="up" delay={200} triggerOnce>
          <PriceTab
            marginTop="mt-8"
            tabNaming="Базовый"
            tabDescription="Лендинг, сайт - визитка"
            price="300 000 ₸"
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
        </Slide>
        <Slide direction="up" delay={300} triggerOnce>
          <PriceTab
            marginTop="mt-8"
            tabNaming="Бизнес"
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
        </Slide>
        <Slide direction="up" delay={400} triggerOnce>
          <PriceTab
            marginTop="mt-8"
            tabNaming="Магазин"
            tabDescription="Готовый интернет магазин"
            price="1 000 000 ₸"
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
        </Slide>
      </div>
    </>
  );
};
