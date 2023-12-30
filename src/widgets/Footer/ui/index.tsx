import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "@assets/images/spark_logo.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center justify-center mt-8">
      <FontAwesomeIcon className="footer__icon" icon={faInstagram} />
      <a className="footer__phone" href="tel:+77759932587">
        +77759932587
      </a>
      <a className="footer__email" href="mailto:cto@sparkstudio.kz">
        cto@sparkstudio.kz
      </a>
      <img src={logo} className="footer__logo mt-8 mb-8" alt="logo" />
    </footer>
  );
};
