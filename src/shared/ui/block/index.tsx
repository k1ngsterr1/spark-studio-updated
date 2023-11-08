import React from "react";

import "./styles.scss";

interface BlockProps {
  blockText: string;

  onClick: () => void;
}

export const Block: React.FC<BlockProps> = ({ blockText, onClick }) => {
  return (
    <div className="block flex items-center justify-center" onClick={onClick}>
      <span className="block__text">{blockText}</span>
    </div>
  );
};
