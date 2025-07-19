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
      if (error.response && error.response.status === 404) {
        // Якщо бекенд повернув 404 і ми викликаємо колекцію кемперів — вважаємо це "немає результатів"
        return { items: [], total: 0 };
      }
      // В інших випадках — звичайна помилка
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
