import { Carousel } from "@features/carousel/ui";

import img1 from "@assets/images/phone_1.webp";
import img2 from "@assets/images/phone_BSHOP.webp";
import img3 from "@assets/images/phone_mobauto.webp";

export const AboutUsFeature = () => {
  return (
    <>
      <h2 className="mt-12">
        Кто <span className="orange">мы</span>
      </h2>
      <p className=" mt-4 w-80">
        Идейные соображения высшего порядка, а также консультация с широким
        активом позволяет оценить значение дальнейших направлений развития. Не
        следует, однако забывать, что реализация намеченных плановых заданий
        представляет собой интересный эксперимент проверки дальнейших
        направлений развития.
      </p>
      <Carousel imageFirst={img1} imageSecond={img2} imageThird={img3} />
    </>
  );
};
