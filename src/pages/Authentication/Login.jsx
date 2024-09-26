/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);

    const { email, password } = data;
    login(email, password).then(
      (res) => {
        const user = res.user;
        const userData = { email: user.email };

        console.log(userData);

        fetch("http://localhost:3000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            //warning
            localStorage.setItem("EventWave-access-toke", data.token);
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(err.message));
      }
      // .catch((err) => console.log(err.message))
    );
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
      <Helmet>
        <title>EventWave</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Logging in gives you access to your personalized content, saves your
            preferences, and ensures a secure experience across the website.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="">
            <span className="flex items-center text-xl font-serif font-semibold mt-5 ml-8">
              login with &nbsp;{" "}
              <button onClick={handleGoogleLogin}>
                <FcGoogle className="w-10 h-10" />
              </button>
            </span>
          </div>
          <div className="flex justify-center items-center mt-2 space-x-3">
            <p className="mb-2">_____</p>
            <p>Or</p>
            <p className="mb-2">_____</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/*  */}
            <p className="">
              Don't have an account?{" "}
              <Link to={"/signup"} className="underline text-red-600">
                Register here
              </Link>
            </p>
            {/*  */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
