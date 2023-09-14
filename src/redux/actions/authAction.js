import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LS } from "../../LS";

export const login = createAction("login", (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    isLogged: true
  }
  LS.set("token", credentials.token);
  return {
    payload: reducerData
  }
});

//Esta no la voy a usar
//José la hizo para loguearse automáticamente al registrarse
export const signup = createAction("signup", (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    isLogged: true
  }
  return {
    payload: reducerData
  }
});

export const authenticate = createAsyncThunk("authenticate", async () => {
  const token = LS.getText("token");
  // console.log(token);
  const response = await fetch("http://localhost:4000/api/auth/token", {
    headers: { Authorization: "Bearer " + token }
  })
  const json = await response.json();
  // console.log(json);
  const reducerData = {
    user: json.userData,
    isLogged: true
  }
  return reducerData
});

export const logout = createAction("logout", () => {
  const reducerData = {
    user: {},
    token: null,
    isLogged: false
  }
  return {
    payload: reducerData
  }
});