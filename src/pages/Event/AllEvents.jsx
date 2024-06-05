import { useEffect, useMemo, useState } from "react";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [query, setQusery] = useState("");

  const filteredItems = events.filter((data) =>
    data?.eventName?.toLowerCase().includes(query.toLowerCase())
  );


  useEffect(() => {
    fetch("http://localhost:3000/event-info")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="">
      <h3>Events</h3>
      <div className=" flex">
        <p className="font-bold">Search : </p>
        <input type="text" onChange={(e) => setQusery(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <SingleEvent key={index} event={item}></SingleEvent>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
