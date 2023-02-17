import { SupplierRouteType } from "@/types";

class SupplierRoute {
  public data;

  constructor(_data: SupplierRouteType) {
    this.data = _data;
  }

  cityFromFullname(): string {
    return `${this.data.route.city_from.name}, ${this.data.route.city_from.province.name}`;
  }

  cityToFullname(): string {
    return `${this.data.route.city_to.name}, ${this.data.route.city_to.province.name}`;
  }
}

export default SupplierRoute;
