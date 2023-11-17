import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

interface ServiceTabProps {
  text: string;
  number: string;
  delayIcon: number;
  delayText: number;
  delayNumber: number;
  onClick: () => void;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({
  text,
  number,
  delayIcon,
  delayText,
  delayNumber,
  onClick,
}) => {
  return (
    <div
      className="service-tab flex justify-between items-center mt-8"
      onClick={onClick}
    >
      <Slide delay={delayIcon} triggerOnce={true}>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="service-tab__icon orange"
        />
      </Slide>
      <Slide direction="right" delay={delayText} triggerOnce={true}>
        <span className="service-tab__text">{text}</span>
      </Slide>
      <Slide direction="right" delay={delayNumber} triggerOnce={true}>
        <span className="service-tab__number">{number}</span>
      </Slide>
    </div>
  );
};
