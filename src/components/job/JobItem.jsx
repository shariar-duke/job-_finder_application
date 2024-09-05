
import { FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";

export default function JobItem() {
  return (
    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg">
      {/* Title and Buttons */}
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold text-gray-100">Backend End Developer</h2>
        <div className="flex space-x-2">
          <button className="bg-sky-400 text-gray-200 py-2 rounded flex items-center hover:bg-sky-500 w-[90px] px-[20px]">
            <FaEdit size={18} className="mr-1" /> Edit
          </button>
          <button className="bg-orange-500 text-gray-200 py-2 rounded flex items-center hover:bg-orange-600 w-[90px] px-[10px]">
            <FaTrash className="mr-1" /> Delete
          </button>
        </div>
      </div>

      <div className="mt-[20px] flex gap-[16px] items-center">
        <li className="flex items-center text-gray-300 rounded-md">
          <span className="block w-3 h-3 bg-red-400 mr-2 rounded-full"></span>
          <p className="cursor-pointer">Internship</p>
        </li>

        <p className="text-md font-medium">BDT 400,000</p>
        <div className="flex items-center space-x-2 text-gray-300">
          <FaCalendarAlt />
          <p>Closing on 2022-12-31</p>
        </div>
      </div>
    </div>
  );
}
