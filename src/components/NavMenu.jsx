import Hamburger from "../UI/Hamburger";
import logo from "../assets/img/logo.svg";

function NavMenu() {
  return (
    <nav className="container ">
      <div className="flex items-center justify-between px-32 m-auto mb-20 rounded-lg h-60 bg-slate-700 ">
        <img src={logo} alt="Logo" className="w-108 " />

        <Hamburger />
      </div>
    </nav>
  );
}

export default NavMenu;
