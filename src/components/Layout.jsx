// Layout.jsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToTop from "../utility/ScrollToTop";
import CartPopup from "../components/CartPopup";
import { useCart } from "../context/CartContext";
import ScrollToHashElement from "../hooks/ScrollToHashElement";

function Layout() {
  const { showCart, setShowCart, cartItems } = useCart();

  // Пример обработчика для перехода к оплате:
  const handleCheckout = () => {
    console.log("Переход к оплате");
    setShowCart(false);
  };

  return (
    <>
      <ScrollToHashElement />
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
      {showCart && (
        <CartPopup
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
}

export default Layout;
