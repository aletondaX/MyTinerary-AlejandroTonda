import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LS } from "../../LS";
import { toast } from "react-toastify";

export const login = createAction("login", (credentials) => {
  const reducerData = {
    user: credentials.userData,
    token: credentials.token,
    isLogged: true
  }
  LS.set("token", credentials.token);
  toast.success("Welcome again, " + credentials.userData.firstName + "!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
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
  //SOLO retomar la sesión si hay token en el storage
  if (LS.getText("token")) {
    // console.log("hay token en el storage");
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
    toast.success("Welcome again, " + json.userData.firstName + "!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    return reducerData
  }
});

export const logout = createAction("logout", () => {
  LS.clear();
  const reducerData = {
    user: {},
    token: null,
    isLogged: false
  }
  toast.info("Successfully logged out", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
  return {
    payload: reducerData
  }
});