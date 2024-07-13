import Achivement from "./Achivement";
import CustomerSupport from "./CustomerSupport";
import AllEventsInHome from "./AllEventsInHome";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EventWave | Home</title>
      </Helmet>
      <HeroSection />
      <Achivement />
      <AllEventsInHome />
      <CustomerSupport />
    </>
  );
};

export default Home;
