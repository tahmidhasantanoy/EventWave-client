import { useLoaderData } from "react-router-dom";
import SeeAllEventForUpdate from "../Event/SeeAllEventForUpdate";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const UpdateEventDashboard = () => {
  const userEvents = useLoaderData();
  const [updatedUserEvent, setUpdatedUserEvent] = useState([]);
  console.log(userEvents);
  console.log(updatedUserEvent);

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

  const handleDelete = (deletedId) => {
    console.log(deletedId);

    fetch(`https://event-wave-server-phi.vercel.app/all-event/${deletedId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remain = updatedUserEvent.filter(
          (item) => item?._id !== deletedId
        );
        setUpdatedUserEvent(remain);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Helmet>
        <title>Update Event | Dashboard</title>
      </Helmet>
      <motion.div variants={fadeupAnimation} initial="hide" animate="show">
        <motion.h3
          variants={fadeupAnimation}
          className="text-center text-4xl text-primary"
        >
          Update events
        </motion.h3>
        <div className="flex justify-center">
          <motion.p
            variants={fadeupAnimation}
            className="text-slate-400 w-[700px] mt-3 text-center"
          >
            Crafting Dynamic Events with Flexibility and Precision: At
            EventWave, we specialize in creating unforgettable moments that can
            be effortlessly updated, edited, or perfected to your exact
            specifications.
          </motion.p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-12 gap-8 px-3">
        {userEvents?.map((item, index) => (
          <SeeAllEventForUpdate
            key={index}
            event={item}
            handleDelete={handleDelete}
          ></SeeAllEventForUpdate>
        ))}
      </div>
    </div>
  );
};

export default UpdateEventDashboard;
