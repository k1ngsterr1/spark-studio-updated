import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@widgets/Footer/ui";
import { ApplicationFeature } from "@features/Applications/ApplicationFeature";
import { GamesFeature } from "@features/Screens/Games";

export const GamesPage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Meta
        title="Разработка Приложений | Spark Studio - Инновационные Решения в Казахстане"
        ogTitle="Разработка Приложений | Spark Studio - Инновационные Решения в Казахстане"
        description="От идеи до запуска - Spark Studio предлагает полный спектр услуг по разработке мобильных и веб-приложений в Казахстане. Создаем приложения, которые вдохновляют пользователей и приводят ваш бизнес к успеху."
        ogDescription="От идеи до запуска - Spark Studio предлагает полный спектр услуг по разработке мобильных и веб-приложений в Казахстане. Создаем приложения, которые вдохновляют пользователей и приводят ваш бизнес к успеху."
      />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto flex items-center mb-16">
        <GamesFeature />
      </div>
      <Footer />
    </>
  );
};
