import { useEffect, useMemo, useState } from "react";
import SingleEvent from "./SingleEvent";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [query, setQusery] = useState("");

  const filteredItems = events.filter((data) =>
    data?.eventName?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    fetch("https://event-wave-server-phi.vercel.app/event-info")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="my-6">
      <div className="mb-6 w-full">
        <input
          onChange={(e) => setQusery(e.target.value)}
          type="text"
          placeholder="Search event..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <h3 className="text-center text-4xl text-primary">
        EventWave all events{" "}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <SingleEvent key={index} event={item}></SingleEvent>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
