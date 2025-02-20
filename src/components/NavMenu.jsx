import { Link } from "react-router-dom";
import Hamburger from "../UI/Hamburger";
import logo from "../assets/img/logo.svg";

function NavMenu() {
  return (
    <nav className="container m-auto">
      <div className="flex items-center justify-between px-32 m-auto mb-20 rounded-lg h-60 bg-slate-700 ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-108 " />
        </Link>

        <Hamburger />
      </div>
    </nav>
  );
}

export default NavMenu;
