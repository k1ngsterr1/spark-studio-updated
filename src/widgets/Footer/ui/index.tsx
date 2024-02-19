import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "@assets/images/assets/spark_logo.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center justify-center mt-8">
      <FontAwesomeIcon
        className="footer__icon"
        icon={faInstagram}
        onClick={() => window.open("https://www.instagram.com/sparkstudio.kz/")}
      />
      <a className="footer__phone" href="tel:+77066233117">
        +7-706-623-31-17
      </a>
      <a className="footer__email" href="mailto:cto@sparkstudio.kz">
        info@sparkstudio.kz
      </a>
      <img src={logo} className="footer__logo mt-8 mb-8" alt="logo" />
    </footer>
  );
};
