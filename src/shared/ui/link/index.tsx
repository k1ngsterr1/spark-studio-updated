import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  to?: string | any;
  linkName: string;
  className: string;
  onClick?: () => void;
}

export const NavigationLink: React.FC<LinkProps> = ({
  to,
  linkName,
  className,
  onClick,
}) => {
  return (
    <Link className={`${className} mt-8 hoverable`} to={to} onClick={onClick}>
      {linkName}
    </Link>
  );
};
