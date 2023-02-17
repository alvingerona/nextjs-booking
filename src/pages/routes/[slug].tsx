import { findRoute, globalData } from "@/api";
import BookingForm from "@/components/BookingForm";
import CurrentSearchHeading from "@/components/CurrentSearchHeading";
import useGlobalVars from "@/hooks/useGlobalVars";
import DefaultLayout from "@/layouts/DefaultLayout";
import Route from "@/models/Route";
import { setRoute } from "@/store/reducers/bookingSlice";
import { CityType, RouteType, SupplierRouteType } from "@/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type PropType = {
  route: RouteType;
  maxPassenger: number;
  cities: Array<CityType>;
  supplierRoutes: Array<SupplierRouteType>;
};

export default function Page({
  route,
  maxPassenger,
  cities,
  supplierRoutes,
}: PropType) {
  const dispatch = useDispatch();

  useGlobalVars({
    maxPassenger,
    cities,
    supplierRoutes,
  });

  useEffect(() => {
    dispatch(setRoute(route));
  }, [route]);

  return (
    <DefaultLayout>
      <CurrentSearchHeading />
      <BookingForm />
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }: any) {
  const data = await globalData();
  const [routeId] = params.slug.match(/(\d+)$/);

  // Pass post data to the page via props
  return { props: { ...data, route: await findRoute(Number(routeId)) } };
}

export async function getStaticPaths() {
  const allData = await globalData();

  const paths = allData.routes.map((routeRaw) => {
    const route = new Route(routeRaw);

    return {
      params: {
        slug: route.getSlug(),
      },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
