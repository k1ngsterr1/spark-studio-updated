import React, { useRef } from "react";

import "./styles.scss";
import { useCustomCursor } from "@shared/lib/hooks";

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(cursorRef);

  return <div className="cursor" ref={cursorRef}></div>;
};
