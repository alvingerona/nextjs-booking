import HeroSearchForm from "./HeroSearchForm";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative bg-gray-200">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="relative md:inset-0 lg:absolute lg:left-1/2 lg:col-span-5 lg:-mr-8 xl:mr-0">
          <img
            className="absolute inset-0 aspect-[3/2] aspect-auto h-full w-full bg-gray-50 object-cover opacity-70"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
          />

          <div className="z-index-1 relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Discover the Philippines with Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Explore the Philippines with ease. Book our reliable and
                comfortable charter services today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/#search"
                  className="rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </Link>
                <Link
                  href="/#about-us"
                  className="text-base font-semibold leading-7 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="px-6 pt-10 pb-10 sm:pb-16 lg:col-span-6 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6"
          id="search"
        >
          <div className="rounded-lg bg-white shadow">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="px-4 py-5 sm:p-6">
                <HeroSearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
