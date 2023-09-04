import { createReducer } from "@reduxjs/toolkit"
import { getItineraries } from "../actions/itineraryAction";

const initialState = {
  itineraries: []
}

const itineraryReducer = createReducer(initialState, (builder) => {
  builder.addCase(getItineraries.fulfilled, (state, action) => {
    const newState = {
      itineraries: action.payload
    };
    return newState;
  })
    .addCase(getItineraries.pending, (state, action) => {
      const newState = {
        itineraries: undefined
      };
      return newState;
    })
})

export default itineraryReducer;