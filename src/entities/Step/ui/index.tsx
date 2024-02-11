import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Number } from "@shared/ui/Number";

import "./styles.scss";
import { Fade } from "react-awesome-reveal";

interface StepProps {
  stepName: string;
  stepNumber: string;
  days: string;
  numberColor: string;
  marginTop: string;
}

export const Step: React.FC<StepProps> = ({
  stepName,
  stepNumber,
  days,
  numberColor,
  marginTop,
}) => {
  const [isActive, setActive] = useState(false);

  const handleActivate = () => {
    setActive(!isActive);
  };

  return (
    <div className="step flex flex-col items-center">
      <button className="step__button hoverable" onClick={handleActivate}>
        <FontAwesomeIcon
          icon={isActive ? faMinus : faPlus}
          className="step__button__icon hoverable"
        />
      </button>
      {isActive ? (
        <>
          <Fade direction="up" className="flex flex-col items-center">
            <Number
              number={stepNumber}
              marginTop={marginTop}
              color={numberColor}
            />
            <span className="step__days">{days}</span>
            <span className="step__title mt-2">{stepName}</span>
          </Fade>
        </>
      ) : null}
    </div>
  );
};
