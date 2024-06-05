import { Link, Outlet } from "react-router-dom";
import { FaBook, FaHistory, FaHome, FaSwatchbook } from "react-icons/fa";

const DashBoardPage = () => {
  return (
    <div className="drawer lg:drawer-open">
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
              <Link to={"/"}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/AllProduct"}>
                <FaSwatchbook />
                All Product
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/update-product"}>
                <FaBook />
                Update Product
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/payment-history"}>
                <FaHistory />
                Payment history
              </Link>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardPage;
