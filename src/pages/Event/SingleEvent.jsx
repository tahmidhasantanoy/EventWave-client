import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleEvent = ({ event }) => {
  console.log(event);

  const {
    _id,
    organizerName,
    eventDateTime,
    eventName,
    eventLocation,
    promotionalImages,
  } = event;
  return (
    <div className="card w-full .md:w-96 bg-base-100 shadow-xl m-4 group hover:bg-base-200 duration-700">
      <figure className="px-10 pt-10">
        <img src={promotionalImages} alt="Event" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{eventName}</h2>
        <p>{eventLocation}</p>
        <p>{eventDateTime}</p>
        <p>Price: ${event.ticketsPrice}</p>
        <p>Organized by: {organizerName}</p>
        <div className="card-actions opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="btn btn-primary">
            <Link to={`/detail-event/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
