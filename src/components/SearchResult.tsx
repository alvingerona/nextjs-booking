import SupplierRoute from "@/models/SupplierRoute";
import {
  selectMaxPassenger,
  selectSupplierRoutes,
} from "@/store/reducers/globalSlice";
import {
  selectCityIdFrom,
  selectCityIdTo,
  selectPassengers,
  setCityIdFrom,
  setCityIdTo,
  setPassengers,
} from "@/store/reducers/searchSlice";
import { UsersIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Currency from "./Currency";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import Route from "@/models/Route";
import Link from "next/link";

const SearchResult = () => {
  const dispatch = useDispatch();
  const supplierRoutes = useSelector(selectSupplierRoutes);
  const cityIdFrom = useSelector(selectCityIdFrom);
  const cityIdTo = useSelector(selectCityIdTo);
  const passengers = useSelector(selectPassengers);
  const filteredRoutes = useMemo(() => {
    return supplierRoutes.filter((r) => {
      let includeThis = true;

      if (cityIdTo && cityIdTo != r.route.city_id_to) {
        includeThis = false;
      }

      if (cityIdFrom && cityIdFrom != r.route.city_id_from) {
        includeThis = false;
      }

      if (
        (cityIdTo || cityIdFrom) &&
        passengers &&
        r.supplier.max_passengers < passengers
      ) {
        includeThis = false;
      }

      return includeThis;
    });
  }, [cityIdFrom, cityIdTo, passengers, supplierRoutes]);
  const handleReset = () => {
    dispatch(setCityIdTo(0));
    dispatch(setCityIdFrom(0));
    dispatch(setPassengers(2));
  };

  return (
    <>
      <div
        className="mx-auto pt-5 sm:px-6 md:max-w-5xl md:pt-8 lg:px-8"
        id="search-result"
      >
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <div className="border-b border-gray-300 px-4 py-5 pt-8 sm:px-6">
            <div className="grid grid-cols-12">
              <div className="col-span-11">
                <h3 className="text-3xl font-medium leading-6 text-gray-900 ">
                  Available Trips
                  <span className="ml-4 inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    {filteredRoutes.length == 1 ? "1 Record found" : null}
                    {filteredRoutes.length > 1
                      ? `${filteredRoutes.length} Record found`
                      : null}
                    {filteredRoutes.length == 0 ? "No Record found" : null}
                  </span>
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                  corrupti consectetur.
                </p>
              </div>

              <div className="col-span-1 text-right">
                {filteredRoutes.length < supplierRoutes.length ? (
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full border border-transparent bg-gray-400 p-2 text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                    onClick={handleReset}
                  >
                    <ArrowPathIcon
                      className="ml-auto h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <ul role="list" className="divide-y divide-gray-200">
            {filteredRoutes.map((supplierRoute, i: number) => {
              const model = new SupplierRoute(supplierRoute);
              const routeModel = new Route(supplierRoute.route);

              return (
                <li key={`${supplierRoute.id}-${i}`}>
                  <Link
                    href={
                      routeModel.getPath() +
                      `?supplier-route=${supplierRoute.id}`
                    }
                    className="block hover:bg-gray-50"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                          <div className="flex text-sm">
                            <p className="mr-1 truncate font-medium text-indigo-600">
                              {model.cityFromFullname()}
                            </p>
                            <span>-</span>
                            <p className="ml-1 truncate font-medium text-indigo-600">
                              {model.cityToFullname()}
                            </p>
                          </div>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-500">
                              <UsersIcon
                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <p>
                                Upto{" "}
                                <span>
                                  {supplierRoute.supplier.max_passengers}
                                </span>{" "}
                                passengers
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                          <div className="flex -space-x-1 ">
                            <Currency price={supplierRoute.price} />
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 flex-shrink-0">
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
