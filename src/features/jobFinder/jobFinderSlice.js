import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJobPost, deleteJobPost, editJobPost, getAllJobs } from "./jobFinderApi";

const intialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  editingJob: {},
};

export const fetchJobs = createAsyncThunk(
  "jobFinder/fetchjobs",
  async () => {
    const jobs = await getAllJobs();
    return jobs;
  }
);

export const createjob = createAsyncThunk(
    "jobFinder/createjob",
    async (data) => {
      const job = await addJobPost(data);
      return job;
    }
  );

export const changeJob = createAsyncThunk(
    "jobFinder/changeJob",
    async ({ id, data }) => {
      const job = await editJobPost( id, data );
      return job;
    }
  );

export const removeJob = createAsyncThunk(
    "jobFinder/removeJob",
    async (id) => {
      const job = await deleteJobPost(id);
      return job;
    }
  );

  
  // now createing the slice for the job

const jobSlice = createSlice({
  name: "jobFinder",
  initialState: intialState,
  reducers:{
   editActive:(state, action)=> {
    state.editingJob = action.payload
   },
   editInactive: (state) => {
    state.editingJob = {};
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
        state.jobs = [];
      })
      .addCase(createjob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createjob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createjob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(changeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const indexToUpdate = state.jobs.findIndex(
          (t) => t.id === action.payload.id
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = state.jobs.filter(
          (t) => t.id !== action?.meta?.arg
        );
      })
      .addCase(removeJob.rejected, (state, action) => {
      
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});


export default jobSlice.reducer;
export const { editActive, editInactive } = jobSlice.actions;