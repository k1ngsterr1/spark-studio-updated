import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@widgets/Footer/ui";
import { ServicesFeature } from "@features/Home/ui/ServicesFeature";
import { SnakeFeature } from "@features/SnakeFeature";

export const SnakePage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {" "}
      <Meta
        title="Snake Game | Spark Studio"
        ogTitle="Snake Game | "
        description="Откройте полный спектр услуг Spark Studio в Казахстане, включая веб-дизайн, разработку сайтов, создание логотипов и брендинг. Мы предлагаем индивидуальные решения, которые помогут вашему бизнесу выделиться и процветать в цифровом мире."
        ogDescription="Откройте полный спектр услуг Spark Studio в Казахстане, включая веб-дизайн, разработку сайтов, создание логотипов и брендинг. Мы предлагаем индивидуальные решения, которые помогут вашему бизнесу выделиться и процветать в цифровом мире."
      />
      <Header />
      <Menu />
      <div className="main m-auto flex items-center mb-16">
        <SnakeFeature />
      </div>
    </div>
  );
};
