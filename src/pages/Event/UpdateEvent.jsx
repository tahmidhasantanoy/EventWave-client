import { useEffect, useState } from "react";
import SeeAllEventForUpdate from "./SeeAllEventForUpdate";

// UpdateEvent -> UpdateSingleEvent
const UpdateEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://event-wave-server-phi.vercel.app/event-info")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <h3 className="text-center text-4xl text-primary">EventWave events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {events.map((item, index) => (
          <SeeAllEventForUpdate key={index} event={item}></SeeAllEventForUpdate>
        ))}
      </div>
    </>
  );
};

export default UpdateEvents;
