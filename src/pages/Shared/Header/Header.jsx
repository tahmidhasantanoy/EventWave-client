import { Link, NavLink } from "react-router-dom";
import Profile from "./Profile";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-events"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          All Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) => {
            isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          Dashboard
        </NavLink>
      </li>
      {currentUser ? (
        <>
          <li>
            <NavLink
              to={`/add-event`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              add Events
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="btn">
            <div className="btn normal-case text-xl">EventWave</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {currentUser ? (
            <Profile />
          ) : (
            <Link
              to={"/login"}
              className=" btn-active font-medium hover:text-sky-400 rounded-sm p-2.5 m-0"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
