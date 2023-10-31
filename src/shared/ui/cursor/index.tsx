import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./styles.scss";
import { useCustomCursor } from "@shared/lib/hooks";

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(cursorRef);

  return <div className="cursor" ref={cursorRef}></div>;
};
