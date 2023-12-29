import React from "react";

import "./styles.scss";

interface NumberProps {
  number: string;
  color: string;
  marginTop: string;
}

export const Number: React.FC<NumberProps> = ({ number, marginTop, color }) => {
  return <div className={`number ${marginTop} ${color}`}>{number}</div>;
};
