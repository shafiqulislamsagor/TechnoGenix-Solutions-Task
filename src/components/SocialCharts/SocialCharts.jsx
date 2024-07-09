
// import { PiGraduationCapBold } from "react-icons/pi";
import { Social } from "../Charts/SocialChart";

const SocialCharts = () => {

  return (
    <div className="w-[340px] mx-auto bg-gray-800 px-5 py-7 rounded-lg">
      <h5 className="text-sm text-gray-100">Traffic</h5>
      <div className="w-[260px] h-[320px] mx-auto">
        {/* Charts */}
        <Social/>
        {/* <div className="inline-block relative bottom-[180px] left-20">
          <div className="p-8 rounded-full  bg-gray-700">
          <PiGraduationCapBold className="text-4xl text-gray-300" />
          </div>
        </div> */}
      </div>
      <div className="flex justify-around items-center">
        <h2 className="text-center text-gray-400">
          <span className="text-2xl font-medium text-gray-100">33%</span> <br />{" "}
          <div className="inline-block  w-2 h-2 rounded-full bg-[#a727d1]"></div>{" "}
          Facebook
        </h2>
        <h2 className="text-center text-gray-400">
          <span className="text-2xl font-medium text-gray-100">55%</span> <br />{" "}
          <div className="inline-block  w-2 h-2 rounded-full bg-[#ff3838]"></div>{" "}
          Youtube
        </h2>
        <h2 className="text-center text-gray-400">
          <span className="text-2xl font-medium text-gray-100">12%</span> <br />{" "}
          <div className="inline-block  w-2 h-2 rounded-full bg-[#30adc9]"></div>{" "}
          Direct Search
        </h2>
      </div>
    </div>
  );
};

export default SocialCharts;
