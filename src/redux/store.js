import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducer";
import itineraryReducer from "./reducers/itineraryReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer : {
    cityReducer : cityReducer,
    itineraryReducer : itineraryReducer,
    authReducer : authReducer
  }
})

export default store;