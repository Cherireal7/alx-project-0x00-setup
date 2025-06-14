import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, className = "" }) => {
  return (
    <button className={`${className}`}>
      {title}
    </button>
  )
}

export default Button;