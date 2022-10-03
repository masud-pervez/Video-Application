import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videoSlice";

// console.log(videoReducer);
export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});
