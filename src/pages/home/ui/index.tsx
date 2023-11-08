import { Block, Loader } from "@shared/index";
import { useAppSelector } from "@shared/lib/redux/hooks";
import { Menu } from "@features/menu/ui";
import { Header } from "@widgets/Header/ui";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";
import { Button } from "@shared/ui/button";

export const HomePage = () => {
  return (
    <>
      <Loader />
      <Header />
      <Menu />
      <main className="main mt-16 m-auto items-center">
        <Slide duration={500} direction="down">
          <h1 className="text-center">
            СТУДИЯ ВЕБ <br />
            <span className="orange">ДИЗАЙНА</span>
          </h1>
        </Slide>
        <div className="main__squares flex flex-col mt-8">
          <div className="main__squares--row">
            <Block onClick={() => console.log("Block")} blockText="WEB" />
            <Block onClick={() => console.log("Block")} blockText="UI" />
          </div>
          <div className="main__squares--row mt-6">
            <Block onClick={() => console.log("Block")} blockText="MOB" />
            <Block onClick={() => console.log("Block")} blockText="UX" />
          </div>
        </div>
        <Button
          marginTop="mt-8"
          text="Заказать"
          onClick={() => console.log("Click")}
        />
      </main>
    </>
  );
};
