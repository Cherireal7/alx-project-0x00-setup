import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ styles, className = "" }) => {
  return (
    <button className={`${className}`}>
      {styles}
    </button>
  )
}

export default Button;