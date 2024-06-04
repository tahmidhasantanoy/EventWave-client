import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateSingleEvent = () => {
  const eventData = useLoaderData();
  console.log(eventData);

  const {
    _id,
    eventName,
    eventDateTime,
    eventLocation,
    eventDescription,
    organizerName,
    organizerEmail,
    organizerBio,
    speakersPerformers,
    ticketsRegistrationLink,
    ticketsPrice,
    targetAudience,
    sponsorsPartners,
    promotionalImages,
    socialMediaFacebook,
  } = eventData;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const {
      eventName,
      eventDateTime,
      eventLocation,
      eventDescription,
      organizerName,
      organizerEmail,
      organizerBio,
      speakersPerformers,
      ticketsRegistrationLink,
      ticketsPrice,
      targetAudience,
      sponsorsPartners,
      promotionalImages,
      socialMediaFacebook,
    } = data;

    const updateEventInfo = {
      eventName,
      eventDateTime,
      eventLocation,
      eventDescription,
      organizerName,
      organizerEmail,
      organizerBio,
      speakersPerformers,
      ticketsRegistrationLink,
      ticketsPrice,
      targetAudience,
      sponsorsPartners,
      promotionalImages,
      socialMediaFacebook,
    };

    //update a event data to db
    fetch(`http://localhost:3000/single-event-info/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateEventInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Event Updated");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="text-2xl font-bold">Update Event</h2>

          <div className="form-control">
            <label className="label">Event Name</label>
            <input
              defaultValue={eventName}
              type="text"
              {...register("eventName")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Event Date and Time</label>
            <input
              defaultValue={eventDateTime}
              type="datetime-local"
              {...register("eventDateTime")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Event Location</label>
            <input
              defaultValue={eventLocation}
              type="text"
              {...register("eventLocation")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Event Description</label>
            <textarea
              defaultValue={eventDescription}
              {...register("eventDescription")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">Organizer Information</label>
            <input
              defaultValue={organizerName}
              type="text"
              placeholder="Name"
              {...register("organizerName")}
              className="input input-bordered"
            />
            <input
              defaultValue={organizerEmail}
              type="email"
              placeholder="Email"
              {...register("organizerEmail")}
              className="input input-bordered mt-2"
            />
            <textarea
              defaultValue={organizerBio}
              placeholder="Bio"
              {...register("organizerBio")}
              className="textarea textarea-bordered mt-2"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">Speakers/Performers</label>
            <textarea
              defaultValue={speakersPerformers}
              {...register("speakersPerformers")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">Tickets/Registration</label>
            <input
              defaultValue={ticketsRegistrationLink}
              type="text"
              placeholder="Link"
              {...register("ticketsRegistrationLink")}
              className="input input-bordered"
            />
            <input
              defaultValue={ticketsPrice}
              type="number"
              placeholder="Price"
              {...register("ticketsPrice")}
              className="input input-bordered mt-2"
            />
          </div>

          <div className="form-control">
            <label className="label">Target Audience</label>
            <input
              defaultValue={targetAudience}
              type="text"
              {...register("targetAudience")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Sponsors and Partners</label>
            <textarea
              defaultValue={sponsorsPartners}
              {...register("sponsorsPartners")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">Promotional Images/Videos</label>
            <input
              defaultValue={promotionalImages}
              type="text"
              placeholder="Image URL"
              {...register("promotionalImages")}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">Social Media Links</label>
            <input
              defaultValue={socialMediaFacebook}
              type="text"
              placeholder="Facebook"
              {...register("socialMediaFacebook")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSingleEvent;
