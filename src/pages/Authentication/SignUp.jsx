import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [cpass, setCpass] = useState("");
  const { register, handleSubmit } = useForm();
  const { createUser, googleLogin } = useContext(AuthContext);
  console.log(createUser);

  const onSubmit = (data) => {
    const { username, email, password, cpassword } = data;
    console.log(username, email, password, cpassword);

    if (data.password !== data.cpassword) {
      setCpass("pass not matched");
    } else {
      setCpass("");

      createUser(email, password)
        .then((res) => {
          const user = res.user;
          console.log(user);
          toast.success("Done");

          const userInfo = {
            name: username,
            email: user?.email,
          };

          fetch("https://event-wave-server-phi.vercel.app/user-info", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        })
        .catch((err) => toast.error(err.message));
    }
  };

  const handleGoogleLogin = () => {
    googleLogin().then((data) => {
      console.log(data);

      const userInfo = {
        name: data?.user?.displayName,
        email: data?.user?.email,
      };

      fetch("https://event-wave-server-phi.vercel.app/user-info", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className=".absolute">
        <ToastContainer />;
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className=".card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-0 pb-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                {...register("username")}
                type="text"
                placeholder="username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                {...register("cpassword")}
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
              />
            </div>

            {cpass && <p>{cpass}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="form-control mt-6 card-body">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary"
            >
              <FcGoogle className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
