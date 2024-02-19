import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { openWindow } from "../redux/popupSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import emailjs from "@emailjs/browser";

export interface SendFormData {
  full_name: string;
  phone_number: string;
  service: string;
}

export function useSendEmail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SendFormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    const formData = data as unknown as Record<string, unknown>;

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_EMAIL_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          dispatch(openWindow());
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isValid,
    control,
  };
}
