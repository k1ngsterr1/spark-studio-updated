import { ServiceTab } from "@shared/ui/serviceTab";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const ServicesFeature = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="mt-20">
        Наши <span className="orange">услуги</span>
      </h3>
      <p className="mt-4">
        В <span className="orange">Spark Studio</span> мы предлагаем широкий
        спектр услуг, чтобы помочь вам достичь вашего полного потенциала в
        онлайн-мире. Наша команда профессионалов обладает опытом и навыками в
        различных областях веб-разработки, и мы готовы воплотить ваши идеи в
        реальность.
      </p>
      <div className="w-full flex flex-col items-center">
        <Slide className="w-full" direction="left">
          <ServiceTab
            text="САЙТЫ"
            onClick={() => navigate("/services/websites")}
            number="01"
            delayIcon={100}
            delayText={200}
            delayNumber={350}
          />
        </Slide>
        <Slide className="w-full" direction="right">
          <ServiceTab
            text="ПРИЛОЖЕНИЯ"
            onClick={() => navigate("/services/applications")}
            number="02"
            delayIcon={200}
            delayText={300}
            delayNumber={450}
          />
        </Slide>
        <Slide className="w-full" direction="left">
          <ServiceTab
            text="ЛОГОТИПЫ"
            onClick={() => navigate("/services/logotypes")}
            number="03"
            delayIcon={300}
            delayText={400}
            delayNumber={550}
          />
        </Slide>
        <Slide className="w-full" direction="right">
          <ServiceTab
            text="SEO"
            onClick={() => navigate("/services/SEO")}
            number="04"
            delayIcon={400}
            delayText={500}
            delayNumber={650}
          />
        </Slide>
      </div>
    </>
  );
};
