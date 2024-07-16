import { useEffect, useState } from "react";
import SingleEvent from "../Event/SingleEvent";
import { motion } from "framer-motion";

const UpdateEvents = () => {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(6); // Initially display 6 events

  const fadeupAnimation = {
    hide: { opacity: 0, y: -70 },
    show: {
      opacity: 1, // Corrected opacity to 1
      y: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 0.7,
      },
    },
  };

  useEffect(() => {
    fetch("https://event-wave-server-phi.vercel.app/event-info")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 6); // Show 6 more events each time
  };

  return (
    <div>
      <motion.div variants={fadeupAnimation} initial="hide" animate="show">
        <motion.h3
          variants={fadeupAnimation}
          className="text-center text-4xl text-primary"
        >
          EventWave events
        </motion.h3>
        <div className="flex justify-center">
          <motion.p
            variants={fadeupAnimation}
            className="text-slate-400 w-[700px] mt-3 text-center"
          >
            Creating Unforgettable Events with Artistic Flair, Innovation, and
            Impeccable Attention to Detail.
          </motion.p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {events.slice(0, visibleEvents).map((item, index) => (
          <SingleEvent key={index} event={item}></SingleEvent>
        ))}
      </div>
      {visibleEvents < events.length && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleSeeMore} 
            className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 hover:text-black duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateEvents;
