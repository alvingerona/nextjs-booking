import { combineReducers } from "@reduxjs/toolkit";
import { globalSlice } from "./globalSlice";
import { searchSlice } from "./searchSlice";
import { bookingSlice } from "./bookingSlice";

export default combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [searchSlice.name]: searchSlice.reducer,
  [bookingSlice.name]: bookingSlice.reducer,
});
