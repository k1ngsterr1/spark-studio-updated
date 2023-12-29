import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { WebsiteFeature } from "@features/Websites/WebsiteFeature";

export const WebsitesPage = () => {
  return (
    <div>
      <Meta
        title="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        ogTitle="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        description="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
        ogDescription="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
      />
      <Loader />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto flex items-center">
        <WebsiteFeature />
      </div>
    </div>
  );
};
