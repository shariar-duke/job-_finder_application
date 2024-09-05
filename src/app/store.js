import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/jobFinder/jobFinderSlice";

export const store = configureStore({
    reducer : {
        job : jobReducer
    }
})