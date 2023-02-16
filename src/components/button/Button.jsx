import React from "react";
import "./button.scss";

const Button = ({ btnLink, btnText, className }) => {
  const btnClass = `btn ${className}`;

  return (
    <a className="btn__wrapper" href={btnLink}>
      <button className={btnClass}>{btnText}</button>
    </a>
  );
};

export default Button;
