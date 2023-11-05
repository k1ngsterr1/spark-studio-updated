import { Link } from "react-router-dom";

import { Hamburger } from "@shared/ui/hamburger";
import Logo from "@assets/images/spark_logo.svg";

export const Navigation = () => {
  return (
    <nav className="navigation items-center justify-between">
      <div className="navigation__mob items-center justify-between">
        <img src={Logo} className="navigation__logo" alt="logo" />
        <div className="navigation__wrapper items-center justify-between">
          <Hamburger onclick={() => console.log("a")} />
        </div>
      </div>
    </nav>
  );
};
