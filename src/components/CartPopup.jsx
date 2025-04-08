import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import InputMask from "react-input-mask";

// Простейшая проверка email: наличие '@' и точки
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [emailError, setEmailError] = useState(""); // добавлено для валидации email

  // Отключаем прокрутку фона при открытом попапе
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

  // Проверка email при потере фокуса
  const handleEmailBlur = () => {
    if (email && !emailRegex.test(email.trim())) {
      setEmailError("Некорректный формат E-mail");
    } else {
      setEmailError("");
    }
  };

  // Проверка номера телефона
  const handlePhoneBlur = () => {
    // Маска +7(999)999-99-99 → длина 16 символов для полного номера
    if (phone && phone.length < 16) {
      setPhoneError("Введите полный номер в формате +7(999)999-99-99");
    } else {
      setPhoneError("");
    }
  };

  // Проверка купона
  const handleApplyCoupon = () => {
    setErrorMessage("");
    if (coupon.trim().toUpperCase() === "SALE") {
      setDiscountApplied(true);
      setCoupon("");
    } else {
      setErrorMessage("Промокод неверный");
    }
  };

  // Полная проверка для кнопки «Перейти к оплате»
  const isEmailValid = email.trim() !== "" && !emailError && emailRegex.test(email.trim());
  // Маска требует 16 символов (например, +7(123)456-78-90)
  const isPhoneMaskComplete = phone.length === 16 && !phoneError;
  const formValid = isEmailValid && isPhoneMaskComplete && consent && offerConsent;

  // При клике на оплату — проверяем email ещё раз
  const handleCheckout = async () => {
    if (!emailRegex.test(email.trim())) {
      setEmailError("Некорректный формат E-mail");
      return;
    }

    // Собираем данные
    // const body = {
    //   cartItems,
    //   totalPrice: finalPrice,
    //   email,
    //   phone: phone.replace(/\D+/g, ""), // только цифры для payment.php
    // };

    const body = {
      cartItems: cartItems.map((item) => ({
        hero: {
          title: item.hero?.title || "",
        },
        details: {
          price: item.details?.price || "",
          skillspaceToken: item.details?.skillspaceToken || "",
          skillspaceCourses: item.details?.skillspaceCourses || [],
        },
        slug: item.slug || "",
      })),
      totalPrice: finalPrice,
      email,
      phone: phone.replace(/\D+/g, ""),
    };

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Затемняющий фон */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/*
        Внешний контейнер попапа:
        - height: 80vh, чтобы задать фиксированную высоту
        - flex flex-col, чтобы кнопку можно было «приклеить» внизу
      */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-lg h-[80vh] flex flex-col">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute text-xl text-gray-600 top-[12px] right-5 hover:text-gray-800 font-semibold"
        >
          ×
        </button>
        <div className="py-20 pl-24">
          <h2 className="text-2xl font-bold ">Корзина</h2>
        </div>

        {/*
          Прокручиваемая часть:
          flex-1 + overflow-y-auto, чтобы список товаров и поля прокручивались,
          а кнопка внизу оставалась на месте
        */}
        <div className="flex-1 px-6 overflow-y-auto">
          {cartItems && cartItems.length > 0 ? (
            <>
              {/* Список товаров */}
              <ul className="mb-32">
                {cartItems.map((item) => (
                  <li
                    key={item.slug}
                    className="flex items-center justify-between py-[8px] border-b mb-4"
                  >
                    <span className="mr-4 font-semibold">{item.hero.title}</span>
                    <div className="relative flex items-center gap-4 pr-[20px] font-semibold">
                      <span>{item.details.price}</span>
                      <button
                        onClick={() => removeFromCart(item.slug)}
                        className="absolute text-md text-red-500 hover:text-red-700 top-[-8px] right-0 "
                      >
                        ×
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Поля email, телефон, чекбоксы */}
              <div className="flex flex-col mb-6 space-y-12">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleEmailBlur}
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
                {emailError && <p className="text-red-500 body-14">{emailError}</p>}

                <InputMask
                  mask="+7(999)999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={handlePhoneBlur}
                >
                  {(inputProps) => (
                    <input
                      {...inputProps}
                      type="tel"
                      placeholder="Введите телефон"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none"
                      required
                    />
                  )}
                </InputMask>
                {phoneError && <p className="text-red-500 body-14">{phoneError}</p>}

                <div className="flex flex-col pt-12 space-y-4">
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

              {/* Поле купона */}
              <div className="flex flex-col mb-6">
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
                  <p className="mt-2 text-green-600 body-14">
                    Дополнительная скидка 30% применена!
                  </p>
                )}
                {!discountApplied && errorMessage && (
                  <p className="mt-2 text-red-500 body-14">{errorMessage}</p>
                )}
              </div>

              {/* Итоговая цена */}
              <div className="flex justify-end mb-6 text-lg font-semibold">
                Итого: {finalPrice}₽
              </div>
            </>
          ) : (
            <p className="mb-6">Корзина пуста</p>
          )}
        </div>

        {/*
          Липкая панель внизу:
          sticky bottom-0 + background, чтобы отделить от прокрутки
        */}
        <div className="sticky bottom-0 w-full p-6 bg-white rounded-xl ">
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
    </div>
  );
};

export default CartPopup;
