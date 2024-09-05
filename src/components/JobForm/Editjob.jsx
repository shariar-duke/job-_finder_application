
const Editjob = () => {
    return (
      <div className="text-white p-6 max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Add New Job</h1>
        <form className="space-y-4">
          {/* Job Title */}
          <div className="flex items-center">
            <label htmlFor="job-title" className="w-1/3 text-gray-300">Job Title</label>
            <input
              type="text"
              id="job-title"
              className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
              placeholder="Enter job title"
            />
          </div>
  
          {/* Job Type */}
          <div className="flex items-center">
            <label htmlFor="job-type" className="w-1/3 text-gray-300">Job Type</label>
            <select
              id="job-type"
              className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            >
              <option value="full-time">Full Time</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>
  
          {/* Salary */}
          <div className="flex items-center relative">
            <label htmlFor="salary" className="w-1/3 text-gray-300">Salary</label>
            <div className="w-2/3 relative">
              <span className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white font-bold px-2 py-[8px] rounded-md">
                BDT
              </span>
              <input
                type="number"
                id="salary"
                className="w-full pl-16 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
                placeholder="Enter salary"
              />
            </div>
          </div>
  
          {/* Deadline */}
          <div className="flex items-center">
            <label htmlFor="deadline" className="w-1/3 text-gray-300">Deadline</label>
            <input
              type="date"
              id="deadline"
              className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            />
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Editjob;
  