import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

// createAsyncThunk

// {type: "Job/fetch/pending", payload:undefined }
// {type: "Job/fetch/fulfilled", payload:data }
// {type: "Job/fetch/rejected", payload:"error_message" }

const FetchData = createAsyncThunk(
  // action : type, payload
  "Job/fetch",
  async (args, thunkAPI) => {
    try {
      const response = await fetch(`/api/jobs/api?limit=${args}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const slicer1 = createSlice({
  name: "slice1",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(FetchData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default slicer1.reducer;
export { FetchData };
