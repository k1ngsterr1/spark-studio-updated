import direction from "@assets/images/assets/direction.svg";
import { Form } from "@widgets/Form/ui";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const FormFeature = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mobile flex flex-col items-center" id="contacts">
        <h4 className="mt-20">
          <span className="orange">{t('form')}</span> {t('formProject')}
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
            <span className="orange">{t('form')}</span> {t('formProject')}
          </h4>
        </Slide>
        <div className="flex items-center mt-8">
          <Slide direction="left" delay={100}>
            <img src={direction} alt="direction" />
          </Slide>
          <Slide direction="right" delay={150}>
            <p className="paragraph ml-8 w-[40%]">
              {t('formParagraph')}
            </p>
          </Slide>
        </div>
        <Form />
      </div>
    </>
  );
};

export default FormFeature;
