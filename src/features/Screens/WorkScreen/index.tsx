import { Number } from "@shared/ui/Number";

import "./styles.scss";

export const WorkScreen = () => {
  return (
    <div className="main mt-16">
      <h3 className="text-center">
        Процесс <span className="orange">Работы</span>
      </h3>
      <div className="work-container">
        <Number number="01" marginTop="mt-4" color="text-custom-orange" />
      </div>
    </div>
  );
};
