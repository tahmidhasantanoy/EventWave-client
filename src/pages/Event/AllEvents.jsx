import { useEffect, useState } from "react";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/event-info")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h3>eVENTS</h3>
      {events.map((item, index) => (
        <SingleEvent key={index} event={item}></SingleEvent>
      ))}
    </div>
  );
};

export default AllEvents;
