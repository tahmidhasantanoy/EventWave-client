import { useLoaderData } from "react-router-dom";
import SeeAllEventForUpdate from "../Event/SeeAllEventForUpdate";
import { useState } from "react";

const UpdateEventDashboard = () => {
  const userEvents = useLoaderData();
  const [updatedUserEvent, setUpdatedUserEvent] = useState([]);
  console.log(userEvents);
  console.log(updatedUserEvent);

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
      <h3 className="text-center text-4xl text-primary">EventWave events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-3">
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
