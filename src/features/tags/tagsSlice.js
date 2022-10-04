import { getTags } from "./tagsApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create async thunk
export const fetchTagsAsync = createAsyncThunk(
  "tags/fetchTags",
  async () => {
    const tags = await getTags();
    return tags;
  }
);

// create video slice
const tagslice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsAsync.pending, (state, action) => {
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagslice.reducer;
