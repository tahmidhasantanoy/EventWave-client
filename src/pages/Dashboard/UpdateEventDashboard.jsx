import { useLoaderData } from "react-router-dom";
import SeeAllEventForUpdate from "../Event/SeeAllEventForUpdate";

const UpdateEventDashboard = () => {
  const userEvents = useLoaderData();
  console.log(userEvents);

  return (
    <div>
      <h3 className="text-center text-4xl text-primary">EventWave events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-3">
        {userEvents.map((item, index) => (
          <SeeAllEventForUpdate key={index} event={item}></SeeAllEventForUpdate>
        ))}
      </div>
    </div>
  );
};

export default UpdateEventDashboard;
