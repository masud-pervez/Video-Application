import { getVideo } from "./videoApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// create async thunk
export const fetchVideoAsync = createAsyncThunk(
  "video/fetchVideos",
  async (id) => {
    const video = await getVideo(id);
    return video;
  }
);

// create video slice
const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    likeVideo: (state, action) => {
      state.likes ++;
    },
    unlikeVideo: (state, action) => {
      state.unlikes -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoAsync.pending, (state, action) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(fetchVideoAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export const { likeVideo, unlikeVideo } = videoSlice.actions;

export default videoSlice.reducer;
