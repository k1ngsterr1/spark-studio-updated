import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { LogoFeature } from "@features/Logo/LogoFeature";
import { Footer } from "@widgets/Footer/ui";

export const LogoPage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Meta
        title="Разработка Логотипов | Spark Studio - Создание Брендов в Казахстане"
        ogTitle="Разработка Логотипов | Spark Studio - Создание Брендов в Казахстане"
        description="В Spark Studio мы создаем уникальные и запоминающиеся логотипы, которые отражают суть вашего бренда и привлекают целевую аудиторию. Откройте для себя, как качественный дизайн логотипа может трансформировать ваш бизнес в Казахстане."
        ogDescription="В Spark Studio мы создаем уникальные и запоминающиеся логотипы, которые отражают суть вашего бренда и привлекают целевую аудиторию. Откройте для себя, как качественный дизайн логотипа может трансформировать ваш бизнес в Казахстане."
      />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto flex items-center mb-16">
        <LogoFeature />
      </div>
      <Footer />
    </div>
  );
};
