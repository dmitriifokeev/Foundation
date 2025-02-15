import PropTypes from "prop-types";
import classNames from "classnames";
import { ButtonArrowIcon } from "./Svgs";
import iconArrowBtnUpRight from "../assets/img/buttonsSvg/iconArrowBtnUpRight.svg";

const Button = ({
  variant = "main", // Значение по умолчанию
  isActive = false, // Значение по умолчанию
  iconed = false, // Значение по умолчанию
  children,
  onClick = () => {}, // Значение по умолчанию
}) => {
  const buttonClasses = classNames(
    "rounded-md px-[16px] py-3 text-center font-medium font-main flex items-center gap-2 transition-all duration-200 h6 lg:h5 lg:font-medium", // Переходы
    {
      // Основные варианты
      "bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-neutral-50 ":
        variant === "main" && !isActive,
      "bg-primary-100 hover:bg-primary-200 active:bg-primary-300 text-primary-600 ":
        variant === "secondary",
      "bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-700 active:text-neutral-50 text-neutral-700 lg:text-neutral-600":
        variant === "neutral" && !isActive,
      "bg-neutral-700 text-neutral-50": isActive && variant === "neutral", // Активное состояние для neutral

      // Иконка
      "pl-6": iconed,
    }
  );

  // Логика цвета для иконки
  const iconColor = {
    main: "fill-white", // Белый цвет для Main
    secondary: "fill-primary-600", // Цвет для Secondary
    neutral: isActive ? "fill-white" : "fill-neutral-700 hover:fill-neutral-900 active:fill-white",
  }[variant];

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
      {iconed && (
        <span className="transition-all duration-200">
          <img src={iconArrowBtnUpRight} alt="" />
        </span>
      )}
    </button>
  );
};

// PropTypes для валидации props
Button.propTypes = {
  variant: PropTypes.oneOf(["main", "secondary", "neutral"]),
  isActive: PropTypes.bool, // Добавлено для управления активным состоянием
  iconed: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
