import { BsFiletypeDocx } from "react-icons/bs";
import { FaHandshake, FaRegCommentAlt } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";
import { RiArticleFill } from "react-icons/ri";

const Activities = () => {
  return (
    <div className="w-[340px] mx-auto bg-gray-800 px-3 md:px-5 py-9 rounded-lg">
      <h2 className="text-gray-200">Recent Activities</h2>
      <div className="flex flex-col justify-around gap-4 h-full">
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-sm text-gray-400 w-20">40 Min Ago</h5>
          <div className="h-9 w-9 rounded-full  flex flex-col justify-center bg-[#dd4343]">
            <LuCheckCircle className="text-xl mx-auto text-gray-300" />
          </div>
          <div className="space-y-1 w-40">
            <h2 className="text-lg text-gray-300">Task Updated</h2>
            <p className="text-sm text-gray-400">Nikolai Updated a Task</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-sm text-gray-400 w-20">1 day Ago</h5>
          <div className="h-9 w-9 rounded-full  flex flex-col justify-center bg-[#7a2fdb]">
            <FaHandshake className="text-xl mx-auto text-gray-300" />
          </div>
          <div className="space-y-1 w-40">
            <h2 className="text-lg text-gray-300">Deal Added</h2>
            <p className="text-sm text-gray-400">Panshi Updated a Task</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-sm text-gray-400 w-20">2 day Ago</h5>
          <div className="h-9 w-9 rounded-full  flex flex-col justify-center bg-[#1d88a8]">
            <RiArticleFill className="text-xl mx-auto text-gray-300" />
          </div>
          <div className="space-y-1 w-40">
            <h2 className="text-lg text-gray-300">Published Article</h2>
            <p className="text-sm text-gray-400">Sanshi Updated a Article</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-sm text-gray-400 w-20">45 Min Ago</h5>
          <div className="h-9 w-9 rounded-full  flex flex-col justify-center bg-[#9e861b]">
            <BsFiletypeDocx className="text-xl mx-auto text-gray-300" />
          </div>
          <div className="space-y-1 w-40">
            <h2 className="text-lg text-gray-300">Dock Updated</h2>
            <p className="text-sm text-gray-400">Manshi Updated a Dock</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-sm text-gray-400 w-20">10 Min Ago</h5>
          <div className="h-9 w-9 rounded-full  flex flex-col justify-center bg-[#22a337]">
            <FaRegCommentAlt className="text-xl mx-auto text-gray-300" />
          </div>
          <div className="space-y-1 w-40">
            <h2 className="text-lg text-gray-300">Replyed Comment</h2>
            <p className="text-sm text-gray-400">Fanshi Added a Comment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
