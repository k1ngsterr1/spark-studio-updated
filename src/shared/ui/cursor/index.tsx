import React, { useRef } from "react";
import { useCustomCursor } from "@shared/lib/hooks";

import "./styles.scss";

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(cursorRef);

  return <div className="cursor" ref={cursorRef} />;
};
