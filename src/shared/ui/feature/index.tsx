import React from "react";

import spark from "@assets/images/assets/spark.svg";

import "./styles.scss";

interface FeatureProps {
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({ text }) => {
  return (
    <div className="feature flex flex-col items-center mt-12 min-[1024px]:flex-row mt-5">
      <img
        src={spark}
        className="feature__icon min-[1024px]:mt-2 mr-2"
        alt="icon"
      />
      <span className="feature__text mt-2">{text}</span>
    </div>
  );
};
