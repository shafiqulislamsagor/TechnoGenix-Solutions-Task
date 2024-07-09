import { IoWalletOutline } from "react-icons/io5";
import { Charts } from "../Charts/Charts";
// import { useEffect, useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

const EarningChart = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("/public/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // console.log(data)

  return (
    <div className="flex-1 w-[95%] mx-auto">
      <div className=" bg-gray-800 py-7 px-5 rounded-lg">
        <div className="flex flex-wrap  justify-between items-center">
          <div>
            <h2 className="text-xs text-gray-100">Dashboard</h2>
            <p className="text-sm text-gray-400">Overview of latest Month</p>
          </div>
          <div className="flex gap-4">
            <button className="text-sm text-gray-400 uppercase hover:text-green-600 hover:underline">
              Daily
            </button>
            <button className="text-sm text-gray-400 uppercase hover:text-green-600 hover:underline">
              Weekly
            </button>
            <button className="text-sm text-green-600 underline uppercase">
              Monthly
            </button>
            <button className="text-sm text-gray-400 uppercase hover:text-green-600 hover:underline">
              Yearly
            </button>
          </div>
          <div className="flex gap-4">
            <h2 className="flex items-center text-gray-100 gap-2">
              {" "}
              <div className="inline-block   w-2 h-2 rounded-full bg-[#4ef75c]"></div>{" "}
              Online
            </h2>
            <h2 className="flex items-center text-gray-100 gap-2">
              <div className="inline-block  w-2 h-2 rounded-full bg-[#f2ff40]"></div>{" "}
              Store
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center  gap-3 ">
          <div className="lg:w-1/3">
            <h2 className="text-3xl mt-10 text-gray-100">$6565454</h2>
            <p className="text-gray-400">Current Month Earnings</p>

            <h2 className="text-3xl mt-10 text-gray-100">52</h2>
            <p className="text-gray-400">Current Month Sales</p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-10"
            >
              Last Month Summary
            </button>
          </div>
          {/* chart  Hidden*/}
          <div className="flex-1">
            <Charts />
          </div>
        </div>
      </div>
      <div className=" bg-gray-800 py-7 px-5 mt-1 rounded-lg grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-1 justify-between">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full  flex flex-col justify-center bg-[#d82292]">
            <IoWalletOutline className="text-2xl mx-auto" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Wallet Balance</h1>
            <p className="text-sm font-bold text-gray-200">$200</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full  flex flex-col justify-center bg-[#3391e9]">
            <IoWalletOutline className="text-2xl mx-auto" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Referral Earning</h1>
            <p className="text-sm font-bold text-gray-200">$1500</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full  flex flex-col justify-center bg-[#8325cf]">
            <IoWalletOutline className="text-2xl mx-auto" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Estimate Sales</h1>
            <p className="text-sm font-bold text-gray-200">$2000</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full  flex flex-col justify-center bg-[#6b23f3]">
            <IoWalletOutline className="text-2xl mx-auto" />
          </div>
          <div>
            <h1 className="text-sm text-gray-400">Earning</h1>
            <p className="text-sm font-bold text-gray-200">$25400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningChart;
