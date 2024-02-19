import { Button } from "@shared/ui/button";
import "./styles.scss";

export const Popup = () => {
  return (
    <div className="overlay">
      <div className="flex flex-col items-center justify-center popup">
        <h1 className="heading">Спасибо!</h1>
        <p className="paragraph mt-2">
          Наши менеджеры в скором времени с вами свяжутся
        </p>
        <Button text="Закрыть" marginTop="mt-4" />
      </div>
    </div>
  );
};
