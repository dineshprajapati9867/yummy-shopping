import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    signupUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('user');
    }
   
  },
});

export const { loginUser,signupUser, logoutUser,} = AuthSlice.actions;
export default AuthSlice.reducer;
