import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "./styles.scss";

interface ButtonProps {
  text: string;
  type?: string | any;
  marginTop: string;
  onClick?: () => void;
  to?: any;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, marginTop }) => {
  return (
    <button className={`button ${marginTop} hoverable`} onClick={onClick}>
      {text}
    </button>
  );
};

export const ScrollButton: React.FC<ButtonProps> = ({
  text,
  marginTop,
  to,
}) => {
  return (
    <ScrollLink
      className={`button ${marginTop} hoverable flex items-center justify-center`}
      to={to}
      smooth
    >
      {text}
    </ScrollLink>
  );
};
