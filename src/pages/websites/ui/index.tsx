import { Menu } from "@features/index";
import { Loader, Meta } from "@shared/index";
import { Header } from "@widgets/Header/ui";
import { WebsiteFeature } from "@features/Websites/WebsiteFeature";
import { useFetchDataWithLoader } from "@shared/lib/hooks/useFetchDataWithLoader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@widgets/Footer/ui";

export const WebsitesPage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useFetchDataWithLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Meta
        title="Веб-Разработка от Spark Studio | Создание Сайтов, Оптимизированных для Роста Вашего Бизнеса"
        ogTitle="Веб-Разработка от Spark Studio | Создание Сайтов, Оптимизированных для Роста Вашего Бизнеса"
        description="Spark Studio специализируется на создании высококачественных, индивидуально разработанных веб-сайтов, которые подчеркивают уникальность вашего бренда и способствуют его росту. Наши проекты сочетают в себе великолепный дизайн, интуитивно понятную навигацию и оптимизацию для поисковых систем, чтобы обеспечить вам лучшее онлайн-присутствие. Заходите на сайт Spark Studio, чтобы начать создание веб-сайта, который будет работать на вас."
        ogDescription="Spark Studio специализируется на создании высококачественных, индивидуально разработанных веб-сайтов, которые подчеркивают уникальность вашего бренда и способствуют его росту. Наши проекты сочетают в себе великолепный дизайн, интуитивно понятную навигацию и оптимизацию для поисковых систем, чтобы обеспечить вам лучшее онлайн-присутствие. Заходите на сайт Spark Studio, чтобы начать создание веб-сайта, который будет работать на вас."
      />
      <Header />
      <Menu />
      <div className="main mt-16 m-auto flex items-center mb-16">
        <WebsiteFeature />
      </div>
      <Footer />
    </>
  );
};
