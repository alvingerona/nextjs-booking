import { createSlice } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
import { CityType, SupplierRouteType } from "@/types";
import { AppState } from "../store";
import { setItem } from "@/hooks/useStorage";
import { STORAGE_CURRENCY_SIGN } from "@/constants";

// Type for our state
export interface GlobalState {
  maxPassenger: number;
  cities: Array<CityType>;
  supplierRoutes: Array<SupplierRouteType>;
  currencySign: string;
  showCurrencyModal: boolean;
  informationModal: {
    title?: string;
    body: string;
    show: boolean;
  } | null;
}

// Initial state
const initialState: GlobalState = {
  maxPassenger: 0,
  cities: [],
  supplierRoutes: [],
  currencySign: "PHP",
  showCurrencyModal: false,
  informationModal: null,
};

// Actual Slice
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCities(state, action) {
      state.cities = action.payload;
    },

    setMaxPassenger(state, action) {
      state.maxPassenger = action.payload;
    },

    setSupplierRoutes(state, action) {
      state.supplierRoutes = action.payload;
    },

    setCurrencySign(state, action) {
      state.currencySign = action.payload;

      setItem(STORAGE_CURRENCY_SIGN, state.currencySign);
    },

    setShowCurrencyModal(state, action) {
      state.showCurrencyModal = action.payload;
    },

    setInformationModal(state, action) {
      state.informationModal = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.global,
        };
      },
    },
  },
});

export const {
  setCities,
  setMaxPassenger,
  setSupplierRoutes,
  setCurrencySign,
  setShowCurrencyModal,
  setInformationModal,
} = globalSlice.actions;

export const selectCities = (state: AppState) => state.global.cities;
export const selectMaxPassenger = (state: AppState) =>
  state.global.maxPassenger;
export const selectSupplierRoutes = (state: AppState) =>
  state.global.supplierRoutes;
export const selectCurrencySign = (state: AppState) =>
  state.global.currencySign;

export const selectShowCurrencyModal = (state: AppState) =>
  state.global.showCurrencyModal;

export const selectInformationModal = (state: AppState) =>
  state.global.informationModal;

export default globalSlice.reducer;
