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
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser,signupUser, logoutUser, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
