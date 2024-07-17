import { useLoaderData } from "react-router-dom";
import SingleEventDashboard from "./SingleEventDashboard";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const AllEventInDashboard = () => {
  const specificUserEvent = useLoaderData();
  console.log(specificUserEvent == Array);

  const fadeupAnimation = {
    hide: { opacity: 0, y: -70 },
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
    <div className="my-6">
      <Helmet>
        <title>All Events | Dashboard</title>
      </Helmet>
      <motion.div variants={fadeupAnimation} initial="hide" animate="show">
        <motion.h3
          variants={fadeupAnimation}
          className="text-center text-4xl text-primary"
        >
          All events
        </motion.h3>
        <div className="flex justify-center">
          <motion.p
            variants={fadeupAnimation}
            className="text-slate-400 w-[700px] text-center mt-3"
          >
            Creating Unforgettable Events with Artistic Flair, Innovation, and
            Impeccable Attention to Detail.
          </motion.p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-12 gap-8">
        {
          /* filteredItems.map((item, index) => (
          <SingleEvent key={index} event={item}></SingleEvent>
        )) */

          specificUserEvent.map((item, index) => (
            // <SingleEvent key={index} event={item}></SingleEvent>
            <SingleEventDashboard
              key={index}
              event={item}
            ></SingleEventDashboard>
          ))
        }
      </div>
    </div>
  );
};

export default AllEventInDashboard;
