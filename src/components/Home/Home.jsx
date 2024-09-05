import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  searchJobName,
  showSalaryOrder,
} from "../../features/jobFinder/jobFinderSlice.js";
import JobItem from "../job/JobItem";

export default function Home() {
  const [jobTitle, setJobTitle] = useState(""); // State for search input
  const [salaryOrder, setSalaryOrder] = useState("default"); // State for select box

  const dispatch = useDispatch();
  const { isLoading, isError, jobs, jobFilter } = useSelector(
    (state) => state.job
  );

  // Fetch jobs whenever jobTitle or salaryOrder changes
  useEffect(() => {
    dispatch(searchJobName(jobTitle)); // Update job filter in the Redux store
    dispatch(showSalaryOrder(salaryOrder)); // Update salary order in the Redux store
    dispatch(fetchJobs()); // Fetch jobs based on updated filters
  }, [dispatch, jobTitle, salaryOrder]);

  console.log("The job Filter option is", jobFilter);

  // Decide what UI to render
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
        {jobs
          .filter((job) =>
            job.title.toLowerCase().includes(jobFilter.jobTitle.toLowerCase())
          )    .sort((a, b) => {
            const salaryA = parseFloat(a.salary); // Convert salary to number
            const salaryB = parseFloat(b.salary); // Convert salary to number

            if (jobFilter.jobSalaryOrder === "salary-low-to-high") {
              return salaryA - salaryB;
            } else if (jobFilter.jobSalaryOrder === "salary-high-to-low") {
              return salaryB - salaryA;
            } else {
              return 0; // No sorting
            }
          })
          .map((job) => (
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
            value={jobTitle} // Bind value to state
            onChange={(e) => setJobTitle(e.target.value)} // Update state on change
            className="w-48 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <select
            value={salaryOrder} // Bind value to state
            onChange={(e) => setSalaryOrder(e.target.value)} // Update state on change
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
      {/* Job list */}
      <div className="mt-[24px]">{content}</div>
    </div>
  );
}
