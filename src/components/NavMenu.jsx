import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavMenu = ({ isOpen, onClose, onCartOpen }) => {
  const { cartItems } = useCart();

  // Отключаем прокрутку при открытии меню и восстанавливаем при закрытии
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Оверлей с обработчиком клика для закрытия меню
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* Внутренний контейнер меню. Останавливаем всплытие клика */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-lg p-60"
      >
        {/* Крестик для закрытия меню */}
        <button
          onClick={onClose}
          className="absolute text-xl font-bold text-gray-600 top-8 right-20 hover:text-gray-800"
          aria-label="Закрыть меню"
        >
          ×
        </button>

        {/* Список пунктов меню */}
        <ul className="flex flex-col items-center space-y-32">
          <li>
            <Link
              to="/"
              onClick={onClose}
              className="text-lg font-semibold transition-colors hover:text-primary-500"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              onClick={onClose}
              className="text-lg font-semibold transition-colors hover:text-primary-500"
            >
              Все курсы
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                onClose();
                onCartOpen();
              }}
              className="relative text-lg font-semibold transition-colors hover:text-primary-500"
            >
              Корзина
              {cartItems.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-16">
                  {cartItems.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
