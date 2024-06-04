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
      <h3 className="text-center">Events</h3>
      {events.map((item, index) => (
        <>
          <SingleEvent key={index} event={item}></SingleEvent>
          {/* <UpdateSingleEvent key={index} event={item}></UpdateSingleEvent> */}
        </>
      ))}
    </div>
  );
};

export default UpdateEvents;
