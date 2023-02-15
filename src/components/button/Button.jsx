import React from "react";
import "./button.scss";

const Button = (text, link, className) => {
  const btnClass = `btn ${className}`;

  return (
    <a className="btn__wrapper">
      <button className={btnClass}>{text}</button>
    </a>
  );
};

export default Button;
