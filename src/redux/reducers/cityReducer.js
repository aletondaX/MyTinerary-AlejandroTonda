import { createReducer } from "@reduxjs/toolkit";
import { filterCities, getCities, getCity } from "../actions/cityAction";

const initialState = {
  cities: [],
  filteredCities: [],
  city: {}
}

const cityReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities.fulfilled, (state, action) => {
    const newState = {
      ...state,
      cities: action.payload,
      filteredCities: action.payload
    };
    return newState;
  })
    // .addCase(getCities.pending, (state, action) => {
    //   const newState = {...state, cities : action.payload};
    //   return newState;
    // })
    // .addCase(getCities.rejected, (state, action) => {
    //   const newState = {...state, cities : action.payload};
    //   return newState;
    // })
    .addCase(filterCities, (state, action) => {
      const input = action.payload;
      // console.log(input);
      if (input !== undefined && input !== "") {
        const filterResult = state.cities.filter(city => {
          return (
            city.city.toLowerCase().startsWith(input.toLowerCase()) ||
            city.country.toLowerCase().startsWith(input.toLowerCase())
          );
        })
        // console.log(filterResult);
        const newState = {
          ...state,
          filteredCities : filterResult
        };
        return newState;
      } else {
        const newState = {
          ...state,
          filteredCities : state.cities
        };
        return newState;
      }
    })
    .addCase(getCity.fulfilled, (state, action) => {
      // console.log(action.payload);
      const newState = {
        ...state,
        city: action.payload
      }
      return newState;
    })
    .addCase(getCity.pending, (state, action) => {
      // console.log(action.payload);
      const newState = {
        ...state,
        city: {}
      }
      return newState;
    })
});

export default cityReducer;