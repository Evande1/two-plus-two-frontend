import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;