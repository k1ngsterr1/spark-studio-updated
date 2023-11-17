import { Block } from "@shared/index";
// import { useAppSelector } from "@shared/lib/redux/hooks";
import { Button } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export const MainFeature = () => {
  const navigate = useNavigate();

  return (
    <>
      <Slide duration={500} direction="up" triggerOnce={true}>
        <h1 className="text-center">
          СТУДИЯ ВЕБ <br />
          <span className="orange">ДИЗАЙНА</span>
        </h1>
      </Slide>
      <div className="main__squares flex flex-col mt-8">
        <div className="main__squares--row">
          <Slide duration={1000} direction="left" triggerOnce={true}>
            <Block
              onClick={() => navigate("/services/websites")}
              blockText="WEB"
            />
          </Slide>
          <Slide duration={1000} direction="right" triggerOnce={true}>
            <Block onClick={() => navigate("/services/seo")} blockText="SEO" />
          </Slide>
        </div>

        <div className="main__squares--row mt-6">
          <Slide duration={1000} direction="left" triggerOnce={true}>
            <Block
              onClick={() => navigate("/services/applications")}
              blockText="APP"
            />
          </Slide>
          <Slide duration={1000} direction="right" triggerOnce={true}>
            <Block
              onClick={() => navigate("/services/logotypes")}
              blockText="LOGO"
            />
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
