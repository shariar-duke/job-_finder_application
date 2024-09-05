import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createjob } from "../../features/jobFinder/jobFinderSlice";

const AddJob = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.job);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    type: "Internship",
    salary: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createjob(formData)).unwrap();
      navigate('/'); // Redirect to home page on success
    } catch (err) {
       console.error(err)
      // Error is handled by Redux slice and will be shown below
    }
  };


  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Job</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="flex items-center">
          <label htmlFor="title" className="w-1/3 text-gray-300">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            placeholder="Enter job title"
          />
        </div>

        {/* Job Type */}
        <div className="flex items-center">
          <label htmlFor="type" className="w-1/3 text-gray-300">Job Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-2/3 p-2 rounded-md bg-gray-700 text-white border border-gray-600"
          >
            <option value="Full Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
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
              name="salary"
              value={formData.salary}
              onChange={handleChange}
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
          >
            Submit
          </button>
        </div>

        {!isLoading && isError && (
        <div className="text-center">
          <p className="text-[18px] text-red-600 text-bold">
           Failed to post job
          </p>
        </div>
      )}
      </form>
    </div>
  );
};

export default AddJob;
