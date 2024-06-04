import { useLoaderData } from "react-router-dom";

const DetailEvent = () => {
  const eventDetail = useLoaderData();
  const {
    eventName,
    eventDateTime,
    eventLocation,
    eventDescription,
    organizerName,
    organizerEmail,
    organizerBio,
    ticketsRegistrationLink,
    ticketsPrice,
    targetAudience,
    promotionalImages,
    socialMediaFacebook,
  } = eventDetail;
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={promotionalImages[0]}
          alt="Event"
          className="w-full md:w-1/3 rounded-xl mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-center md:text-left">
            {eventName}
          </h1>
          <p className="text-xl text-center md:text-left">{eventLocation}</p>
          <p className="text-center md:text-left mb-4">{eventDateTime}</p>
          <div>
            <p className="mb-2">
              <strong>Description:</strong> {eventDescription}
            </p>
            <p className="mb-2">
              <strong>Organizer:</strong> {organizerName}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {organizerEmail}
            </p>
            <p className="mb-2">
              <strong>Bio:</strong> {organizerBio}
            </p>
            <p className="mb-2">
              <strong>Speakers/Performers:</strong>{" "}
              {/* {speakersPerformers.join(", ")} */}
            </p>
            <p className="mb-2">
              <strong>Tickets Price:</strong> ${ticketsPrice}
            </p>
            <p className="mb-2">
              <strong>Target Audience:</strong> {targetAudience}
            </p>
            <p className="mb-2">
              <strong>Sponsors/Partners:</strong>{" "}
              {/* {sponsorsPartners.join(", ")} */}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start mt-4">
            <button
              href={ticketsRegistrationLink}
              className="btn btn-primary mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Tickets
            </button>
            <a
              href={socialMediaFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
