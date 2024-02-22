import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export const SnakeFeature = () => {
  const initialSnakePosition = [{ x: 2, y: 2 }];
  const initialFoodPosition = { x: 5, y: 5 };
  const gridSize = 20;

  const [record, setRecord] = useState(0);
  const [snake, setSnake] = useState(initialSnakePosition);
  const [food, setFood] = useState(initialFoodPosition);
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [speed, setSpeed] = useState(100);

  const drawGame = () => {
    const canvasElement = document.getElementById("game-canvas");

    if (canvasElement instanceof HTMLCanvasElement) {
      const canvas = canvasElement;

      const ctx = canvas!.getContext("2d");
      canvas!.width = 400;
      canvas!.height = 400;

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      snake.forEach((segment) => {
        ctx!.fillStyle = "green";
        ctx!.fillRect(
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize,
          gridSize
        );
      });

      ctx!.fillStyle = "red";
      ctx!.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }
  };

  return (
    <main className="mobile flex flex-col items-center justify-center">
      <Slide direction="left" delay={100}>
        <h1 className="text-center mt-14">
          <span className="orange">Змейка</span>
        </h1>
      </Slide>
      <Slide direction="right" delay={150} className="mt-2">
        <span className="text-center font-[Montserrat] text-2xl">Рекорд:</span>
        <span className="text-center font-[Montserrat] text-2xl orange">
          {record}
        </span>
      </Slide>
      <canvas id="game-canvas"></canvas>
    </main>
  );
};
