import { currencyConversion } from "@/api";
import { selectCurrencySign } from "@/store/reducers/globalSlice";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Currency = ({ price }: { price: number }) => {
  const storeCurrency = useSelector(selectCurrencySign);
  /**
   * Convert base on active currency
   */
  const [converted, setConverted] = useState(price);

  /**
   * format the price base on active currency
   */
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: storeCurrency,
    }).format(parseFloat(converted.toFixed(12)));
  }, [converted, storeCurrency]);

  useEffect(() => {
    (async () => {
      setConverted(await currencyConversion(price, storeCurrency));
    })();
  }, [storeCurrency, price]);

  return <>{formattedPrice}</>;
};

export default Currency;
