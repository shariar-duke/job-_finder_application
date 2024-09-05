// src/components/Home/Home.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobFinder/jobFinderSlice.js";
import JobItem from "../job/JobItem";
export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, isError, jobs } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what UI to render
  let content = null;
  if (isLoading) {
    content = (
      <p className="text-[20px] text-red-500 font-bold mt-[10px] text-center">
        Loading
      </p>
    );
  } else if (isError) {
    content = (
      <p className="text-[20px] text-red-500 font-bold mt-[10px] text-center">
        Error Fetching Data
      </p>
    );
  } else if (jobs.length === 0) {
    content = (
      <p className="text-[20px] text-red-500 font-bold mt-[10px] text-center">
        Not Enough Data Available
      </p>
    );
  } else {
    content = (
      <div>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    );
  }
  return (
    <div className="text-white p-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-bold text-[32px]">All Available Jobs</h1>
        <div className="flex gap-4 items-center">
          <input
            type="search"
            className="w-48 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <select
            className="w-48 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="salary"
            id="salary"
          >
            <option value="default">Default</option>
            <option value="salary-low-to-high">Salary (Low to High)</option>
            <option value="salary-high-to-low">Salary (High to Low)</option>
          </select>
        </div>
      </div>
      {/* job list  */}
      <div className="mt-[24px]">{content}</div>
    </div>
  );
}
