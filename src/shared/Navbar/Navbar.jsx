import { AiTwotoneSecurityScan } from "react-icons/ai";
import { IoMenu, IoSettingsOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto sm:pr-6 lg:pr-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden pl-3">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-700 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <IoMenu className="block h-6 w-6" />
            </button>
          </div>
          <div className="hidden w-[267px] md:flex items-center bg-custom-gradient h-full">
            <h2 className="mx-auto text-xl font-medium flex items-center gap-1">
              <AiTwotoneSecurityScan className="text-2xl" /> Dashboard
            </h2>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <div className="flex items-center ">
                  {/* Mobile menu button */}
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>

                    <IoMenu className="block h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
            >
              <h6 className="bg-red-600 text-[8px] absolute right-1 top-0 rounded-full h-auto w-3 text-white">1</h6>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
            >
              <h6 className="bg-red-600 text-[8px] absolute right-0 top-0 rounded-full h-auto w-3 text-white">5</h6>
              <span className="sr-only">View mail</span>
              <MdMailOutline className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm "
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img
                className="h-7 w-7 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <IoSettingsOutline className="h-6 w-6"/>
              
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {/* <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div> */}
    </nav>
  );
};

export default Navbar;
