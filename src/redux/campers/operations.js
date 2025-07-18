import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "../../api/campersAPI";

export const fetchCampersThunk = createAsyncThunk(
  "campers/fetchAll",
  async (params, thunkAPI) => {
    try {
      const data = await fetchCampers(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperByIdThunk = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const data = await fetchCamperById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
