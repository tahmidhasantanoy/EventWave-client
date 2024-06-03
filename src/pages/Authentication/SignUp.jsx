import { /* useContext, */ useState } from "react";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const [cpass, setCpass] = useState("");
  const { register, handleSubmit } = useForm();
  //   const { createUser } = useContext(AuthContext);
  //   console.log(createUser);

  const onSubmit = (data) => {
    const { username, email, password, cpassword } = data;
    console.log(username, email, password, cpassword);

    if (data.password !== data.cpassword) {
      setCpass("pass not matched");
    } else {
      setCpass("");

      //   createUser(email, password)
      //     .then((res) => {
      //       const user = res.user;
      //       console.log(user);
      //     })
      //     .catch((err) => console.log(err));
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
