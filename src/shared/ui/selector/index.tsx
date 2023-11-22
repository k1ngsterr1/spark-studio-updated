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

  return (
    <>
      <Select
        defaultValue={defaultOption}
        onChange={handleChange}
        options={options}
        placeholder="Выберите услугу"
        menuPortalTarget={document.body}
        menuPosition="fixed"
        required
        className="react-select text-xl w-[300px] mt-8"
        classNamePrefix="react-select"
      />
    </>
  );
};
