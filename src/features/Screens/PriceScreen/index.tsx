import { PriceTab } from "@entities/PriceTab/ui";

export const PriceScreen = () => {
  return (
    <>
      <div className="main mt-20">
        <h2 className="text-center">
          Тарифные <span className="orange">Планы</span>{" "}
        </h2>
        <p className="mt-4">
          Выберите подходящий под вашу задачу тарифный план либо воспользуйтесь
          планом “Exclusive” для нестандартных и кастомных решений
        </p>
        <PriceTab
          marginTop="mt-8"
          tabNaming="Базовый"
          tabDescription="Лендинг, сайт - визитка"
          price="250 000 ₸"
          properties={[
            {
              propertyName: "Макеты дизайна ПК версии",
              propertyGraph: "Value 1",
            },
            {
              propertyName: "Макеты дизайна моб. версии",
              propertyGraph: "Value 1",
            },
          ]}
        />
      </div>
    </>
  );
};
