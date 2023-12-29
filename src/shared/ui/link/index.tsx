import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  to?: string | any;
  linkName: string;
  onClick?: () => void;
}

export const NavigationLink: React.FC<LinkProps> = ({
  to,
  linkName,
  onClick,
}) => {
  return (
    <Link className="menu__link mt-8" to={to} onClick={onClick}>
      {linkName}
    </Link>
  );
};
