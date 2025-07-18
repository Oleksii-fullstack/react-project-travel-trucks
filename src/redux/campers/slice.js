import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersThunk, fetchCamperByIdThunk } from "./operations";

const initialState = {
  items: [],
  page: 1,
  isLoading: false,
  error: null,
  total: 0,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // action.meta.arg.page - це той page, який передаємо
        if (action.meta.arg?.page && action.meta.arg.page > 1) {
          state.items = [...state.items, ...action.payload.items];
          state.page = action.meta.arg.page;
        } else {
          state.items = action.payload.items;
          state.page = 1;
        }
        state.total = action.payload.total;
      })
      .addCase(fetchCampersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCamperByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.current = action.payload;
      })
      .addCase(fetchCamperByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
