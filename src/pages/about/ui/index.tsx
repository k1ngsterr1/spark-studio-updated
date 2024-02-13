import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@widgets/Footer/ui";
import { AboutUsFeature } from "@features/Home/ui/AboutUsFeature";
import { AboutCompanyFeature } from "@features/AboutUs/AboutUsFeature";

export const AboutPage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Meta
        title="О нас | Spark Studio - Ведущая Студия Веб-Дизайна и Разработки в Казахстане"
        ogTitle="О нас | Spark Studio - Ведущая Студия Веб-Дизайна и Разработки в Казахстане"
        description="Познакомьтесь с командой Spark Studio - вашим надежным партнером в мире веб-дизайна и разработки в Казахстане. Узнайте, как мы создаем уникальные и эффективные веб-решения, помогая бизнесу расти и достигать новых высот."
        ogDescription="Познакомьтесь с командой Spark Studio - вашим надежным партнером в мире веб-дизайна и разработки в Казахстане. Узнайте, как мы создаем уникальные и эффективные веб-решения, помогая бизнесу расти и достигать новых высот."
      />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto flex items-center mb-16">
        <AboutCompanyFeature />
        <AboutUsFeature />
      </div>
      <Footer />
    </div>
  );
};
