import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { globalData } from "@/api";
import { CityType, SupplierRouteType } from "@/types";
import useGlobalVars from "@/hooks/useGlobalVars";
import DefaultLayout from "@/layouts/DefaultLayout";
import SearchResult from "@/components/SearchResult";

type PropType = {
  maxPassenger: number;
  cities: Array<CityType>;
  supplierRoutes: Array<SupplierRouteType>;
};

export default function Home({
  maxPassenger,
  cities,
  supplierRoutes,
}: PropType) {
  useGlobalVars({
    maxPassenger,
    cities,
    supplierRoutes,
  });

  let supplier_routes = [];

  for (let supplier_id = 1; supplier_id <= 10; supplier_id++) {
    let route_ids = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 79) + 1
    );
    for (let i = 0; i < route_ids.length; i++) {
      let price = Math.floor(Math.random() * (15000 - 2000 + 1)) + 2000;
      supplier_routes.push({
        id: i + 1,
        supplier_id: supplier_id,
        price: price,
        route_id: route_ids[i],
      });
    }
  }

  return (
    <DefaultLayout>
      <>
        <Hero />
        <SearchResult />
        <SecondaryFeatures />
        <Reviews />
        <Faqs />
      </>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const data = await globalData();

  // Pass post data to the page via props
  return { props: { ...data } };
}
