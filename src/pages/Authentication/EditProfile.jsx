import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProfileEdit = () => {
  const data = useLoaderData();
  const { _id, email, name } = data;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here

    const { name, email, role, experience, imageURL } = data;

    const updatedUserInfo = {
      name,
      email,
      role,
      experience,
      imageURL,
    };

    //update a event data to db
    fetch(`http://localhost:3000/single-user-info/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Event Updated");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={name}
              {...register("name")}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={email}
              {...register("email")}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <input
              {...register("role")}
              type="text"
              placeholder="Role"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Experience</span>
            </label>
            <input
              {...register("experience")}
              type="text"
              placeholder="Experience"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              {...register("imageURL")}
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
