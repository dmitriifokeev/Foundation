import React from "react";

const CartPopup = ({ cartItems, onClose, onCheckout }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Затемняющий фон */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      {/* Контейнер попапа */}
      <div className="relative z-10 w-full max-w-lg p-6 bg-white rounded-lg">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-2 right-2 hover:text-gray-800"
        >
          ×
        </button>
        <h2 className="mb-4 text-2xl font-bold">Корзина</h2>
        {cartItems && cartItems.length > 0 ? (
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 border-b">
                <div className="flex justify-between">
                  <span>{item.title}</span>
                  <span>{item.price}₽</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-4">Корзина пуста</p>
        )}
        <button onClick={onCheckout} className="w-full px-4 py-2 text-white rounded bg-primary-500">
          Перейти к оплате
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
