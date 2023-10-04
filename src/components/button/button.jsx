import React from "react";
import "./button.style.scss";
const Button = ({ clickFunctionality, customClass, children }) => {
  return (
    <button
      onClick={(e) => {
        clickFunctionality(e);
      }}
      className={customClass}
    >
      {children}
    </button>
  );
};

export default Button;
