import { selectFields, selectRoute } from "@/store/reducers/bookingSlice";
import { selectSupplierRoutes } from "@/store/reducers/globalSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment";

const useCheckAvailability = () => {
  const router = useRouter();
  const supplierRouteId = router.query["supplier-route"];
  const supplierRoutes = useSelector(selectSupplierRoutes);
  const bookingFormFields = useSelector(selectFields);
  const bookingRoute = useSelector(selectRoute);
  const q = useQuery(["useCheckAvailability"], {
    queryFn: async () => {
      return supplierRoutes
        .filter((r) => {
          if (!bookingFormFields.pickupDate) {
            return false;
          }

          if (!bookingFormFields.pickupTime) {
            return false;
          }

          if (!bookingFormFields.passengers) {
            return false;
          }

          if (!bookingRoute || bookingRoute.id != r.route_id) {
            return false;
          }

          if (bookingFormFields.pickupDate && bookingFormFields.pickupTime) {
            const duration = moment.duration(
              moment(
                bookingFormFields.pickupDate +
                  " " +
                  bookingFormFields.pickupTime
              ).diff(moment())
            );
            const hoursDiff = duration.asHours();

            if (hoursDiff < 42) {
              return false;
            }
          }

          if (
            Number(supplierRouteId) &&
            Number(supplierRouteId) > 0 &&
            Number(supplierRouteId) != r.id
          ) {
            /**
             * When supplier-route is present in query param but don't match r.id
             * then skip this.
             */
            return false;
          }

          if (bookingFormFields.passengers > r.supplier.max_passengers) {
            /**
             * when max_passenger is less than the user selected passengers then skip it
             */
            return false;
          }

          return true;
        })
        .sort(function (a, b) {
          /**
           * Sort from lowest
           */
          return a.price - b.price;
        });
    },
    enabled: false,
    initialData: [],
  });

  useEffect(() => {
    if (!q.isLoading) {
      q.refetch();
    }
  }, [supplierRoutes, bookingFormFields, q.isLoading]);

  return {
    ...q,
    /**
     * When supplierRouteId is not blank
     */
    supplierRoute:
      supplierRouteId && Number(supplierRouteId) > 0
        ? supplierRoutes.find((r) => r.id === Number(supplierRouteId))
        : null,
  };
};

export default useCheckAvailability;
