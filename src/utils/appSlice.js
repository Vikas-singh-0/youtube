import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});
console.log("appSlice", appSlice);

export default appSlice.reducer;
export const { hideMenu, toggleMenu } = appSlice.actions;
