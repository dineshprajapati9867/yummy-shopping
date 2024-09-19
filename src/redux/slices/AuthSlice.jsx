import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    isLogged: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); 
    },
    isRegister: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); 
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("user"); 
    },
  },
});

export const {  isLogged, isRegister, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
