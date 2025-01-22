import Hamburger from "../UI/Hamburger";
import logo from "../assets/img/logo.svg";

function NavMenu() {
  return (
    <nav className="mb-20 container px-32 m-auto h-60 bg-slate-700 flex items-center justify-between rounded-lg">
      <img src={logo} alt="Logo" className="w-108 " />
      <Hamburger />
    </nav>
  );
}

export default NavMenu;
