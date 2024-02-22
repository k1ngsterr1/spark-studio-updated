import { useState, useEffect } from "react";
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
        ctx!.fillStyle = "orange";
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

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.key) {
        case "ArrowUp":
          // Prevent the snake from moving in the opposite direction instantly
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const checkCollision = (head: any) => {
      const canvas = document.getElementById("game-canvas");
      for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) return true;
      }
      return (
        head.x >= canvas!.width / gridSize ||
        head.y >= canvas!.height / gridSize ||
        head.x < 0 ||
        head.y < 0
      );
    };

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = {
        x: newSnake[0].x + direction.x,
        y: newSnake[0].y + direction.y,
      };

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        const canvas = document.getElementById("game-canvas");
        // Increase score
        setRecord((prevRecord) => prevRecord + 1);
        // Generate new food position
        setFood({
          x: Math.floor(Math.random() * (canvas.width / gridSize)),
          y: Math.floor(Math.random() * (canvas.height / gridSize)),
        });
      } else {
        // Remove the tail segment if no food is eaten
        newSnake.pop();
      }

      // Check for collision
      if (checkCollision(head)) {
        // Reset game state on collision
        setSnake(initialSnakePosition);
        setDirection({ x: 0, y: -1 });
        setFood(initialFoodPosition);
        alert("Game Over");
      } else {
        setSnake(newSnake);
      }
    };

    const gameLoop = () => {
      moveSnake();
      drawGame();
      setTimeout(gameLoop, speed);
    };

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction, food, snake, speed]);

  return (
    <main className=" flex flex-col items-center justify-center">
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
