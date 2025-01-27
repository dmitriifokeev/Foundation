import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const RoundButton = React.forwardRef(
  (
    {
      onClick = () => {},
      icon, // Иконка (SVG-компонент или элемент)
      variant = "default", // Вариант оформления: "default", "primary", "secondary"
      size = "md", // Размер кнопки: "sm", "md", "lg"
      className = "", // Дополнительные классы
      ...props // Остальные пропсы
    },
    ref // Реф, переданный через React.forwardRef
  ) => {
    // Классы для кнопки
    const buttonClasses = classNames(
      "rounded-full flex items-center justify-center shadow-md transition-all duration-200",
      {
        "bg-teal-100 hover:bg-teal-200 active:bg-teal-300 text-gray-700": variant === "default",
        "bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white": variant === "primary",
        "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700": variant === "secondary",
      },
      {
        "w-[32px] h-[32px]": size === "sm", // Маленький размер
        "w-[44px] h-[44px]": size === "md", // Средний размер
      },
      className // Пользовательские классы
    );

    return (
      <button ref={ref} className={buttonClasses} onClick={onClick} {...props}>
        {icon && <span className="flex items-center justify-center">{icon}</span>}
      </button>
    );
  }
);

// Добавляем displayName для отладки
RoundButton.displayName = "RoundButton";

// PropTypes для проверки переданных пропсов
RoundButton.propTypes = {
  onClick: PropTypes.func, // Функция-обработчик клика
  icon: PropTypes.node.isRequired, // Иконка (обязательно)
  variant: PropTypes.oneOf(["default", "primary", "secondary"]), // Вариант оформления
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Размер кнопки
  className: PropTypes.string, // Дополнительные классы
};

export default RoundButton;
