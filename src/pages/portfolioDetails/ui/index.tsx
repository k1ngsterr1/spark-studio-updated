import { useParams } from "react-router-dom";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import { useSelector } from "react-redux";
import { Footer } from "@widgets/Footer/ui";
import { RootState } from "@shared/lib/redux/store";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { Menu } from "@features/index";

export const PortfolioDetails = () => {
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
      <div className="main flex m-auto items-center mb-16">
        <PortfolioFeature />
      </div>
      <Footer />
    </div>
  );
};
