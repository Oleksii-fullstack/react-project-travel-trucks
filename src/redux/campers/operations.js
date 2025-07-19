import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCamperById,
  fetchCampers,
  fetchCampersByIds,
} from "../../api/campersAPI";

export const fetchCampersThunk = createAsyncThunk(
  "campers/fetchAll",
  async (params = {}, thunkAPI) => {
    try {
      const data = await fetchCampers(params);
      return data;
    } catch (error) {
      if (
        error.response &&
        error.response.status === 404 &&
        error.config.url &&
        error.config.url.includes("/campers")
      ) {
        // Якщо це 404 і запит саме до колекції campers — «нічого не знайдено»
        return { items: [], total: 0, notFound: true };
      }
      // Інші помилки — реальна помилка
      return thunkAPI.rejectWithValue(
        error.message || "Something went wrong. Please try again later."
      );
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

export const fetchCampersByIdsThunk = createAsyncThunk(
  "campers/fetchByIds",
  async (ids, thunkAPI) => {
    try {
      const data = await fetchCampersByIds(ids);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
