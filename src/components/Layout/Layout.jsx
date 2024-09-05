import { FaBriefcase, FaHome, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { fetchJobs } from "../../features/jobFinder/jobFinderSlice.js";

const Layout = () => {
  const dispatch = useDispatch();

  // Handle filter selection
  const handleFilterClick = (filter) => {
  
    dispatch(fetchJobs(filter)); // Fetch jobs based on selected filter
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-800 p-4 flex flex-col justify-between">
        <div>
          <div className="text-white text-xl font-bold mb-8">
            <img src="/logo.svg" alt="Logo" />
          </div>
          <div>
            <div className="flex items-center text-gray-50 font-bold mb-4">
              <FaBriefcase className="text-gray-400 mr-2" />
              <p  onClick={() => handleFilterClick()} className="cursor-pointer">All Available Jobs</p>
            </div>
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => handleFilterClick("Internship")}
                className="flex items-center text-gray-200 bg-gray-700 p-2 rounded-md cursor-pointer"
              >
                <span className="block w-3 h-3 bg-red-500 mr-2 rounded-full"></span>
                <p>Internship</p>
              </li>
              <li
                onClick={() => handleFilterClick("Full Time")}
                className="flex items-center text-gray-200 bg-gray-700 p-2 rounded-md cursor-pointer"
              >
                <span className="block w-3 h-3 bg-orange-500 mr-2 rounded-full"></span>
                <p>Full Time</p>
              </li>
              <li
                onClick={() => handleFilterClick("Remote")}
                className="flex items-center text-gray-200 bg-gray-700 p-2 rounded-md cursor-pointer"
              >
                <span className="block w-3 h-3 bg-teal-400 mr-2 rounded-full"></span>
                <p>Remote</p>
              </li>
            </ul>
          </div>

          <div className="flex items-center text-gray-50 font-bold mt-4">
            <FaPlus className="text-gray-400 mr-2" />
            <Link to="/add-job">
              <p className="cursor-pointer">Add a New Job</p>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex-col justify-center items-start p-8 h-[96vh] overflow-y-auto">
        {/* for a navbar */}
        <Link to="/">
          <div className="flex items-center h-12">
            <FaHome size={24} className="text-gray-400" />
            <p className="text-[20px] text-gray-400 font-medium ml-2">Home</p>
          </div>
        </Link>

        <main className="bg-gray-800 text-white p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
