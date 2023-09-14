import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, logout, signup } from "../actions/authAction.js";

const initialState = {
  user: {},
  token: null,
  isLogged: false
}

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(login, (state, action) => {
    const newState = { ...state, ...action.payload }
    return newState;
  })
    .addCase(signup, (state, action) => {
      const newState = { ...state, ...action.payload }
      return newState;
    })
    .addCase(authenticate.fulfilled, (state, action) => {
      const newState = { ...state, ...action.payload }
      return newState;
    })
    .addCase(logout, (state, action) => {
      const newState = { ...state, ...action.payload }
      return newState;
    })
})

export default authReducer;