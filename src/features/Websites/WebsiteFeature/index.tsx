import { PriceScreen } from "@features/Screens/PriceScreen";
import { Button } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";

export const WebsiteFeature = () => {
  return (
    <>
      <Slide direction="left" delay={100} triggerOnce={true}>
        <h1 className="text-center">
          Разработка <span className="orange">Веб-Сайтов</span>{" "}
        </h1>
      </Slide>
      <Slide direction="right" delay={200} triggerOnce={true}>
        <p className="mt-8 w-[100%]">
          Команда "Spark Studio" - это творческая мастерская, где воплощаются
          самые смелые идеи в веб-разработке. Мы специализируемся на создании
          уникальных и инновационных веб-сайтов, которые не только удовлетворяют
          потребности вашего бизнеса, но и вдохновляют вашу аудиторию.
        </p>
      </Slide>
      <Slide direction="left" delay={300} triggerOnce={true}>
        <Button
          text="Заказать"
          marginTop="mt-4"
          onClick={() => console.log("Заказать")}
        />
      </Slide>
      <PriceScreen />
    </>
  );
};
