import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-3 py-2 m-3 text-white font-bold ${styles}`}>
      {title}
    </button>
  );
};

export default Button;