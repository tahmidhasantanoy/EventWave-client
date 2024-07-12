const heroImage = "https://i.ibb.co/9gCWpHg/hero.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  
  const fadeupAnimation = {
    hide: { opacity: 0, y: 100 },
    show: {
      opacity: 2,
      y: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 0.7,
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <motion.div
          variants={fadeupAnimation}
          initial="hide"
          animate="show"
          className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left"
        >
          <motion.h1
            variants={fadeupAnimation}
            // initial="hide"
            // animate="show"
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            A better way to manage your events
          </motion.h1>
          <motion.ul
            variants={fadeupAnimation}
            // initial="hide"
            // animate="show"
            className="list-none space-y-2 mb-8 text-lg text-gray-700"
          >
            <motion.li
              variants={fadeupAnimation}
              // initial="hide"
              // animate="show"
              className="flex items-center"
            >
              <span className="text-blue-500 mr-2">✓</span>
              Find hotels and venues
            </motion.li>
            <motion.li
              variants={fadeupAnimation}
              // initial="hide"
              // animate="show"
              className="flex items-center"
            >
              <span className="text-blue-500 mr-2">✓</span>
              Plan and promote your event
            </motion.li>
            <motion.li
              variants={fadeupAnimation}
              // initial="hide"
              // animate="show"
              className="flex items-center"
            >
              <span className="text-blue-500 mr-2">✓</span>
              Engage your attendees
            </motion.li>
            <motion.li
              variants={fadeupAnimation}
              // initial="hide"
              // animate="show"
              className="flex items-center"
            >
              <span className="text-blue-500 mr-2">✓</span>
              Capture leads and track ROI
            </motion.li>
          </motion.ul>
          <div className="flex justify-center lg:justify-start space-x-4">
            <motion.button
              variants={fadeupAnimation}
              // initial="hide"
              // animate="show"
              className="btn btn-primary"
            >
              Explore the platform
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="flex justify-center items-center h-screen">
          <div className="relative group">
            <img
              src={heroImage}
              alt="Fancy"
              className="w-96 h-96 object-cover border-8 border-blue-500 shadow-lg transform transition-transform duration-500 group-hover:scale-105"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
