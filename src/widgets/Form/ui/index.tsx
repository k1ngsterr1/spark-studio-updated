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
    </>
  );
};
