import { useRef } from "react";
import "./styles.scss";
import { useProgressBar } from "@shared/lib/hooks";

export const LoaderBar = () => {
  const barRef = useRef(null);

  useProgressBar(barRef);

  return (
    <div className="bar" ref={barRef}>
      <div className="bar__indicatator"></div>
    </div>
  );
};
