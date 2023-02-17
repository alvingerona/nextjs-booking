import Route from "@/models/Route";
import { selectRoute } from "@/store/reducers/bookingSlice";
import { ArrowRightIcon, PencilIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import QuestionButton from "./QuestionButton";

const CurrentSearchHeading = () => {
  const route = useSelector(selectRoute);
  const routeModel = useMemo(() => {
    if (route) {
      return new Route(route);
    }

    return null;
  }, [route]);
  return (
    <div className="border-b border-t border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4 md:flex">
            <div>
              <p className="mt-1 text-sm text-gray-500">Drive Destination</p>
              {routeModel ? (
                <h3 className="flex flex-col text-lg font-medium leading-6 text-gray-900 lg:flex-row">
                  <span> {routeModel.cityFromFullname()}</span>
                  <span className="flex">
                    <ArrowRightIcon
                      className="mr-3 mr-3 h-5 w-5 text-gray-900 lg:ml-3"
                      aria-hidden="true"
                    />
                    <span> {routeModel.cityToFullname()}</span>
                  </span>
                </h3>
              ) : null}
            </div>

            <div className="md:ml-6">
              <p className="mt-1 text-sm text-gray-500">
                Duration{" "}
                <QuestionButton
                  title={`Duration - ${route ? route.short_duration : ""}`}
                  body={route ? route.long_duration : ""}
                />
              </p>
              {route ? (
                <h3 className="flex text-lg font-medium leading-6 text-gray-900">
                  {route.short_duration}
                </h3>
              ) : null}
            </div>
          </div>

          <div className="ml-4 mt-4 flex-shrink-0">
            <Link
              href="/#search"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PencilIcon
                className="mr-3 h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
              Edit Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSearchHeading;
