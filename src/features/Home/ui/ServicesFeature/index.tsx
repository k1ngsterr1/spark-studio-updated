import { ServiceTab } from "@shared/ui/serviceTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ServicesFeature = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <section className="mobile flex flex-col items-center">
        <Slide direction="left" triggerOnce={true}>
          <h3 className="mt-20">
            {t('serviceOur')} <span className="orange">{t('service')} </span>
          </h3>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="mt-4">
            В <span className="orange">Spark Studio</span> мы предлагаем широкий
            спектр услуг, чтобы помочь вам достичь вашего полного потенциала в
            онлайн-мире. Наша команда профессионалов обладает опытом и навыками
            в различных областях веб-разработки, и мы готовы воплотить ваши идеи
            в реальность.
          </p>
        </Slide>
        <div className="w-full flex flex-col items-center">
          <Slide className="w-full" direction="left" triggerOnce={true}>
            <ServiceTab
              text="САЙТЫ"
              onClick={() => navigate("/services/websites")}
              number="01"
              delayIcon={100}
              delayText={200}
              delayNumber={350}
            />
          </Slide>
          <Slide className="w-full" direction="right" triggerOnce={true}>
            <ServiceTab
              text="ПРИЛОЖЕНИЯ"
              onClick={() => navigate("/services/applications")}
              number="02"
              delayIcon={200}
              delayText={300}
              delayNumber={450}
            />
          </Slide>
          <Slide className="w-full" direction="left" triggerOnce={true}>
            <ServiceTab
              text="ЛОГОТИПЫ"
              onClick={() => navigate("/services/logo")}
              number="03"
              delayIcon={300}
              delayText={400}
              delayNumber={550}
            />
          </Slide>
          <Slide className="w-full" direction="right" triggerOnce={true}>
            <ServiceTab
              text="SEO"
              onClick={() => navigate("/services/SEO")}
              number="04"
              delayIcon={400}
              delayText={500}
              delayNumber={650}
            />
          </Slide>
        </div>
      </section>
      <section className="pc w-full flex flex-col mt-20" id="services-pc">
        <div className="w-full flex flex-col justify-start">
          <Slide direction="left">
            <h3>
              {t('serviceOur')} <span className="orange">{t('service')} </span>
            </h3>
          </Slide>
          <Slide direction="right" delay={100}>
            <p className="paragraph w-[45%]">
              {t('serviceParagraph')}
            </p>
          </Slide>
        </div>
        <div className="w-full flex flex-col">
          <ServiceTab
            text={t('serviceFirst')}
            onClick={() => navigate("/services/websites")}
            number="01"
            delayIcon={100}
            delayText={200}
            delayNumber={350}
          />
          <ServiceTab
            text={t('serviceSecond')}
            onClick={() => navigate("/services/applications")}
            number="02"
            delayIcon={100}
            delayText={200}
            delayNumber={350}
          />
          <ServiceTab
            text={t('serviceThird')}
            onClick={() => navigate("/services/logo")}
            number="03"
            delayIcon={100}
            delayText={200}
            delayNumber={350}
          />
          <ServiceTab
            text={t('serviceFourth')}
            onClick={() => navigate("/services/seo")}
            number="04"
            delayIcon={100}
            delayText={200}
            delayNumber={350}
          />
        </div>
      </section>
    </>
  );
};
