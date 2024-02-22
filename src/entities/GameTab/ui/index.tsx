import React from "react";

import "./styles.scss";

interface GameTabData {
  name: string;
  onClick: () => void;
  preview: string;
  margin: string;
}

export const GameTab: React.FC<GameTabData> = ({
  name,
  onClick,
  preview,
  margin,
}) => {
  return (
    <div className={`game_tab ${margin}`} onClick={onClick}>
      <img src={preview} alt={name} className="game_tab__preview" />
      <span className="game_tab__text">{name}</span>
    </div>
  );
};
