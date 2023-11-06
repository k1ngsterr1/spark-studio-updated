import React from "react";
import "./styles.scss";

interface HamburgerProps {
  onClick: () => void;
  topLineRef: React.RefObject<HTMLDivElement>;
  middleLineRef: React.RefObject<HTMLDivElement>;
  bottomLineRef: React.RefObject<HTMLDivElement>;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  onClick,
  topLineRef,
  middleLineRef,
  bottomLineRef,
}) => {
  return (
    <div className="hamburger flex-col items-center" onClick={onClick}>
      <div className="hamburger__line" ref={topLineRef}></div>
      <div className="hamburger__line" ref={middleLineRef}></div>
      <div className="hamburger__line" ref={bottomLineRef}></div>
    </div>
  );
};
