import { createAsyncThunk } from "@reduxjs/toolkit";

export const getItineraries = createAsyncThunk("getItineraries", async (id) => {
  try {
    const response = await fetch("http://localhost:4000/api/itineraries/city/" + id);
    const json = await response.json();
    let data = json.response;
    return data;

  } catch (error) {
    console.log(error);
    return [];
  }
})