import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function Main() {
  //console.log(children);
  return (
    <div className="flex flex-col min-h-screen w-full justify-between items-center m-auto">
      <NavBar />
      {/* vistas dinamicasss (por ahora SOLO index) */}
      <Outlet />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
