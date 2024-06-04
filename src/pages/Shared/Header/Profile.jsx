import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";

const Profile = () => {
  const [isOpen, setisOpen] = useState(false);
  const { currentUser, logOut } = useAuth();
  console.log(currentUser?.email);

  const handleLogout = () => {
    logOut().then((res) =>
      console.log(res).catch((err) => console.log(err.message))
    );
  };

  return (
    <div className="relative">
      <div className="flex border-[1px] p-2 bg-white hover:shadow-md transition rounded-3xl gap-2">
        <button onClick={() => setisOpen(!isOpen)}>
          <VscAccount className="w-6 h-6" />
        </button>
        <button onClick={() => setisOpen(!isOpen)}>
          <IoMenu className="w-6 h-6" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute text-zinc-700 bg-white right-0 gap-4 w-32 rounded-lg py-3">
          <Link to={`/profile/${currentUser?.email}`}>
            <p className="py-1 hover:bg-zinc-200 pl-4">Profile</p>
          </Link>
          <Link onClick={handleLogout}>
            <p className="py-1 hover:bg-zinc-200 pl-4">Logout</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
