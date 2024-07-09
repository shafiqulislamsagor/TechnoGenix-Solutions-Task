import { AiOutlineFundView } from "react-icons/ai";
import { GiSoundWaves } from "react-icons/gi";
import { MdOutlineWater } from "react-icons/md";
import { RxBarChart } from "react-icons/rx";

const StatusCard = () => {
  return (
    <div className="w-[95%] mx-auto md:w-full grid grid-cols-2 lg:grid-cols-4 gap-2 my-5">
      <div className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700   font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">
        <h2>Revinew Status</h2>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-200 my-3">
          <div>
            <MdOutlineWater className="text-7xl" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl">$ 345</h2>
            <p className="text-gray-300">jan 02 - jan 23</p>
          </div>
        </div>
      </div>
      <div className="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700   font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">
        <h2> Page View</h2>
        <div className="flex flex-col  md:flex-row-reverse justify-between items-center md:items-start  text-gray-200 my-3">
          <div>
            <AiOutlineFundView className="text-7xl" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl">$ 345</h2>
          </div>
        </div>
      </div>
      <div className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700   font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">
        <h2>Bonus Rate</h2>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center text-gray-200 my-3">
          <div>
            <GiSoundWaves className="text-7xl" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl mb-2">$ 345</h2>
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full"
              >
                <option selected disabled>
                  Monthly
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700   font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">
        <h2>Revinew Status</h2>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-200 my-3">
          <div>
            <RxBarChart className="text-7xl" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl">$ 345</h2>
            <p className="text-gray-300">jan 02 - jan 23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
