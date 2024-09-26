import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const AddEvent = () => {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useAuth();

  const img_hosting_token = import.meta.env.VITE_image_api;
  // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  // console.log(img_hosting_token);

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.promotionalImages[0]);

    if (data.promotionalImages[0]) {
      const formData = new FormData();
      formData.append("image", data.promotionalImages[0]);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((img_data) => {
          console.log(img_data); // here i get chunk of data with display_url
          console.log(img_data?.data?.display_url); // undefined

          const promotionalImages = img_data?.data?.display_url;

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
            // promotionalImages,
            socialMediaFacebook,
          } = data;

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
          fetch("https://event-wave-server-phi.vercel.app/event-info", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newEventInfo),
          })
            .then((res) => res.json())
            // eslint-disable-next-line no-unused-vars
            .then((data) => {
              console.log(data);
              toast.success("Event Added");
            })
            .catch((err) => console.log(err.message));
        });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <ToastContainer />
      <Helmet>
        <title>Add Event | EventWave</title>
      </Helmet>
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100 my-10">
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
            <label className="label">Social Media Links</label>
            <input
              type="text"
              placeholder="Facebook"
              {...register("socialMediaFacebook")}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">Promotional Images/Videos</label>
            <input
              required
              type="file"
              placeholder="Image URL"
              {...register("promotionalImages")}
              className="ml-8 .input .input-bordered"
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
