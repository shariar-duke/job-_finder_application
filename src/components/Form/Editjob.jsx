import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeJob,
  editInactive,
} from "../../features/jobFinder/jobFinderSlice";

const EditJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, editingJob } = useSelector((state) => state.job);
  const { title, type, salary, deadline, id } = editingJob || {}; // Handle case where editingJob might be undefined

  const [formData, setFormData] = useState({
    title: title || "",
    type: type || "Internship",
    salary: salary || "",
    deadline: deadline || "",
  });

  // Effect to update formData when editingJob changes
  useEffect(() => {
    if (editingJob) {
      setFormData({
        title: title || "",
        type: type || "Internship",
        salary: salary || "",
        deadline: deadline || "",
      });
    }
  }, [editingJob, title, type, salary, deadline]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(changeJob({ id: id, data: formData })).unwrap();
      dispatch(editInactive());
      navigate("/");
    } catch (err) {
      console.error("Failed to update job:", err);
      // Optionally, handle the error further or set error state here
    }
  };

  // Check if editingJob is valid
  if (!editingJob || Object.keys(editingJob).length === 0) {
    return (
      <div className="text-white p-6 max-w-3xl mx-auto bg-gray-800 rounded-lg ">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-500">
          Please Select a Job to Edit
        </h1>
      </div>
    );
  }

  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-800 rounded-lg ">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Edit Job Description
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div className="flex items-center">
          <label htmlFor="title" className="w-1/3 text-gray-300">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            placeholder="Enter job title"
          />
        </div>

        {/* Job Type */}
        <div className="flex items-center">
          <label htmlFor="type" className="w-1/3 text-gray-300">
            Job Type
          </label>
          <select
            id="type"
            name="type"
            onChange={handleChange}
            value={formData.type}
            className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
          >
            <option value="full-time">Full Time</option>
            <option value="internship">Internship</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        {/* Salary */}
        <div className="flex items-center relative">
          <label htmlFor="salary" className="w-1/3 text-gray-300">
            Salary
          </label>
          <div className="w-2/3 relative">
            <span className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 text-white font-bold px-2 py-[8px] rounded-md">
              BDT
            </span>
            <input
              type="number"
              id="salary"
              name="salary"
              onChange={handleChange}
              value={formData.salary}
              className="w-full pl-16 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
              placeholder="Enter salary"
            />
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center">
          <label htmlFor="deadline" className="w-1/3 text-gray-300">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? "Updating..." : "Submit"}
          </button>
         
        </div>
        {!isLoading && isError && (
            <div className="text-center">
              <p className="text-[18px] text-red-600 text-bold text-center">
                Failed to Edit job post
              </p>
            </div>
          )}
      </form>
    </div>
  );
};

export default EditJob;
