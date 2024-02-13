import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { useSelector } from "react-redux";
import { Footer } from "@widgets/Footer/ui";
import { RootState } from "@shared/lib/redux/store";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { Menu } from "@features/index";
import { AdvancedPortfolioFeature } from "@features/AdvancedPortfolio/AdvancedPortfolioFeature";
import FormFeature from "@features/Home/ui/FormFeature";

export const Portfolio = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Meta
        title="Портфолио | Spark Studio - Лучшие Проекты Веб-Дизайна и Разработки в Казахстане"
        ogTitle="Портфолио | Spark Studio - Лучшие Проекты Веб-Дизайна и Разработки в Казахстане"
        description="Ознакомьтесь с портфолио Spark Studio, где представлены наши выдающиеся проекты в области веб-дизайна и разработки. Убедитесь в высоком качестве наших работ и найдите вдохновение для вашего следующего проекта в Казахстане."
        ogDescription="Ознакомьтесь с портфолио Spark Studio, где представлены наши выдающиеся проекты в области веб-дизайна и разработки. Убедитесь в высоком качестве наших работ и найдите вдохновение для вашего следующего проекта в Казахстане."
      />
      <Header />
      <Menu />
      <div className="w-full flex flex-col m-auto items-center mb-16">
        <AdvancedPortfolioFeature />
      </div>
      <div className="main mt-16 m-auto flex items-center">
        <FormFeature />
      </div>
      <Footer />
    </>
  );
};
