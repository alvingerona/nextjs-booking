import { RouteType, SupplierRouteType } from "@/types";
import { slugify } from "@/utils";

class Route {
  public data;

  constructor(_data: RouteType) {
    this.data = _data;
  }

  cityFromFullname(): string {
    return `${this.data.city_from.name}, ${this.data.city_from.province.name}`;
  }

  cityToFullname(): string {
    return `${this.data.city_to.name}, ${this.data.city_to.province.name}`;
  }

  getSlug() {
    return slugify(
      "from-" +
        this.data.city_from.name +
        "-" +
        this.data.city_from.province.name +
        "-to-" +
        this.data.city_to.name +
        "-" +
        this.data.city_to.province.name +
        "-" +
        this.data.id
    );
  }

  getPath() {
    return `/routes/${this.getSlug()}`;
  }
}

export default Route;
