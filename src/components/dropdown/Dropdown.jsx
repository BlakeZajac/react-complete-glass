import React, { useState } from "react";

const Dropdown = (options, placeholder, onChange) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__selected" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {isOpen && (
        <ul className="dropdown__list">
          {options.map((option) => {
            <li
              className="dropdown__list__item"
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
