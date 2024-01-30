import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Selector } from "@shared/ui/selector";

export const Form = () => {
  const { register, handleSubmit, errors, onSubmit } = useSendEmail();

  return (
    <>
      <form
        className="form-mobile-screen flex flex-col items-center w-full min-[1024px]:hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-mobile-screen__input mt-12">
          <Input
            {...register("full_name", { required: "Заполните ваше имя" })}
            type="text"
            placeholder="Ваше Имя"
            isError={Boolean(errors.full_name)}
          />
          {errors.full_name && (
            <span className="form__input--error mt-4">
              {errors.full_name.message}
            </span>
          )}
        </div>
        <div className="form-mobile-screen__input mt-12">
          <Input
            {...register("phone_number", {
              required: "Заполните ваш номер телефона",
            })}
            type="text"
            placeholder="Ваш Номер Телефона"
            isError={Boolean(errors.phone_number)}
          />
          {errors.phone_number && (
            <span className="form__input--error mt-4">
              {errors.phone_number.message}
            </span>
          )}
        </div>
        <div className="form-mobile-screen__input mt-2">
          <Selector />
        </div>
        <Button
          text="Отправить"
          marginTop="mt-8"
          onClick={() => console.log("Doodle")}
        />
      </form>
      <div className="flex justify-between items-start">
        <form
          className="pc form flex flex-col items-start justify-start w-full mt-20 max-[448px]:hidden"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            <div className="upper-form flex">
              <div className="inputs flex flex-col">
                <div className="upper-inputs flex justify-between items-center">
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
                </div>
                <Selector />
                <Button text="Отправить" type="submit" marginTop="mt-8" />
              </div>
              <div className="flex flex-col items-start ml-40">
                <p className="paragraph !text-xl w-[100%]">
                  В Spark Studio мы гордимся нашей работой и стремимся к
                  долгосрочному партнерству с нашими клиентами. Доверьте ваш
                  проект нам, и мы сделаем все возможное, чтобы превзойти ваши
                  ожидания.
                </p>
                <a
                  className="text-custom-orange text-xl hoverable font-[Montserrat] mt-4"
                  href="tel:+77066233117"
                >
                  +7-706-623-3117
                </a>
                <a
                  className="text-custom-orange text-xl  hoverable font-[Montserrat] mt-4"
                  href="mailto:info@sparkstudio.kz"
                >
                  info@sparkstudio.kz
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
