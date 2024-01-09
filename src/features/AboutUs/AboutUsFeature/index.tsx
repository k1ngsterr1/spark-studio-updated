import React from "react";
import { CountElement } from "@shared/ui/countElement";

export const AboutCompanyFeature = () => {
  return (
    <>
      <h3 className="text-center">
        Наши <span className="orange">Результаты</span>
      </h3>
      <p className="paragraph mt-4">
        {" "}
        Идейные соображения высшего порядка, а также консультация с широким
        активом позволяет оценить значение дальнейших направлений развития. Не
        следует, однако забывать, что реализация намеченных плановых заданий
        представляет собой интересный эксперимент проверки дальнейших
        направлений развития.
      </p>
      <CountElement
        end={21}
        direction={"left"}
        duration={4}
        color="orange"
        text="Реализованные проекты"
        marginTop="mt-12"
      />
      <CountElement
        end={43}
        direction={"right"}
        duration={3}
        color="orange"
        text="Реализованные проекты"
        marginTop="mt-12"
      />
      <CountElement
        end={50}
        direction={"left"}
        duration={3}
        color="orange"
        text="Реализованные проекты"
        marginTop="mt-12"
      />
    </>
  );
};
