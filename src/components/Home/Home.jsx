// src/components/Home/Home.js
import JobItem from "../job/JobItem";
export default function Home() {
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
        <div className="mt-[24px]">
            <JobItem/>
            <JobItem/>
            <JobItem/>
        </div>
      </div>
    );
}
