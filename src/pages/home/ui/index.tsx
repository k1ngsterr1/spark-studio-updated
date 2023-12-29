import { Loader, Meta } from "@shared/index";
import { Menu } from "@features/menu/ui";
import { Header } from "@widgets/Header/ui";
import { MainFeature } from "@features/index";
import { AboutUsFeature } from "@features/Home/ui/AboutUsFeature";
import { ServicesFeature } from "@features/Home/ui/ServicesFeature";
import { PortfolioFeature } from "@features/Home/ui/PortfolioFeature";
import FormFeature from "@features/Home/ui/FormFeature";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";

export const HomePage = () => {
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
      <div className="main mt-16 m-auto flex items-center">
        <MainFeature />
        <AboutUsFeature />
        <ServicesFeature />
        <PortfolioFeature />
        <FormFeature />
      </div>
    </>
  );
};
