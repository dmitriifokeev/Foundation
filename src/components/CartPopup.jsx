import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const CartPopup = ({ onClose, onCheckout }) => {
  const { cartItems, removeFromCart, discountApplied, setDiscountApplied } = useCart();
  const [coupon, setCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Состояния для email, телефона и галочек
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [offerConsent, setOfferConsent] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Отключаем прокрутку при открытии попапа
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Вычисляем сумму всех курсов, приводя цену к числу
  const totalPrice = cartItems.reduce((acc, item) => {
    const rawPrice = item.details?.price ?? "0";
    const cleaned = rawPrice.toString().replace(/\D+/g, "");
    const numericPrice = Number(cleaned) || 0;
    return acc + numericPrice;
  }, 0);

  // Итоговая сумма с учетом скидки 30%
  const finalPrice = discountApplied ? Math.round(totalPrice * 0.7) : totalPrice;

  const handleCheckout = async () => {
    // Собираете cartItems, finalPrice, email, phone
    const body = { cartItems, totalPrice: finalPrice, email, phone };

    const response = await fetch("https://foundation-education.com/pay/payment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error("Ошибка при инициации платежа");

    const data = await response.json();
    if (data.paymentUrl) {
      window.location.href = data.paymentUrl;
    } else {
      alert("Не удалось получить ссылку на оплату");
    }
  };

  const handleApplyCoupon = () => {
    setErrorMessage("");
    if (coupon.trim().toUpperCase() === "SALE") {
      setDiscountApplied(true);
      setCoupon("");
    } else {
      setErrorMessage("Промокод неверный");
    }
  };

  // Валидация email и телефона (телефон должен состоять только из цифр)
  const isEmailValid = email.trim() !== "";
  const isPhoneValid = phone.trim() !== "" && /^\d+$/.test(phone);
  const formValid = isEmailValid && isPhoneValid && consent && offerConsent;

  const handlePhoneBlur = () => {
    if (phone && !isPhoneValid) {
      setPhoneError("Введите корректный номер (только цифры, например, 1234567890)");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Затемняющий фон */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Контейнер попапа */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-lg p-6 overflow-y-auto max-h-[80vh]">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute text-xl text-gray-600 top-[8px] right-20 hover:text-gray-800 font-semibold"
        >
          ×
        </button>

        <h2 className="mb-20 text-2xl font-bold">Корзина</h2>
        {cartItems && cartItems.length > 0 ? (
          <>
            <ul className="mb-40">
              {cartItems.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-center justify-between py-[8px] border-b mb-16"
                >
                  <span className="mr-20">{item.hero.title}</span>
                  <div className="relative flex items-center gap-20 pr-[20px]">
                    <span>{item.details.price}</span>
                    <button
                      onClick={() => removeFromCart(item.slug)}
                      className="absolute text-md text-red-500 hover:text-red-700 top-[-8px] right-[0px]"
                    >
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col mb-20">
              <div className="flex">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Введите промокод"
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none"
                  disabled={discountApplied}
                />
                <button
                  onClick={handleApplyCoupon}
                  className={`px-4 py-2 border rounded-r-md ${
                    discountApplied
                      ? "border-gray-400 bg-gray-400 text-white cursor-not-allowed"
                      : "border-primary-500 bg-primary-500 text-white hover:bg-primary-600"
                  }`}
                  disabled={discountApplied}
                >
                  Применить
                </button>
              </div>
              {discountApplied && (
                <p className="mt-2 text-green-600 body-14">Дополнительная скидка 30% применена!</p>
              )}
              {!discountApplied && errorMessage && (
                <p className="mt-2 text-red-500 body-14">{errorMessage}</p>
              )}
            </div>

            {/* Блок с полями email, телефон и двумя обязательными чекбоксами */}
            <div className="flex flex-col mb-20 space-y-20 ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={handlePhoneBlur}
                placeholder="Введите телефон"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                inputMode="numeric"
                pattern="[0-9]*"
                required
              />

              {phoneError && <p className="text-red-500 body-14">{phoneError}</p>}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="consent" className="body-14 text-neutral-900">
                    Я соглашаюсь на обработку{" "}
                    <a
                      href="https://foundation-education.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary-500"
                    >
                      персональных данных
                    </a>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="offerConsent"
                    checked={offerConsent}
                    onChange={(e) => setOfferConsent(e.target.checked)}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="offerConsent" className="body-14 text-neutral-900">
                    Я соглашаюсь с{" "}
                    <a
                      href="https://foundation-education.com/publick-offer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary-500"
                    >
                      публичной офертой
                    </a>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end mb-40 text-lg font-semibold">Итого: {finalPrice}₽</div>
          </>
        ) : (
          <p className="mb-40">Корзина пуста</p>
        )}

        <button
          type="button"
          onClick={handleCheckout}
          disabled={cartItems.length === 0 || !formValid}
          className={`w-full px-4 py-2 text-white rounded ${
            cartItems.length === 0 || !formValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary-500 hover:bg-primary-600"
          }`}
        >
          Перейти к оплате
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
