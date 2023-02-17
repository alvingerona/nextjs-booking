import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";

const DefaultLayout = ({
  children,
  metadescription = "Explore the beauty of the Philippines with ease using our reliable and comfortable charter services. Book now and let us take you on an unforgettable adventure through the stunning landscapes and vibrant culture of Philippine cities.",
  title = "Charter Services in the Philippines",
}: {
  children: React.ReactNode;
  metadescription?: string;
  title?: string;
}) => {
  return (
    <>
      <Head>
        <title>{title} | Driver Philippines</title>
        <meta name="description" content={metadescription} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
