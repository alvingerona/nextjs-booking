import {
  setCities,
  setMaxPassenger,
  setSupplierRoutes,
} from "@/store/reducers/globalSlice";
import { CityType, SupplierRouteType } from "@/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type PropType = {
  maxPassenger: number;
  cities: Array<CityType>;
  supplierRoutes: Array<SupplierRouteType>;
};

/**
 * Attach global variables per page
 */
const useGlobalVars = ({ maxPassenger, cities, supplierRoutes }: PropType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCities(cities));
    dispatch(setMaxPassenger(maxPassenger));
    dispatch(setSupplierRoutes(supplierRoutes));
  }, [cities, maxPassenger]);
};

export default useGlobalVars;
