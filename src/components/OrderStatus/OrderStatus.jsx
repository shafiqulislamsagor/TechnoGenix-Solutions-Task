import { MdAlarmAdd, MdDelete } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { LuFileWarning } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const OrderStatus = () => {
  return (
    <div className="bg-gray-800 pt-7 pb-2 px-5 rounded-lg flex-1 w-[95%] mx-auto">
      <h2 className="text-sm font-medium text-gray-100">Order Status</h2>
      <p className="text-sm font-medium text-gray-400">
        Overview of latest month
      </p>

      <div className="flex flex-col-reverse gap-4 md:flex-row justify-between mt-3">
        <div className="flex">
          <button className="flex items-center gap-1  text-gray-300 bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 ">
            <MdAlarmAdd className="text-xl" /> Add
          </button>
          <button className="text-gray-200 bg-gray-500 hover:bg-gray-700  font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 ">
            <MdDelete className="text-2xl" />
          </button>
          <button className="text-gray-200 bg-gray-500 hover:bg-gray-700  font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 ">
            <IoWarningOutline className="text-2xl" />
          </button>
          <button className="text-gray-200 bg-gray-500 hover:bg-gray-700  font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 ">
            <LuFileWarning className="text-2xl" />
          </button>
        </div>
        <div className="flex gap-3">
          <form className="flex items-center gap-2  mx-auto">
            <div className="w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-600  text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
                placeholder="Search branch name..."
                required
              />
            </div>
            <button
              type="submit"
              className="text-gray-200 bg-gray-500 hover:bg-gray-700  font-medium rounded-lg text-sm px-3 py-2 "
            >
              <CiSearch className="text-2xl" />
            </button>
          </form>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-400">
          <thead className="text-xs  uppercase  text-gray-200">
            <tr>
              <th scope="col" className="px-2 py-3 text-center">
                INVOICE
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                CUSTOMERS
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                FROM
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                PRICE
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-2 py-4 font-medium  whitespace-nowrap text-white text-center"
              >11245
              </th>
              <td className="px-2 py-4 text-center">Charly Dues</td>
              <td className="px-2 py-4 text-center">Russia</td>
              <td className="px-2 py-4 text-center">$2999</td>
              <td className="px-2 py-4 flex justify-center">
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center">Process</button>
              </td>
            </tr>
            <tr className="bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-2 py-4 font-medium  whitespace-nowrap text-white text-center"
              >11245
              </th>
              <td className="px-2 py-4 text-center">Charly Dues</td>
              <td className="px-2 py-4 text-center">Russia</td>
              <td className="px-2 py-4 text-center">$2999</td>
              <td className="px-2 py-4 flex justify-center">
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center">Process</button>
              </td>
            </tr>
            <tr className="bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-2 py-4 font-medium  whitespace-nowrap text-white text-center"
              >11245
              </th>
              <td className="px-2 py-4 text-center">Charly Dues</td>
              <td className="px-2 py-4 text-center">Russia</td>
              <td className="px-2 py-4 text-center">$2999</td>
              <td className="px-2 py-4 flex justify-center">
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center">Process</button>
              </td>
            </tr>
            <tr className="bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-2 py-2 font-medium  whitespace-nowrap text-white text-center"
              >11245
              </th>
              <td className="px-2 py-2 text-center">Charly Dues</td>
              <td className="px-2 py-2 text-center">Russia</td>
              <td className="px-2 py-2 text-center">$2999</td>
              <td className="px-2 py-2 flex justify-center">
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center">Process</button>
              </td>
            </tr>
            <tr className="bg-gray-800 border-gray-700">
              <th
                scope="row"
                className="px-2 py-4 font-medium  whitespace-nowrap text-white text-center"
              >11245
              </th>
              <td className="px-2 py-4 text-center">Charly Dues</td>
              <td className="px-2 py-4 text-center">Russia</td>
              <td className="px-2 py-4 text-center">$2999</td>
              <td className="px-2 py-4 flex justify-center">
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center">Process</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">Showing 1 to 20 entries</p>
        <div>
        <nav className="flex items-center gap-x-1">
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span aria-hidden="true" className="sr-only">Previous</span>
      </button>
      <div className="flex items-center gap-x-1">
        <button
          type="button"
          className="min-w-[18px] min-h-[18px] flex justify-center items-center  text-xs rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none border-neutral-700 text-gray-400 focus:bg-white/10"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          className="min-w-[18px] min-h-[18px] flex justify-center items-center  text-xs rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none border-neutral-700 text-gray-400 focus:bg-white/10"
          aria-current="page"
        >
          2
        </button>
        <button
          type="button"
          className="min-w-[18px] min-h-[18px] flex justify-center items-center border text-xs rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none border-neutral-700 text-white bg-red-500"
          aria-current="page"
        >
          3
        </button>
        <button
          type="button"
          className="min-w-[18px] min-h-[18px] flex justify-center items-center  text-xs rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none border-neutral-700 text-gray-400 focus:bg-white/10"
          aria-current="page"
        >
          4
        </button>
        <button
          type="button"
          className="min-w-[18px] min-h-[18px] flex justify-center items-center  text-xs rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none border-neutral-700 text-gray-400 focus:bg-white/10"
          aria-current="page"
        >
          5
        </button>
      </div>
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span aria-hidden="true" className="sr-only">Next</span>
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
