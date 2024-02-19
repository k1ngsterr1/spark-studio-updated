import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Selector } from "@shared/ui/selector";
import { Slide } from "react-awesome-reveal";

export const Form = () => {
  const { register, handleSubmit, control, errors, onSubmit, setValue } =
    useSendEmail();

  return (
    <>
      <form
        className="form-mobile-screen flex flex-col items-center w-full min-[1024px]:hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-mobile-screen__input mt-12 flex justify-center flex-col items-center">
          <Input
            {...register("full_name", { required: "Заполните ваше имя" })}
            type="text"
            placeholder="Ваше Имя"
            isError={Boolean(errors.full_name)}
          />
          {errors.full_name && (
            <span className="form__input--error mt-4 !text-red-600">
              {errors.full_name.message}
            </span>
          )}
        </div>
        <div className="form-mobile-screen__input mt-12 flex justify-center flex-col items-center">
          <Input
            {...register("phone_number", {
              required: "Заполните ваш номер телефона",
            })}
            type="text"
            placeholder="Ваш Номер Телефона"
            isError={Boolean(errors.phone_number)}
          />
          {errors.phone_number && (
            <span className="form__input--error mt-4 !text-red-600">
              {errors.phone_number.message}
            </span>
          )}
        </div>
        <div className="form-mobile-screen__input mt-2">
          <Selector control={control} setValue={setValue} />
        </div>
        <Button text="Отправить" marginTop="mt-8" />
      </form>
      <form
        className="flex justify-between items-start mb-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="pc form flex flex-col items-start justify-start w-full mt-20 max-[448px]:hidden">
          <div className="flex flex-col ">
            <div className="upper-form flex">
              <div className="inputs flex flex-col">
                <div className="upper-inputs flex justify-between items-center">
                  <Slide direction="left">
                    <div className="flex flex-col">
                      <Input
                        {...register("full_name", {
                          required: "Заполните ваше имя",
                        })}
                        type="text"
                        placeholder="Ваше Имя"
                        isError={Boolean(errors.full_name)}
                      />
                      {errors.full_name && (
                        <span className="form__input--error mt-4 !text-red-500">
                          {errors.full_name.message}
                        </span>
                      )}{" "}
                    </div>
                    <div className="flex flex-col">
                      <Input
                        {...register("phone_number", {
                          required: "Заполните ваш номер телефона",
                        })}
                        type="text"
                        margin="ml-8"
                        placeholder="Ваш Номер Телефона"
                        isError={Boolean(errors.phone_number)}
                      />
                      {errors.phone_number && (
                        <span className="form__input--error mt-4 !text-red-500">
                          {errors.phone_number.message}
                        </span>
                      )}
                    </div>
                  </Slide>
                </div>
                <Slide direction="left">
                  <Selector control={control} setValue={setValue} />
                </Slide>
                <Slide direction="left">
                  <Button text="Отправить" marginTop="mt-8" />
                </Slide>
              </div>
              <div className="flex flex-col items-start ml-40">
                <Slide direction="right">
                  <p className="paragraph !text-base w-[100%]">
                    В Spark Studio мы гордимся нашей работой и стремимся к
                    долгосрочному партнерству с нашими клиентами. Доверьте ваш
                    проект нам, и мы сделаем все возможное, чтобы превзойти ваши
                    ожидания.
                  </p>
                </Slide>
                <FontAwesomeIcon
                  className="footer__icon"
                  icon={faInstagram}
                  onClick={() =>
                    window.open("https://www.instagram.com/sparkstudio.kz/")
                  }
                />
                <Slide direction="right" className="mt-4">
                  <a
                    className="text-custom-orange text-xl hoverable font-[Montserrat] mt-4"
                    href="tel:+77066233117"
                  >
                    +7-706-623-3117
                  </a>
                </Slide>
                <Slide direction="right" className="mt-4">
                  <a
                    className="text-custom-orange text-xl  hoverable font-[Montserrat] mt-4"
                    href="mailto:info@sparkstudio.kz"
                  >
                    info@sparkstudio.kz
                  </a>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
