import { useEffect, useState } from "react";
import SingleEvent from "./SingleEvent";
import SeeAllEventForUpdate from "./SeeAllEventForUpdate";

// UpdateEvent -> UpdateSingleEvent
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
          {/* <SingleEvent key={index} event={item}></SingleEvent> */}
          <SeeAllEventForUpdate key={index} event={item}></SeeAllEventForUpdate>
        </>
      ))}
    </div>
  );
};

export default UpdateEvents;
