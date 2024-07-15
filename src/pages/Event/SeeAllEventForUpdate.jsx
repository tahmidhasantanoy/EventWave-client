/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SeeAllEventForUpdate = ({ event, handleDelete }) => {
  // console.log(event);

  const { _id, organizerName, eventDateTime, eventName, eventLocation } = event;

  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl m-4 group hover:bg-base-300 duration-700">
      <figure className="px-10 pt-10">
        <img
          src={"https://ibb.co/V3nLWRc"}
          alt="Event"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{eventName}</h2>
        <p>{eventLocation}</p>
        <p>{eventDateTime}</p>
        <p>Price: ${"event.price"}</p>
        <p>Organized by: {organizerName}</p>
        <div className="card-actions duration-300">
          <button className="btn btn-primary">
            <Link to={`/update-single-event/${_id}`}>Edit</Link>
          </button>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeAllEventForUpdate;
