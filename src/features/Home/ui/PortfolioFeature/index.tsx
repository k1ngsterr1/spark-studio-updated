import { PortfolioList } from "@features/PortfolioList";
import { PortfolioSwitch } from "@features/PortfolioSwitch";
import { PortfolioTab } from "@shared/ui/portfolioTab";
import { Selector } from "@shared/ui/selector";
import { Slide } from "react-awesome-reveal";

export const PortfolioFeature = () => {
  return (
    <>
      <section className="mobile flex flex-col items-center">
        <Slide direction="left" triggerOnce={true}>
          <h4 className="mt-20 text-center">
            Наше <span className="orange">портфолио</span>
          </h4>
        </Slide>
        <Slide direction="right" triggerOnce={true}>
          <p className="mt-4">
            Идейные соображения высшего порядка, а также консультация с широким
            активом позволяет оценить значение дальнейших направлений развития.
            Не следует, однако забывать, что реализация.
          </p>
        </Slide>
        <Selector />
        <div className="w-full flex flex-col">
          <PortfolioList />
        </div>
      </section>
      <section className="pc flex flex-col mt-40">
        <div className="flex flex-col justify-between items-start">
          <h4>
            Наше <span className="orange">портфолио</span>
          </h4>
          <div className="flex items-start justify-between">
            <p className="paragraph mt-2 w-[50%]">
              В нашем портфолио представлены уникальные и современные проекты,
              которые мы с гордостью реализовали для наших клиентов. Наши работы
              отличаются стильным дизайном, интуитивной навигацией и высокой
              функциональностью. Мы создаем веб-сайты, которые не только
              красивы, но и эффективно выполняют свои задачи - привлекают
              аудиторию, увеличивают конверсию и помогают достигать бизнес-целей
            </p>
            <PortfolioSwitch />
          </div>
        </div>
        <PortfolioList />
      </section>
    </>
  );
};
