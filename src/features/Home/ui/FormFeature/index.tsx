import direction from "@assets/images/assets/direction.svg";
import { Form } from "@widgets/Form/ui";

const FormFeature = () => {
  return (
    <>
      <h4 className="mt-20">
        <span className="orange">Есть</span> проект?
      </h4>
      <p className="mt-4 w-80">
        Вы готовы начать работу над своим уникальным веб-проектом? Мы с
        нетерпением ждем возможности помочь вам достичь ваших целей и привести
        вашу идею к жизни.
      </p>
      <img className="mt-12 arrow-icon" src={direction} alt="direction-arrow" />
      <Form />
    </>
  );
};

export default FormFeature;
