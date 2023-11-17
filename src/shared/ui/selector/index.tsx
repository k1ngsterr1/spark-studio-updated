import React from "react";
import Select from "react-select";

export const Selector = () => {
  const options = [
    { value: "websites", label: "Сайты" },
    { value: "applications", label: "Приложения" },
    { value: "logotypes", label: "Логотипы" },
  ];

  // Set the default selected option to the option object where label is "Сайты"
  const defaultOption = options.find((option) => option.label === "Сайты");

  const [selectedOption, setSelectedOption] = React.useState(defaultOption);

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        className="react-select text-xl w-[300px] mt-8"
        classNamePrefix="react-select"
      />
    </>
  );
};
