import { Block } from "@shared/index";
import { useAppSelector } from "@shared/lib/redux/hooks";
import { Button } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export const MainFeature = () => {
  return (
    <>
      <Slide duration={500} direction="up">
        <h1 className="text-center">
          СТУДИЯ ВЕБ <br />
          <span className="orange">ДИЗАЙНА</span>
        </h1>
      </Slide>
      <div className="main__squares flex flex-col mt-8">
        <div className="main__squares--row">
          <Slide duration={1000} direction="left">
            <Block onClick={() => console.log("Block")} blockText="WEB" />
          </Slide>
          <Slide duration={1000} direction="right">
            <Block onClick={() => console.log("Block")} blockText="UI" />
          </Slide>
        </div>

        <div className="main__squares--row mt-6">
          <Slide duration={1000} direction="left">
            <Block onClick={() => console.log("Block")} blockText="MOB" />
          </Slide>
          <Slide duration={1000} direction="right">
            <Block onClick={() => console.log("Block")} blockText="UX" />
          </Slide>
        </div>
      </div>
      <Button
        marginTop="mt-8"
        text="Заказать"
        onClick={() => console.log("Click")}
      />
    </>
  );
};
