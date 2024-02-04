import { CountElement } from "@shared/ui/countElement";

import about from "@assets/additional/about.svg";

export const AboutCompanyFeature = () => {
  return (
    <>
      <section className="mobile flex flex-col items-center">
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
      </section>
      <section className="pc w-full flex justify-between items-start mt-20">
        <div className="flex flex-col items-start">
          <h3 className="text-left w-[60%]">
            Наши <span className="orange">Результаты</span>
          </h3>
          <p className="paragraph mt-4 w-[60%]">
            Идейные соображения высшего порядка, а также консультация с широким
            активом позволяет оценить значение дальнейших направлений развития.
            Не следует, однако забывать, что реализация намеченных плановых
            заданий представляет собой интересный эксперимент проверки
            дальнейших направлений развития.
          </p>
        </div>
        <img src={about} alt="about" className="w-1/3" />
      </section>
      <section className="pc w-full flex justify-between items-start mt-20">
        <div className="w-full flex justify-between items-center">
          <span className="flex flex-col items-center justify-center">
            <CountElement
              end={21}
              direction={"left"}
              duration={4}
              color="orange"
              text="Реализованные проекты"
              marginTop="mt-12"
            />
          </span>
          <span className="flex flex-col">
            <CountElement
              end={21}
              direction={"left"}
              duration={4}
              color="orange"
              text="Реализованные проекты"
              marginTop="mt-12"
            />
          </span>
          <span className="flex flex-col">
            <CountElement
              end={21}
              direction={"left"}
              duration={4}
              color="orange"
              text="Реализованные проекты"
              marginTop="mt-12"
            />
          </span>
          <span className="flex flex-col">
            <CountElement
              end={21}
              direction={"left"}
              duration={4}
              color="orange"
              text="Реализованные проекты"
              marginTop="mt-12"
            />
          </span>
        </div>
      </section>
    </>
  );
};
