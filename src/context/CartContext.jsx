import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  const addToCart = (course) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.slug === course.slug);
      if (!exists) {
        return [...prev, course];
      }
      return prev;
    });
    setShowCart(true);
  };

  const removeFromCart = (courseSlug) => {
    setCartItems((prev) => prev.filter((item) => item.slug !== courseSlug));
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscountApplied(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        showCart,
        setShowCart,
        discountApplied,
        setDiscountApplied,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
