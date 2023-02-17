import { currencies } from "@/components/CurrencyModal";
import { CityType, RouteType, SupplierRouteType } from "@/types";
import { cities, routes, supplierRoutes } from "./fake-data";

export const findRoute = async (id: number): Promise<RouteType | undefined> => {
  return new Promise(async (resolve) => {
    setTimeout(async () => {
      const rr = await allRoutes();
      resolve(rr.find((r) => r.id === id));
    }, 1000);
  });
};

export const loadMaxPassengerCount = async (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(15);
    }, 1000);
  });
};

export const allRoutes = async (): Promise<Array<RouteType>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(routes as Array<RouteType>);
    }, 1000);
  });
};

export const allCities = async (): Promise<Array<CityType>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities());
    }, 1000);
  });
};

export const allSupplierRoutes = async (): Promise<
  Array<SupplierRouteType>
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(supplierRoutes as Array<SupplierRouteType>);
    }, 1000);
  });
};

/**
 * Load each API for global data that will be attach
 * to static props
 */
export const globalData = async (): Promise<{
  maxPassenger: number;
  cities: CityType[];
  supplierRoutes: SupplierRouteType[];
  routes: RouteType[];
}> => {
  return {
    maxPassenger: await loadMaxPassengerCount(),
    cities: await allCities(),
    supplierRoutes: await allSupplierRoutes(),
    routes: await allRoutes(),
  };
};

/**
 *
 * @returns the source is in PHP
 */
export const currencyConversion = async (
  price: number,
  currency: string
): Promise<number> => {
  return new Promise((resolve) => {
    const currencyObj = currencies.find((c) => c.name === currency);

    if (!currencyObj) {
      resolve(0);
    } else {
      resolve(currencyObj.rate * price);
    }
  });
};
