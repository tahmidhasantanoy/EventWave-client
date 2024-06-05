import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ViewProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  const { _id, name, email } = userData;


  useEffect(() => {
    fetch(`http://localhost:3000/user-data/${currentUser?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [currentUser]);

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl mx-auto my-4">
      <figure className="px-10 pt-10">
        <img
          src={"image"}
          alt={name}
          className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-primary"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Email: {email}</p>
        <p>Role: {"role"}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/edit-profile/${_id}`}>Edit</Link> {/* Problem here */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
