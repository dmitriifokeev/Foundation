import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../UI/Hamburger";
import logo from "../assets/img/logo.svg";
import NavMenu from "./NavMenu";
import { useCart } from "../context/CartContext";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, setShowCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openCart = () => {
    setShowCart(true);
  };

  return (
    <>
      <nav className="container relative m-auto">
        <div className="flex items-center justify-between px-32 m-auto mb-20 rounded-lg h-60 bg-slate-700">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-108" />
          </Link>
          <button onClick={toggleMenu} className="relative">
            <Hamburger isOpen={isMenuOpen} />
            {cartItems.length > 0 && (
              <div className="absolute flex items-center justify-center w-[16px] h-[16px] text-xs text-white bg-red-500 rounded-full top-[-10px] right-[-12px]">
                {cartItems.length}
              </div>
            )}
          </button>
        </div>
      </nav>
      <NavMenu isOpen={isMenuOpen} onClose={closeMenu} onCartOpen={openCart} />
    </>
  );
}

export default NavBar;
