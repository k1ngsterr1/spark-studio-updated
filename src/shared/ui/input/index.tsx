import React from "react";

import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  margin?: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isError, margin, ...props }, ref) => {
    const inputClassName = isError
      ? `input ${margin} input--error hoverable`
      : `input ${margin} hoverable`;
    return <input className={inputClassName} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";
