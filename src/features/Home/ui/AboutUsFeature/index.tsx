import { Carousel } from "@features/carousel/ui";

import img1 from "@assets/images/phone_1.webp";
import img2 from "@assets/images/phone_BSHOP.webp";
import img3 from "@assets/images/phone_mobauto.webp";
import { Feature } from "@shared/ui/feature";
import { Slide } from "react-awesome-reveal";

export const AboutUsFeature = () => {
  return (
    <>
      <Slide direction="left">
        <h2 className="mt-20">
          Кто <span className="orange">мы</span>
        </h2>
      </Slide>
      <Slide direction="right">
        <p className=" mt-4 w-80">
          Идейные соображения высшего порядка, а также консультация с широким
          активом позволяет оценить значение дальнейших направлений развития. Не
          следует, однако забывать, что реализация намеченных плановых заданий
          представляет собой интересный эксперимент проверки дальнейших
          направлений развития.
        </p>
      </Slide>
      <Carousel imageFirst={img1} imageSecond={img2} imageThird={img3} />
      <div className="mt-12 flex flex-col items-center">
        <Feature text="Профессионализм и опыт" />
        <Feature text="Креативные решения" />
        <Feature text="Индивидуальный подход" />
        <Feature text="Качество и результат" />
      </div>
    </>
  );
};
