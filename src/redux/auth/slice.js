import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // Register

      .addCase(register.pending, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })

      // Login

      .addCase(logIn.pending, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })

      // Logout refresh дописати
      .addCase(logOut.pending, (state, action) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
