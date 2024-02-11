import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { SeoFeature } from "@features/Seo/SeoFeature";
import { Footer } from "@widgets/Footer/ui";

export const SeoPage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Meta
        title="SEO Оптимизация от Spark Studio | Повышение Видимости и Рост Вашего Бизнеса в Интернете"
        ogTitle="SEO Оптимизация от Spark Studio | Повышение Видимости и Рост Вашего Бизнеса в Интернете"
        description="Выберите Spark Studio для профессиональной SEO оптимизации вашего сайта. Мы предлагаем индивидуальный подход и передовые стратегии для улучшения позиций в поисковых системах, привлечения целевой аудитории и увеличения конверсии. Наши эксперты помогут вашему бизнесу достичь новых высот в интернете, оптимизируя контент, структуру сайта и стратегию построения ссылок. Узнайте, как мы можем трансформировать ваше онлайн-присутствие, посетив наш сайт сегодня."
        ogDescription="Выберите Spark Studio для профессиональной SEO оптимизации вашего сайта. Мы предлагаем индивидуальный подход и передовые стратегии для улучшения позиций в поисковых системах, привлечения целевой аудитории и увеличения конверсии. Наши эксперты помогут вашему бизнесу достичь новых высот в интернете, оптимизируя контент, структуру сайта и стратегию построения ссылок. Узнайте, как мы можем трансформировать ваше онлайн-присутствие, посетив наш сайт сегодня."
      />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto flex items-center mb-16">
        <SeoFeature />
      </div>
      <Footer />
    </>
  );
};
