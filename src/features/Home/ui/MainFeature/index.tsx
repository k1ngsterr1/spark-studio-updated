import { Block } from "@shared/index";
import { Button, ScrollButton } from "@shared/ui/button";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.scss";

export const MainFeature = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="mobile w-full flex flex-col items-center min-[1024px]:hidden">
        <Slide duration={500} direction="up" triggerOnce={true}>
          <h1 className="text-center">
            СТУДИЯ ВЕБ <br />
            <span className="orange">РАЗРАБОТКИ</span>
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
              <Block
                onClick={() => navigate("/services/seo")}
                blockText="SEO"
              />
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
                onClick={() => navigate("/services/logo")}
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
      </div>
      <div className="pc flex max-[448px]:hidden">
        <main className="flex flex-col items-start">
          <Slide direction="left">
            <h1 className="w-[100%]">
              {t('mainDesign')} <br /><strong className="orange">{t('mainStudio')}</strong>
            </h1>
          </Slide>
          <Slide direction="left" delay={150}>
            <p className="paragraph mt-6 w-[65%]">
              {t('mainIntro')}
            </p>
          </Slide>
          <Slide direction="left" delay={200}>
            <ScrollButton text={t('orderButton')} to="contacts-pc" marginTop="mt-8" />
          </Slide>
        </main>
        <div className="flex w-[68%] flex-col">
          <div className="w-full flex justify-between mr-2">
            <Slide direction="left">
              <Block
                blockText="WEB"
                onClick={() => navigate("/services/websites")}
              />
            </Slide>
            <Slide direction="right">
              <Block blockText="UI" onClick={() => navigate("/services/seo")} />
            </Slide>
          </div>
          <div className="w-full flex justify-between mt-2">
            <Slide direction="left">
              <Block
                blockText="MOB"
                onClick={() => navigate("/services/app")}
              />
            </Slide>
            <Slide direction="right">
              <Block
                blockText="LOGO"
                onClick={() => navigate("/services/logo")}
              />
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};
