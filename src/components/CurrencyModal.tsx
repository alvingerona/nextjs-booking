import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrencySign,
  selectShowCurrencyModal,
  setCurrencySign,
} from "@/store/reducers/globalSlice";

type CurrencyType = {
  name: string;
  subLabel: string;
  sign: string;
  rate: number;
};

export const currencies: Array<CurrencyType> = [
  {
    name: "USD",
    subLabel: "US Dollars",
    sign: "$",
    rate: 0.018,
  },
  {
    name: "PHP",
    subLabel: "Philippine Peso",
    sign: "₱",
    rate: 1,
  },
  {
    name: "EUR",
    subLabel: "EURO",
    sign: "€",
    rate: 0.017,
  },
  {
    name: "JPY",
    subLabel: "Japanese Yen",
    sign: "¥",
    rate: 2.43,
  },
];

export default function CurrencyModal({ onClose }: { onClose: () => void }) {
  const open = useSelector(selectShowCurrencyModal);
  const [selected, setSelected] = useState<string | null>(null);
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();
  const storeCurrency = useSelector(selectCurrencySign);

  useEffect(() => {
    setSelected(storeCurrency);
  }, [open, storeCurrency]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Select Currency
                    </Dialog.Title>
                    <div className="mt-2">
                      <div>
                        <div className="mt-6 flow-root">
                          <ul
                            role="list"
                            className="-my-5 divide-y divide-gray-200"
                          >
                            {currencies.map((currency, i: number) => (
                              <li
                                key={i}
                                className="cursor-pointer py-4"
                                onClick={() => setSelected(currency.name)}
                              >
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                    {/* <img
                                      className="h-8 w-8 rounded-full"
                                      src={person.imageUrl}
                                      alt=""
                                    /> */}
                                  </div>
                                  <div className="min-w-0 flex-1 text-left">
                                    <p className="truncate text-sm font-medium text-gray-900">
                                      {currency.name}
                                    </p>
                                    <p className="truncate text-sm text-gray-500">
                                      ({currency.sign}) {currency.subLabel}
                                    </p>
                                  </div>
                                  <div>
                                    {selected &&
                                    selected.toLowerCase() ==
                                      currency.name.toLowerCase() ? (
                                      <span className="inline-flex h-7 w-7 items-center rounded-full border border-cyan-500 bg-cyan-500 px-1 py-1 text-sm font-medium leading-5 text-white shadow-sm hover:bg-gray-50">
                                        <CheckIcon
                                          className="h-5 w-5 text-white"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 sm:col-start-2 sm:text-sm"
                    onClick={() => {
                      dispatch(setCurrencySign(selected));
                      onClose();
                    }}
                    disabled={
                      !!(
                        selected &&
                        storeCurrency.toLowerCase() === selected.toLowerCase()
                      )
                    }
                  >
                    Apply Change
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => onClose()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
