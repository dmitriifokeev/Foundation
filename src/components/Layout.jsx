import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import ScrollToTop from "../utility/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavMenu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Layout;
