import { Carousel } from "@features/carousel/ui";
import { Feature } from "@shared/ui/feature";
import { Slide } from "react-awesome-reveal";
import { Button } from "@shared/ui/button";
import { useNavigate } from "react-router-dom";
import { carouselImages } from "@shared/lib/data/images";
import { useTranslation } from "react-i18next";

import "./styles.scss";

export const AboutUsFeature = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <section className="mobile flex flex-col items-center">
        <Slide direction="left" delay={100} triggerOnce={true}>
          <h2 className="mt-20">
            {t('aboutUsWho')} <span className="orange">{t('aboutUsWe')}</span>
          </h2>
        </Slide>
        <Slide direction="right" delay={200} triggerOnce={true}>
          <p className=" mt-4 w-80">
            Идейные соображения высшего порядка, а также консультация с широким
            активом позволяет оценить значение дальнейших направлений развития.
            Не следует, однако забывать, что реализация намеченных плановых
            заданий представляет собой интересный эксперимент проверки
            дальнейших направлений развития.
          </p>
        </Slide>
        <Carousel images={carouselImages.first.images} />
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
            пользовательски-ориентированный веб-сайт, который поможет вам
            привлечь новых клиентов, укрепить связь с существующими и расширить
            свои возможности в Интернете.
          </p>
        </Slide>
        <Button
          text="Портфолио"
          marginTop="mt-8"
          onClick={() => navigate("/portfolio")}
        />
      </section>
      <section className="pc w-full flex flex-col mt-20" id="about-pc">
        <div className="upper-content flex items-center justify-between">
          <Carousel images={carouselImages.first.images} />
          <div className="about-info">
            <Slide direction="right">
              <h2>
                {t('aboutUsWho')} <span className="orange">{t('aboutUsWe')}</span>
              </h2>
            </Slide>
            <Slide direction="right" delay={150}>
              <p className="paragraph w-[70%]">
                {t('aboutUsIntro')}
              </p>
            </Slide>
            <Slide direction="right" cascade damping={0.2}>
              <Feature text={t('aboutUsFirst')} />
              <Feature text={t('aboutUsSecond')} />
              <Feature text={t('aboutUsThird')} />
              <Feature text={t('aboutUsFourth')} />
            </Slide>
          </div>
        </div>
        <div className="lower-content flex items-center justify-between mt-10">
          <Slide direction="left">
            <p className="paragraph w-[70%]">
              {t('aboutUsLastText')}
            </p>
          </Slide>
          <Slide direction="right">
            <Button
              text={t('portfolio')}
              marginTop="mt-0"
              onClick={() => navigate("/portfolio")}
            />
          </Slide>
        </div>
      </section>
    </>
  );
};
