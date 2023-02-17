import { selectMaxPassenger } from "@/store/reducers/globalSlice";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

export const PassengerSelect = ({
  onChange,
  controlClassName = "react-select-control",
}: {
  onChange: (_v: any) => void;
  controlClassName?: string;
}) => {
  const maxPassenger = useSelector(selectMaxPassenger);
  const passengerCountOpts = useMemo(() => {
    return Array.from({ length: maxPassenger }, (_, i: number) => i + 1).map(
      (n: number) => ({
        label: n,
        value: n,
      })
    );
  }, [maxPassenger]);

  return (
    <Select
      classNames={{
        control: () => controlClassName,
      }}
      id="passengers"
      classNamePrefix="select"
      defaultValue={{ value: 2, label: 2 }}
      isDisabled={false}
      isLoading={false}
      isClearable={false}
      isRtl={false}
      isSearchable={true}
      name="passengers"
      options={passengerCountOpts}
      onChange={onChange}
    />
  );
};
