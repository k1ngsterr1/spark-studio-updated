import { useNavigate } from "react-router-dom";
import { GameTab } from "@entities/GameTab/ui";
import { Slide } from "react-awesome-reveal";

import spark_snake from "@assets/games/spark_snake.webp";

export const GamesFeature = () => {
  const navigate = useNavigate();

  return (
    <section className="mobile flex flex-col items-center">
      <Slide direction="left" triggerOnce={true}>
        <h3 className="mt-0">
          Наши <span className="orange">игры</span>
        </h3>
        <GameTab
          name="Snake Game"
          preview={spark_snake}
          onClick={() => navigate("/games/snake")}
          margin="mt-4"
        />
      </Slide>
    </section>
  );
};
