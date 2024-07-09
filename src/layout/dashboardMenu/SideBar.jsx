import { BiSolidError } from "react-icons/bi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaChartLine, FaEdit, FaMapMarked, FaShoppingCart, FaTable, FaUserCog } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { IoDocumentTextOutline, IoNotificationsCircle } from "react-icons/io5";
import { MdEmail, MdFormatListBulleted, MdOutlineInsertEmoticon, MdOutlineWidgets } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { SiTodoist } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div className="mt-5" id="mobile-menu">
        <div className="space-y-1  pb-3 pt-2">
          <NavLink
            to={'/'}
            className="flex items-center gap-4 rounded-sm bg-gray-900 border-l-4 border-yellow-400 px-3 py-2 text-base  text-green-600"
            aria-current="page"
          >
            <IoMdHome className="text-2xl ml-4"/> Overview
          </NavLink>
          <NavLink
            to={'/page2'}
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <MdOutlineWidgets className="text-2xl ml-4" /> Widgets
          </NavLink>
          <NavLink
            to={'/page3'}
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <BsMenuButtonWideFill className="text-2xl ml-4" /> Ui Elements
          </NavLink>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <GiNetworkBars className="text-2xl ml-4"/>
            Advanced Ui
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <MdFormatListBulleted className="text-2xl ml-4"/>
            Form Elements
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <FaEdit className="text-2xl ml-4"/>
            Editors
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <FaChartLine className="text-2xl ml-4"/>
           Charts
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <FaTable className="text-2xl ml-4"/>
           Tables
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <RiMessage3Fill className="text-2xl ml-4" />
            Popups
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <IoNotificationsCircle className="text-2xl ml-4"  />
            Notifications
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <MdOutlineInsertEmoticon className="text-2xl ml-4"/>
            Icons
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <FaMapMarked className="text-2xl ml-4"/>
            Maps
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <FaUserCog className="text-2xl ml-4"/>
            User Pages
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <BiSolidError className="text-2xl ml-4" />
            Error Pages
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <FaShoppingCart className="text-2xl ml-4" />
            E-Commerce
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <MdEmail className="text-2xl ml-4" />
            E-mail
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <SlCalender className="text-2xl ml-4" />
            Calendar
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <SiTodoist className="text-2xl ml-4" />
            Todo List
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <GrGallery  className="text-2xl ml-4"/>
            Gallery
          </a>
          <a
            href="#"
            className="flex items-center gap-4 rounded-sm px-3 py-2 text-base  text-gray-300 hover:bg-gray-700  border-l-4 border-transparent hover:border-yellow-400 hover:text-green-600"
          >
            <IoDocumentTextOutline className="text-2xl ml-4" />
            Documentations
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
