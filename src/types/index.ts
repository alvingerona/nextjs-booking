export type ProvinceType = {
  name: string;
  id: number;
};

export type SupplierType = {
  daily_limit: number;
  email: string;
  id: number;
  is_active: boolean;
  max_passengers: number;
  name: string;
  phone_number: string;
};

export type CityType = {
  id: number;
  name: string;
  province: ProvinceType;
};

export type RouteType = {
  city_id_from: number;
  city_id_to: number;
  short_duration: string;
  long_duration: string;
  id: number;
  city_from: CityType;
  city_to: CityType;
};

export type SupplierRouteType = {
  supplier_id: number;
  price: number;
  route_id: number;
  id: number;
  route: RouteType;
  supplier: SupplierType;
};
