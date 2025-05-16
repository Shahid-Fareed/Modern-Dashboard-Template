// components/SingleSelect.tsx
"use client";
import React, { ChangeEvent } from 'react';
import Select from "react-select";

const furits = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const styles = {
  
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    // backgroundColor: '#F8F8F8',
    //color: '#000',
    borderradius: "20px",
  }),
  control:(provided, state)=> ({
    ...provided,
    backgroundColor: '#F8F8F8',
    border: "none",
    padding: "8px",
    borderRadius: 10,
  }),
};

interface Option {
  label: string;
  value: string;
}

interface SingleSelectProps {
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}



const SingleSelect: React.FC<SingleSelectProps> = ({ options, value, onChange }) => {

  
  return (
    <>
    {/* <select value={value} onChange={onChange} className="w-full bg-[#F8F8F8] outline-none">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select> */}
      <div className=''>
        <Select
          className="react-select !bg-blue"
          classNamePrefix="select"
          defaultValue={furits[1]}
          styles={styles}
          name="clear"
          options={furits}
          isClearable
          id="hh2"
        />
      </div>
    </>
  );
};

export default SingleSelect;


