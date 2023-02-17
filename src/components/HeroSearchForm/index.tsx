import { selectCities } from "@/store/reducers/globalSlice";
import {
  setCityIdFrom,
  setCityIdTo,
  setPassengers,
} from "@/store/reducers/searchSlice";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { PassengerSelect } from "../FormFields";

const HeroSearchForm = () => {
  const [fields, setFields] = useState({
    cityIdFrom: 0,
    cityIdTo: 0,
    passengers: 2,
  });
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const citiesTo = useMemo(() => {
    return cities.map((city) => ({
      label: `${city.name}, ${city.province.name}`,
      value: city.id,
      isDisabled: fields.cityIdFrom === city.id,
    }));
  }, [cities, fields.cityIdFrom]);
  const citiesFrom = useMemo(() => {
    return cities.map((city) => ({
      label: `${city.name}, ${city.province.name}`,
      value: city.id,
      isDisabled: fields.cityIdTo === city.id,
    }));
  }, [cities, fields.cityIdTo]);

  const handleClick = () => {
    dispatch(setCityIdTo(fields.cityIdTo ? fields.cityIdTo : 0));
    dispatch(setCityIdFrom(fields.cityIdFrom ? fields.cityIdFrom : 0));
    dispatch(setPassengers(fields.passengers ? fields.passengers : 2));

    const element = document.getElementById("search-result");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="form-label block">
            From
          </label>
          <div className="mt-1">
            <Select
              classNames={{
                control: () => "react-select-control",
              }}
              id="origin"
              classNamePrefix="select"
              defaultValue={null}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isRtl={false}
              isSearchable={true}
              name="origin"
              options={citiesFrom}
              placeholder="Select Origin"
              onChange={(e) => {
                setFields({
                  ...fields,
                  cityIdFrom: e ? e.value : 0,
                });
              }}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="form-label block">
            To
          </label>
          <div className="mt-1">
            <Select
              classNames={{
                control: () => "react-select-control",
              }}
              id="destination"
              classNamePrefix="select"
              defaultValue={null}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isRtl={false}
              isSearchable={true}
              name="destination"
              options={citiesTo}
              placeholder="Select Destination"
              onChange={(e) => {
                setFields({
                  ...fields,
                  cityIdTo: e ? e.value : 0,
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 md:mt-6">
        <div className="col-span-12 md:col-span-2"></div>
        <div className="col-span-12 md:col-span-2">
          <label htmlFor="email" className="form-label block">
            Number of passengers
          </label>
          <div className="mt-1">
            <PassengerSelect
              onChange={(e) => {
                setFields({
                  ...fields,
                  passengers: e ? e.value : 0,
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          className="btn-primary-lg w-full justify-center"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default HeroSearchForm;
