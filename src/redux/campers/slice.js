import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCampersThunk,
  fetchCamperByIdThunk,
  fetchCampersByIdsThunk,
} from "./operations";

const initialState = {
  items: [],
  cache: {},
  total: 0,
  page: 1,
  isLoading: false,
  error: null,
  current: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.total = 0;
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
        // Додаємо у кеш ВСІ campers з payload.items
        action.payload.items.forEach((camper) => {
          state.cache[camper.id] = camper;
        });
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
        if (action.payload && action.payload.id) {
          state.cache[action.payload.id] = action.payload;
        }
      })
      .addCase(fetchCamperByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCampersByIdsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // action.payload — масив camper-ів
        state.items = action.payload;
        state.total = action.payload.length;
        action.payload.forEach((camper) => {
          state.cache[camper.id] = camper;
        });
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
