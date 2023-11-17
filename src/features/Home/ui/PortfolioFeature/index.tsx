import { Selector } from "@shared/ui/selector";
import { Slide } from "react-awesome-reveal";

export const PortfolioFeature = () => {
  return (
    <>
      <Slide direction="left" triggerOnce={true}>
        <h4 className="mt-20 text-center">
          Наше <span className="orange">портфолио</span>
        </h4>
      </Slide>
      <Slide direction="right" triggerOnce={true}>
        <p className="mt-4">
          Идейные соображения высшего порядка, а также консультация с широким
          активом позволяет оценить значение дальнейших направлений развития. Не
          следует, однако забывать, что реализация.
        </p>
      </Slide>
      <Selector />
    </>
  );
};
