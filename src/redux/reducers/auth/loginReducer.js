// create authentication reducer

import { createSlice } from "@reduxjs/toolkit";
const loginReducer = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
  },
});
export const { loginRequest } = loginReducer.actions;
export default loginReducer.reducer;
