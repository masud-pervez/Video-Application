import { getVideos } from "./videosApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create async thunk
export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    const videos = await getVideos(tags, search);
    return videos;
  }
);

// create video slice
const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state, action) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
