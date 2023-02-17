import { STORAGE_BOOKING_INQUIRY } from "@/constants";
import useCheckAvailability from "@/hooks/useCheckAvailability";
import { setItem } from "@/hooks/useStorage";
import { selectFields, setFields } from "@/store/reducers/bookingSlice";
import { setShowCurrencyModal } from "@/store/reducers/globalSlice";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card1 } from "./Card/indx";
import Currency from "./Currency";
import { PassengerSelect } from "./FormFields";
import QuestionButton from "./QuestionButton";

const BookingForm = () => {
  const dispatch = useDispatch();
  const fields = useSelector(selectFields);
  const checkAvailability = useCheckAvailability();
  const canBook = useMemo(() => {
    if (
      checkAvailability.data.length > 0 &&
      fields.pickupAddress &&
      fields.pickupAddress != "" &&
      fields.dropOffAddress &&
      fields.dropOffAddress != ""
    ) {
      return true;
    }

    return false;
  }, [checkAvailability.data, fields]);
  const canMakeInquiry = useMemo(() => {
    return (
      !canBook &&
      fields.pickupAddress &&
      fields.pickupAddress != "" &&
      fields.dropOffAddress &&
      fields.dropOffAddress != ""
    );
  }, [canBook, fields]);

  const supplierRoute = useMemo(() => {
    return checkAvailability.data.length > 0 ? checkAvailability.data[0] : null;
  }, [checkAvailability.data]);

  return (
    <Card1
      title=" Booking Information"
      body="We want to assure you that your booking information will not be
    displayed publicly and will be kept private and secure."
    >
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Pickup Date/Time{" "}
                  <QuestionButton title="Pickup Date/Time" body="" />
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="gap-4 md:grid md:grid-cols-5 lg:grid-cols-6">
                    <div className="mt-1 sm:col-span-2 sm:mt-0 sm:mb-3 md:mb-0">
                      <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                        <label
                          htmlFor="pickup-date"
                          className="block text-xs font-medium text-gray-900"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="pickup-date"
                          id="pickup-date"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          onChange={(e) => {
                            dispatch(
                              setFields({
                                ...fields,
                                pickupDate: e.target.value,
                              })
                            );
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                        <label
                          htmlFor="pickup-time"
                          className="block text-xs font-medium text-gray-900"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          name="pickup-time"
                          id="pickup-time"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          onChange={(e) => {
                            dispatch(
                              setFields({
                                ...fields,
                                pickupTime: e.target.value,
                              })
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-6 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5 md:grid-cols-6">
                <label
                  htmlFor="passengers"
                  className="block text-sm font-medium text-gray-700 sm:col-span-2 sm:mt-px sm:pt-2"
                >
                  Number of passengers
                  <QuestionButton title="Number of passengers" body="" />
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0 md:col-span-2 lg:col-span-1">
                  <PassengerSelect
                    controlClassName="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      dispatch(
                        setFields({
                          ...fields,
                          passengers: e ? e.value : 0,
                        })
                      );
                    }}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="pickup-address"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Pickup address
                  <QuestionButton title="Pickup address" body="" />
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <textarea
                    id="pickup-address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      dispatch(
                        setFields({
                          ...fields,
                          pickupAddress: e.target.value,
                        })
                      );
                    }}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="drop-off-address"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Drop-off address
                  <QuestionButton title="Drop-off address" body="" />
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <textarea
                    id="drop-off-address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      dispatch(
                        setFields({
                          ...fields,
                          dropOffAddress: e.target.value,
                        })
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {canMakeInquiry ? (
          <div>
            <NoAvailable />
          </div>
        ) : null}

        <div className="pt-5">
          <div className="flex justify-end">
            {!checkAvailability.supplierRoute && canBook && supplierRoute ? (
              <TotalBlock price={supplierRoute.price} />
            ) : null}

            {checkAvailability.supplierRoute ? (
              <TotalBlock price={checkAvailability.supplierRoute.price} />
            ) : null}

            <button
              disabled={!canBook}
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
            >
              <CheckIcon
                className="mr-3 h-5 w-5 text-white"
                aria-hidden="true"
              />
              Book & Pay Now
            </button>
          </div>
        </div>
      </form>
    </Card1>
  );
};

export default BookingForm;

const NoAvailable = () => {
  const router = useRouter();
  const fields = useSelector(selectFields);
  const handleClick = async () => {
    await setItem(STORAGE_BOOKING_INQUIRY, {
      fields,
    });

    router.push("/make-inquiry");
  };

  return (
    <div className="mt-3 rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-yellow-700">
            We are not sure if we can provide a car and driver for your trip. We
            can check and get back to you within 24 hours.
          </p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <button
              className="whitespace-nowrap font-medium text-yellow-700 hover:text-yellow-600"
              onClick={handleClick}
            >
              Make Inquiry
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const TotalBlock = ({ price }: { price: number }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShowCurrencyModal(true));
  };

  return (
    <div className="mr-auto px-3 font-bold">
      <span className="mr-3">Total: </span>
      <Currency price={price} />

      <button
        className="text-md ml-5 font-normal text-cyan-500 underline"
        onClick={handleClick}
      >
        Change currency
      </button>
    </div>
  );
};
