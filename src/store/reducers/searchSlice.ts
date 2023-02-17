import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@/store/store";
import { HYDRATE } from "next-redux-wrapper";

/**
 * This only holds the search query/criteria
 * not the result
 */

// Type for our state
export interface SearchState {
  cityIdFrom: number;
  cityIdTo: number;
  passengers: number;
}

// Initial state
const initialState: SearchState = {
  cityIdFrom: 0,
  cityIdTo: 0,
  passengers: 2,
};

// Actual Slice
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCityIdFrom(state, action) {
      state.cityIdFrom = action.payload;
    },

    setCityIdTo(state, action) {
      state.cityIdTo = action.payload;
    },

    setPassengers(state, action) {
      state.passengers = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.search,
        };
      },
    },
  },
});

export const { setCityIdFrom, setCityIdTo, setPassengers } =
  searchSlice.actions;

export const selectCityIdFrom = (state: AppState) => state.search.cityIdFrom;
export const selectCityIdTo = (state: AppState) => state.search.cityIdTo;
export const selectPassengers = (state: AppState) => state.search.passengers;

export default searchSlice.reducer;
