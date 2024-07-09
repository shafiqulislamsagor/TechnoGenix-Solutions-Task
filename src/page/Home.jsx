import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { RiDashboardFill } from "react-icons/ri";
import SideBar from "./../layout/dashboardMenu/SideBar";
import { useState } from "react";

const Home = () => {
    const [open , setOpen] = useState(true)
  return (
    <div className="bg-gray-950">
      <Navbar />
      <div>
        <div className="mt-5 ml-5 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <RiDashboardFill className="text-xl" />
          </button>
        </div>
        <div className="flex">
          <div
            className={`w-[267px] bg-gray-800 absolute md:static md:left-0 ${
              open ? "-left-96" : "left-0"
            } z-50`}
          >
            <SideBar />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
