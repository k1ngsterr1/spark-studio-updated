import React from "react";
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
          tabNaming="Базовый"
          tabDescription="Лендинг"
          price="250 000₸"
        />
      </div>
    </>
  );
};
