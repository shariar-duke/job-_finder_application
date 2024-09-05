/* eslint-disable react/prop-types */

import { FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";

export default function JobItem({ job }) {
  const { title, type, salary, deadline } = job;
  return (
    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg">
      {/* Title and Buttons */}
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold text-gray-100">{title}</h2>
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
          <span
            className={`block w-3 h-3 ${
              type === "Internship"
                ? "bg-red-500"
                : type === "Full Time"
                ? "bg-orange-500"
                : type === "Remote"
                ? "bg-teal-400"
                : "bg-red-400"
            } mr-2 rounded-full`}
          ></span>
          <p className="cursor-pointer">{type}</p>
        </li>

        <p className="text-md font-medium">BDT {salary}</p>
        <div className="flex items-center space-x-2 text-gray-300">
          <FaCalendarAlt />
          <p>Closing on {deadline}</p>
        </div>
      </div>
    </div>
  );
}
