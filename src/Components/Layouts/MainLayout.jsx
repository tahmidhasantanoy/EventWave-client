import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header";
import Footer from "../../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
