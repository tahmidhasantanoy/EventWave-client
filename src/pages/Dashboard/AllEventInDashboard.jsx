import { useLoaderData } from "react-router-dom";
import SingleEventDashboard from "./SingleEventDashboard";

const AllEventInDashboard = () => {
  const specificUserEvent = useLoaderData();
  console.log(specificUserEvent == Array);

  return (
    <div className="my-6">
      <h3 className="text-center text-4xl text-primary">
        EventWave all events{" "}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {
          /* filteredItems.map((item, index) => (
          <SingleEvent key={index} event={item}></SingleEvent>
        )) */

          specificUserEvent.map((item, index) => (
            // <SingleEvent key={index} event={item}></SingleEvent>
            <SingleEventDashboard
              key={index}
              event={item}
            ></SingleEventDashboard>
          ))
        }
      </div>
    </div>
  );
};

export default AllEventInDashboard;
