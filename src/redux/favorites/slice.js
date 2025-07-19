import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((favId) => favId !== id);
      } else {
        state.items.push(id);
      }
      // збереження в localStorage
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    setFavorites(state, action) {
      state.items = action.payload;
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
