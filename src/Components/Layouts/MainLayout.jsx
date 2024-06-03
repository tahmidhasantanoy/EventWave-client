import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer";
import Container from "../ui/Container";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;
