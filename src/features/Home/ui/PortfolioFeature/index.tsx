import { PortfolioList } from "@features/PortfolioList";
import { PortfolioSwitch } from "@features/PortfolioSwitch";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const PortfolioFeature = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="mobile flex flex-col items-center">
        <Slide direction="left" triggerOnce={true}>
          <h4 className="mt-20 text-center">
            Наше <span className="orange">портфолио</span>
          </h4>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="mt-4 mb-8">
            Идейные соображения высшего порядка, а также консультация с широким
            активом позволяет оценить значение дальнейших направлений развития.
            Не следует, однако забывать, что реализация.
          </p>
        </Slide>
        <PortfolioSwitch />
        <div className="w-full flex flex-col">
          <PortfolioList />
        </div>
      </section>
      <section className="pc flex flex-col mt-40" id="portfolio-pc">
        <div className="flex flex-col justify-between items-start">
          <Slide direction="left">
            <h4>
              {t('portfolioOur')} <span className="orange">{t('portfolioSecond')}</span>
            </h4>
          </Slide>
          <div className="flex items-start justify-between">
            <Slide direction="left" delay={150}>
              <p className="paragraph mt-2 w-[50%]">
                {t('portfolioParagraph')}
              </p>
            </Slide>
            <PortfolioSwitch />
          </div>
        </div>
        <PortfolioList />
      </section>
    </>
  );
};
