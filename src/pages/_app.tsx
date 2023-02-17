import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import "focus-visible";
import { wrapper } from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CurrencyModal from "@/components/CurrencyModal";
import { useEffect } from "react";
import { getItem } from "@/hooks/useStorage";
import { STORAGE_CURRENCY_SIGN } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInformationModal,
  setCurrencySign,
  setInformationModal,
  setShowCurrencyModal,
} from "@/store/reducers/globalSlice";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import InformationModal from "@/components/InformationModal";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const informationModal = useSelector(selectInformationModal);

  useEffect(() => {
    /**
     * load localStrage currency sign
     */

    (async () => {
      const c = await getItem(STORAGE_CURRENCY_SIGN);

      if (c) {
        dispatch(setCurrencySign(c));
      }
    })();
  }, []);

  useEffect(() => {
    /**
     * ======================================================
     *                      NProgress
     *    handles the page progress bar when route changes
     * ======================================================
     */
    const handleStart = () => {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <CurrencyModal onClose={() => dispatch(setShowCurrencyModal(false))} />
      <InformationModal
        open={!!(informationModal && informationModal.show)}
        title={informationModal ? informationModal.title : undefined}
        body={informationModal ? informationModal.body : ""}
        onClose={() =>
          dispatch(
            setInformationModal({
              ...(informationModal ? informationModal : {}),
              show: false,
            })
          )
        }
      />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(App);
