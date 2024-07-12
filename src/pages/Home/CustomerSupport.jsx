import { motion } from "framer-motion";
import useScrollGrowFromRight from "../../Hooks/useScrollGrowFromRight";

const CustomerSupport = () => {
  const { rightAchivementRef, rightStyle } = useScrollGrowFromRight();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-screen bg-white p-4 lg:p-10 gap-5">
      <div className="flex-1 flex justify-center items-center p-4 lg:p-10">
        <div className="bg-black p-6 lg:p-10 rounded-lg  text-center max-w-md w-full">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-orange-500">24/7</span> at your service
          </h2>
          <p className="mb-6 text-gray-600">
            <span className="text-primary">EventWave</span> is the only webinar
            platform with live 24/7 expert support and services anytime you need
            them.
          </p>
          <div className="flex justify-center space-x-2 lg:space-x-4 mb-6">
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="user1"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="user2"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="user3"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="user4"
            />
            <img
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/5.jpg"
              alt="user5"
            />
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-white  sm:h-[600px] lg:h-full ">
        <motion.video
          style={rightStyle}
          ref={rightAchivementRef}
          autoPlay
          loop
          muted
        >
          <source src="../../../public/Video/7y1eq1y4chhtVq4N0n.mp4"></source>
        </motion.video>
      </div>
    </div>
  );
};

export default CustomerSupport;
