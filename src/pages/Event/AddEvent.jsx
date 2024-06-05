import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";

const AddEvent = () => {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission

    const {
      eventName,
      userEmail,
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

    console.log(
      eventName,
      userEmail,
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
      socialMediaFacebook
    );

    const newEventInfo = {
      eventName,
      userEmail,
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

    //add a event data to db
    fetch("http://localhost:3000/event-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEventInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Event Added");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="text-2xl font-bold">Create Event</h2>

          <div className="form-control">
            <label className="label">Event Name</label>
            <input
              type="text"
              {...register("eventName")}
              className="input input-bordered"
            />
            <input
              defaultValue={currentUser?.email}
              readOnly
              type="email"
              {...register("userEmail")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Event Date and Time</label>
            <input
              type="datetime-local"
              {...register("eventDateTime")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Event Location</label>
            <input
              type="text"
              {...register("eventLocation")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Event Description</label>
            <textarea
              {...register("eventDescription")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">Organizer Information</label>
            <input
              type="text"
              placeholder="Name"
              {...register("organizerName")}
              className="input input-bordered"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("organizerEmail")}
              className="input input-bordered mt-2"
            />
            <textarea
              placeholder="Bio"
              {...register("organizerBio")}
              className="textarea textarea-bordered mt-2"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">Speakers/Performers</label>
            <textarea
              {...register("speakersPerformers")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">Tickets/Registration</label>
            <input
              type="text"
              placeholder="Link"
              {...register("ticketsRegistrationLink")}
              className="input input-bordered"
            />
            <input
              type="number"
              placeholder="Price"
              {...register("ticketsPrice")}
              className="input input-bordered mt-2"
            />
          </div>

          <div className="form-control">
            <label className="label">Target Audience</label>
            <input
              type="text"
              {...register("targetAudience")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">Sponsors and Partners</label>
            <textarea
              {...register("sponsorsPartners")}
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">Promotional Images/Videos</label>
            <input
              type="text"
              placeholder="Image URL"
              {...register("promotionalImages")}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">Social Media Links</label>
            <input
              type="text"
              placeholder="Facebook"
              {...register("socialMediaFacebook")}
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
