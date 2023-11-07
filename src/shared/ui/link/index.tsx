import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
  linkName: string;
}

export const NavigationLink: React.FC<LinkProps> = ({ to, linkName }) => {
  return (
    <Link className="link mt-4" to={to}>
      {linkName}
    </Link>
  );
};