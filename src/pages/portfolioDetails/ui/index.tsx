import { useParams } from "react-router-dom";
import { Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { Footer } from "@widgets/Footer/ui";
import { Menu } from "@features/index";
import { PortfolioInfo } from "@shared/lib/data/portfolioContent";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";
import { Button } from "@shared/ui/button";
import { DevicesGallery } from "@features/DevicesGallery";

export const PortfolioDetails: React.FC<PortfolioInfo> = (props) => {
  const { portfolioCase } = useParams();

  return (
    <div>
      <Meta
        title="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        ogTitle="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        description="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
        ogDescription="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
      />
      <Header />
      <Menu />
      <main
        className={`w-full !min-h-[80vh] flex flex-col items-center mb-16 mt-10 ${props.backgroundImage}`}
      >
        {/* Main */}
        <section className="flex flex-col items-center mt-20">
          <Slide direction="left">
            <h1 className="text-white">{props.title}</h1>
          </Slide>
          <Slide direction="right">
            <span className="text-md text-white font-[Montserrat]">
              {props.subTitle}
            </span>
          </Slide>
          <Slide direction="left" className="flex justify-center">
            <p className="paragraph !text-white text-center w-[50%] mt-4">
              {props.description}
            </p>
          </Slide>
          <img
            src={props.mockUpImage}
            className="mockup_image"
            alt={props.title}
          />
        </section>
        {/* Task */}
      </main>
      <section className="w-[86.6%] m-auto flex items-start justify-between mt-96">
        <h2 className="text-6xl text-custom-black">
          Задачи <span className="orange">проекта</span>{" "}
        </h2>
        <div className="inline-flex flex-col items-start w-[40%]">
          <p className="paragraph w-[100%]">{props.taskDescription}</p>
          <button
            className="project_btn hoverable"
            onClick={() => window.open(`${props.linkProject}`)}
          >
            Ссылка на проект
          </button>
        </div>
      </section>
      <section className="w-[86.6%] m-auto flex items-start justify-between mt-40">
        <img
          src={props.phoneMockup}
          className="phone_mockup"
          alt={props.title}
        />
        <div className="flex flex-col items-start w-[50%]">
          <h3 className="text-6xl text-custom-black">
            Адаптация <span className="orange">проекта</span>{" "}
          </h3>
          <p className="paragraph mt-4 w-[100%]">
            {props.adaptiveDescription[0].text}
            <br />
            <br />
            {props.adaptiveDescription[1].text}
            <br />
            <br />
            {props.adaptiveDescription[2].text}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
