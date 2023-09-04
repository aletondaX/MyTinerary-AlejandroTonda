import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const getCities = createAsyncThunk("getCities", async () => {
  try {
    const response = await fetch("http://localhost:4000/api/cities");
    const json = await response.json();
    let data = json.response;
    return data;

  } catch (error) {
    console.log(error);
    return [];
  }
})

export const filterCities = createAction("filterCities", (input) => {
  // console.log(input);
  return {
    payload : input
  }
})

export const getCity = createAsyncThunk("getCity", async (id) => {
  try {
    const response = await fetch("http://localhost:4000/api/cities/" + id);
    const json = await response.json();
    let data = json.response;
    // console.log(data);
    return data;

  } catch (error) {
    console.log(error);
    return {};
  }
});