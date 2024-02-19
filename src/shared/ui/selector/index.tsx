import Select from "react-select";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

interface SelectorProps {
  control: any;
}

export const Selector: React.FC<SelectorProps> = ({ control }) => {
  const options = [
    { value: "websites", label: "Сайты" },
    { value: "applications", label: "Приложения" },
    { value: "logotypes", label: "Логотипы" },
  ];

  const selectedValue = useSelector(
    (state: any) => state.selector.selectedOption
  );

  const defaultOption = options.find(
    (option) => option.value === selectedValue
  );

  const style = {
    control: (base: any) => ({
      ...base,
      border: 0,
      borderBottom: "2px solid black",
      boxShadow: "none",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "hsla(24, 100%, 50%, 1)" : "white",
    }),
  };

  return (
    <>
      <Controller
        control={control}
        name="service"
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={defaultOption}
            options={options}
            placeholder="Выберите услугу"
            menuPortalTarget={document.body}
            styles={style}
            name="service"
            menuPosition="fixed"
            required
            className="react-select text-xl w-[300px] mt-8 hoverable min-[1024px]:w-[100%]"
            classNamePrefix="react-select hoverable"
          />
        )}
      />
    </>
  );
};
