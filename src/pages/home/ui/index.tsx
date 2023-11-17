import { Loader, Meta } from "@shared/index";
import { Menu } from "@features/menu/ui";
import { Header } from "@widgets/Header/ui";
import { MainFeature } from "@features/index";
import { AboutUsFeature } from "@features/Home/ui/AboutUsFeature";
import { ServicesFeature } from "@features/Home/ui/ServicesFeature";

export const HomePage = () => {
  return (
    <>
      <Meta
        title="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        ogTitle="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        description="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
        ogDescription="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
      />
      <Loader />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto items-center">
        <MainFeature />
        <AboutUsFeature />
        <ServicesFeature />
      </div>
    </>
  );
};
