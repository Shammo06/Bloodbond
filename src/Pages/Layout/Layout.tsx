import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#FFF7EE]">
      <Navbar></Navbar>
      <div className="container mx-auto font-serif">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
