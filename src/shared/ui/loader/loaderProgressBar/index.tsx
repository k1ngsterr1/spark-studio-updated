import { useRef } from "react";
import { useProgressBar } from "@shared/lib/hooks";

import "./styles.scss";

export const LoaderBar = () => {
  const barRef = useRef(null);

  useProgressBar(barRef);

  return (
    <div className="bar flex justify-start items-center mt-8">
      <div className="bar__indicator bg-custom-orange" ref={barRef}></div>
    </div>
  );
};
