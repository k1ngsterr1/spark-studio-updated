import { useRef } from "react";
import { useLoaderAnimation } from "@shared/lib/hooks";
import { LoaderBar } from "./loaderProgressBar";

import "./styles.scss";

// Assets
import logo from "@assets/images/assets/spark_logo.svg";

export const Loader = () => {
  const loaderWrapperRef = useRef(null);

  useLoaderAnimation(loaderWrapperRef);

  return (
    <div
      className="loader__wrapper flex justify-center items-center"
      ref={loaderWrapperRef}
    >
      <div className="loader flex flex-col justify-center items-center">
        <img src={logo} className="loader__logo" alt="logo" />
        <LoaderBar />
      </div>
    </div>
  );
};
