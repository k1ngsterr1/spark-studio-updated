import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { changeOption } from "./model";

export const Selector = () => {
  const options = [
    { value: "websites", label: "Сайты" },
    { value: "applications", label: "Приложения" },
    { value: "logotypes", label: "Логотипы" },
  ];

  const selectedValue = useSelector(
    (state: any) => state.selector.selectedOption
  );
  const dispatch = useDispatch();

  const defaultOption = options.find(
    (option) => option.value === selectedValue
  );

  const handleChange = (option: any) => {
    dispatch(changeOption(option.value));
  };

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
      <Select
        defaultValue={defaultOption}
        onChange={handleChange}
        options={options}
        placeholder="Выберите услугу"
        menuPortalTarget={document.body}
        styles={style}
        menuPosition="fixed"
        required
        className="react-select text-xl w-[300px] mt-8 hoverable min-[1024px]:w-[100%]"
        classNamePrefix="react-select hoverable"
      />
    </>
  );
};
