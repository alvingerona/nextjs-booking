import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { RouteType } from "@/types";

/**
 * This only holds the search query/criteria
 * not the result
 */

type FieldsType = {
  passengers: number;
  pickupDate: string | null;
  pickupTime: string | null;
  pickupAddress: string | null;
  dropOffAddress: string | null;
  supplierRouteId: number | null;
};

// Type for our state
export interface BookingState {
  fields: FieldsType;
  route: RouteType | null;
}

// Initial state
const initialState: BookingState = {
  fields: {
    passengers: 2,
    pickupDate: null,
    pickupTime: null,
    pickupAddress: null,
    dropOffAddress: null,
    supplierRouteId: null,
  },
  route: null,
};

// Actual Slice
export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setFields(
      state,
      action: {
        payload: FieldsType;
      }
    ) {
      state.fields = action.payload;
    },

    setRoute(
      state,
      action: {
        payload: RouteType | null;
      }
    ) {
      state.route = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.booking,
        };
      },
    },
  },
});

export const { setFields, setRoute } = bookingSlice.actions;

export const selectFields = (state: AppState) => state.booking.fields;
export const selectRoute = (state: AppState) => state.booking.route;

export default bookingSlice.reducer;
