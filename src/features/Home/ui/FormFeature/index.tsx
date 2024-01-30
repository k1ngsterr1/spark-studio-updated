import direction from "@assets/images/assets/direction.svg";
import { Form } from "@widgets/Form/ui";
import { Slide } from "react-awesome-reveal";

const FormFeature = () => {
  return (
    <>
      <div className="mobile flex flex-col items-center">
        <h4 className="mt-20">
          <span className="orange">Есть</span> проект?
        </h4>
        <p className="mt-4 w-80">
          Вы готовы начать работу над своим уникальным веб-проектом? Мы с
          нетерпением ждем возможности помочь вам достичь ваших целей и привести
          вашу идею к жизни.
        </p>
        <img
          className="mt-12 arrow-icon"
          src={direction}
          alt="direction-arrow"
        />
        <Form />
      </div>
      <div className="pc flex flex-col mt-40" id="contacts-pc">
        <Slide direction="left">
          <h4>
            Есть <span className="orange">проект?</span>
          </h4>
        </Slide>
        <div className="flex items-center mt-8">
          <Slide direction="left" delay={100}>
            <img src={direction} alt="direction" />
          </Slide>
          <Slide direction="right" delay={150}>
            <p className="paragraph ml-8 w-[40%]">
              Вы готовы начать работу над своим уникальным веб-проектом? Мы с
              нетерпением ждем возможности помочь вам достичь ваших целей и
              привести вашу идею к жизни.
            </p>
          </Slide>
        </div>
        <Form />
      </div>
    </>
  );
};

export default FormFeature;
