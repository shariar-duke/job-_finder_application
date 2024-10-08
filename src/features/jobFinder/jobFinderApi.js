import axios from "../../utils/axios";

// first we need to write a function to get all availabe jobs

export const getAllJobs = async (jobType = null) => {
    // Construct query string
    const queryString = jobType ? `?type_like=${jobType}` : '';
    const response = await axios.get(`/jobs${queryString}`);
    return response.data;
  };

// This function is for creating a new job post

export const addJobPost = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};

// This funtion is for editing a particular job posst

export const editJobPost = async (id, data) => {
  const response = await axios.put(`/jobs/${id}`, data);
  return response.data;
};

// this function will delete a  job post

export const deleteJobPost = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
