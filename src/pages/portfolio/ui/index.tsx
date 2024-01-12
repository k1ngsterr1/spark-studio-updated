import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import { useSelector } from "react-redux";
import { Footer } from "@widgets/Footer/ui";
import { RootState } from "@shared/lib/redux/store";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { Menu } from "@features/index";
import { AdvancedPortfolioFeature } from "@features/AdvancedPortfolio/AdvancedPortfolioFeature";

export const Portfolio = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Meta
        title="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        ogTitle="Spark Studio - Студия Веб-Дизайна и Разработки в Казахстане"
        description="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
        ogDescription="Spark Studio предлагает инновационный веб-дизайн и разработку. Создаем современные, адаптивные сайты, которые помогут выделить ваш бизнес в интернет-пространстве и привлечь больше клиентов."
      />
      <Header />
      <Menu />
      <div className="w-full flex flex-col m-auto items-center mb-16">
        <AdvancedPortfolioFeature />
      </div>
      <Footer />
    </>
  );
};
