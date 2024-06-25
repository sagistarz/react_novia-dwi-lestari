import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, // Set initial state to false
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true; // Set isAuthenticated to true on successful login
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
