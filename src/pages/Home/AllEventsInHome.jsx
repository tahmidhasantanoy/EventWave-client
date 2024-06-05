import { useEffect, useState } from "react";
import SingleEvent from "../Event/SingleEvent";

const UpdateEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/event-info")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h3 className="text-center text-4xl text-primary">EventWave events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {events.map((item, index) => (
          <SingleEvent key={index} event={item}></SingleEvent>
        ))}
      </div>
    </div>
  );
};

export default UpdateEvents;
