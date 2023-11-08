import React from "react";

import "./styles.scss";

interface ButtonProps {
  text: string;
  marginTop: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, marginTop }) => {
  return (
    <button className={`button ${marginTop}`} onClick={onClick}>
      {text}
    </button>
  );
};
