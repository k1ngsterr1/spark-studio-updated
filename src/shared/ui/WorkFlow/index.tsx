import { Number } from "../Number";

import line from "@assets/images/assets/line.svg";

interface WorkFlowProps {
  tabName: string;
  tabNumber: string;
  tabAdditionalText: string;
  tabUnderText: string;
  numberColor: string;
  marginTop: string;
  containerMarginTop: string;
  bgImage: string;
}

export const WorkFlowTab: React.FC<WorkFlowProps> = ({
  tabName,
  tabNumber,
  tabUnderText,
  numberColor,
  marginTop,
  containerMarginTop,
  tabAdditionalText,
  bgImage,
}) => {
  return (
    <>
      <div className={`work-container ${bgImage}`}>
        <div
          className={`work-container__image-container ${containerMarginTop}`}
        >
          <img
            src={line}
            className="work-container__image-container__line"
            alt="line"
          />
          <span className="work-container__image-container__text">
            {tabUnderText}
          </span>
        </div>
        <Number number={tabNumber} marginTop={marginTop} color={numberColor} />
        <span className="work-container__text">{tabName}</span>
        <span className="work-container__additional-text">
          {tabAdditionalText}
        </span>
      </div>
    </>
  );
};
