import { Carousel } from "@features/carousel/ui";
import { Feature } from "@shared/ui/feature";
import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/button";
import { useNavigate } from "react-router-dom";

import img1 from "@assets/images/phone_1.webp";
import img2 from "@assets/images/phone_BSHOP.webp";
import img3 from "@assets/images/phone_mobauto.webp";

export const AboutUsFeature = () => {
  const navigate = useNavigate();

  return (
    <>
      <Slide direction="left" delay={100} triggerOnce={true}>
        <h2 className="mt-20">
          Кто <span className="orange">мы</span>
        </h2>
      </Slide>
      <Slide direction="right" delay={200} triggerOnce={true}>
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
        <Slide direction="left" triggerOnce={true}>
          <Feature text="Профессионализм и опыт" />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Feature text="Креативные решения" />
        </Slide>
        <Slide direction="left" triggerOnce={true}>
          <Feature text="Индивидуальный подход" />
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <Feature text="Качество и результат" />
        </Slide>
      </div>
      <Slide
        direction="left"
        triggerOnce={true}
        className="text-center flex justify-center"
      >
        <p className="mt-12 w-[90%]">
          Наше основное стремление - помочь вашему бизнесу выделяться в
          онлайн-мире. Мы готовы создать для вас красивый, функциональный и
          пользовательски-ориентированный веб-сайт, который поможет вам привлечь
          новых клиентов, укрепить связь с существующими и расширить свои
          возможности в Интернете.
        </p>
      </Slide>
      <Button
        text="Портфолио"
        marginTop="mt-8"
        onClick={() => navigate("/portfolio")}
      />
    </>
  );
};
