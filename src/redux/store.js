import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducer";

const store = configureStore({
  reducer : {
    cityReducer : cityReducer
  }
})

export default store;