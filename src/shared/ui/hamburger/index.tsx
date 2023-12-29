import React from "react";
import "./styles.scss";

interface HamburgerProps {
  onClick: () => void;
  onHover?: () => void;
  offHover?: () => void;
  isOpen: boolean;
  topLineRef: React.RefObject<HTMLDivElement>;
  middleLineRef: React.RefObject<HTMLDivElement>;
  bottomLineRef: React.RefObject<HTMLDivElement>;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  onClick,
  onHover,
  offHover,
  topLineRef,
  middleLineRef,
  bottomLineRef,
}) => {
  return (
    <div
      className="hamburger flex-col items-end"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={offHover}
    >
      <div className="hamburger__line" ref={topLineRef}></div>
      <div className="hamburger__line-short" ref={middleLineRef}></div>
      <div className="hamburger__line" ref={bottomLineRef}></div>
    </div>
  );
};
