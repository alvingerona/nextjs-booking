import { globalData } from "@/api";
import { CityType, SupplierRouteType } from "@/types";
import useGlobalVars from "@/hooks/useGlobalVars";
import DefaultLayout from "@/layouts/DefaultLayout";
import InquiryForm from "@/components/InquiryForm";

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

  return (
    <DefaultLayout>
      <div className="bg-gray-200">
        <InquiryForm />
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const data = await globalData();

  // Pass post data to the page via props
  return { props: { ...data } };
}
