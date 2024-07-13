import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSwatchbook } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { Helmet } from "react-helmet";
import "./Dashboard.css";

const DashBoardPage = () => {
  const { currentUser } = useAuth();
  console.log(currentUser?.email);

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>EventWave | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-sky-950 .text-base-content pt-16 pl-12 text-white space-y-1">
          {/* Sidebar content here */}
          <>
            <li>
              <NavLink
                className={({ isActive, isPending }) => {
                  isPending ? "Pending" : isActive ? "text-cyan-200" : "";
                }}
                to={"/"}
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/dashboard/all-event/${currentUser?.email}`}
                className={({ isActive, isPending }) =>
                  isPending ? "Pending" : isActive ? "active" : ""
                }
              >
                <FaSwatchbook />
                All Event
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={`/dashboard/dashboard-update-event/${currentUser?.email}`}
              >
                <MdOutlineTipsAndUpdates />
                Update Event
              </NavLink>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardPage;
