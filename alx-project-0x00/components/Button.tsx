import React from "react";
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  const baseStyles =
    "px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md";

  return (
    <button className={`${baseStyles} ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
