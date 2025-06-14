import React from "react";
import { ButtonProps } from "../interfaces";

const variants: ButtonProps[] = [
  { title: "Small Rounded-sm", styles: "text-xs rounded-sm" },
  { title: "Small Rounded-md", styles: "text-xs rounded-md" },
  { title: "Small Rounded-full", styles: "text-xs rounded-full" },

  { title: "Medium Rounded-sm", styles: "text-sm rounded-sm" },
  { title: "Medium Rounded-md", styles: "text-sm rounded-md" },
  { title: "Medium Rounded-full", styles: "text-sm rounded-full" },

  { title: "Large Rounded-sm", styles: "text-base rounded-sm" },
  { title: "Large Rounded-md", styles: "text-base rounded-md" },
  { title: "Large Rounded-full", styles: "text-base rounded-full" },
];

const ButtonVariants: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {variants.map((btn, idx) => (
        <button
          key={idx}
          className={`px-4 py-1.5 bg-blue-900 text-white font-medium shadow-sm hover:bg-blue-950 hover:shadow-md transition-all duration-200 ease-in-out ${btn.styles}`}
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonVariants;