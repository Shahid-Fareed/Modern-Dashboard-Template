import React from "react";
import Select, { StylesConfig } from "react-select";

interface Attribute {
  value: string;
  label: string;
}

interface MyComponentProps {
  placeholder: String;
  options: Attribute[];
  selectedValues: Attribute[];
  onSelectChange: (selectedOptions: Attribute[]) => void;
}

const customStyles: StylesConfig<Attribute, true> = {
  control: (provided, {isFocused}) => ({
    ...provided,
    border: "0px", // Customize the border
    padding: "8px 0",
    borderRadius: "10px", // Customize the border radius
    backgroundColor: "#f8f8f8",
    borderColor: isFocused ? "#fff" : "#6CA7FF",
  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isFocused ? "#6CA7FF" : null,
    color: isFocused ? "#fff" : "#2a2a2a",
    cursor: isDisabled ? "not-allowed" : "default",
    ":active": {
      ...provided[":active"],
      backgroundColor: !isDisabled ? (isSelected ? "#6CA7FF" : "#6CA7FF") : undefined,
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#6CA7FF", // Customize the background color of selected values
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#2a2a2a", // Customize the color of selected values
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#2a2a2a", // Customize the color of the remove icon in selected values
    ":hover": {
      backgroundColor: "#9EC5FF", // Customize the background color on hover
      color: "#555", // Customize the color on hover
    },
  }),
};

const MyComponent: React.FC<MyComponentProps> = ({
  options,
  selectedValues,
  onSelectChange,
  placeholder,
}) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      value={selectedValues}
      styles={customStyles}
      isMulti
      onChange={(selectedOptions) => onSelectChange(selectedOptions)}
    />
  );
};

export default MyComponent;
