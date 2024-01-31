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
        <Slide direction="up" delay={200}>
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
        <Slide direction="up" delay={300}>
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
        <Slide direction="up" delay={400}>
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
          <Slide direction="up" delay={200}>
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
          <Slide direction="up" delay={300}>
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
          <Slide direction="up" delay={400}>
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
          <Slide direction="up" delay={400}>
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
      </div>
    </>
  );
};
