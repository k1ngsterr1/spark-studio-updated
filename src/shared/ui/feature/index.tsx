import React from "react";

import spark from "@assets/images/spark.svg";

import "./styles.scss";

interface FeatureProps {
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({ text }) => {
  return (
    <div className="feature flex flex-col items-center mt-12">
      <img src={spark} className="feature__icon" alt="icon" />
      <span className="feature__text mt-2">{text}</span>
    </div>
  );
};
