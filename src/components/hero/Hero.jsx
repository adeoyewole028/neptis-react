import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

// Define lazy-loaded versions of images
const FrameImageOne = lazy(() => import("../frameImages/FrameImageOne"));

const MobileFrameImage = lazy(() => import("../frameImages/MobileFrameImage"));
const Hero = () => {
  return (
    <>
      <div id="hero" className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-16 pb-5 sm:py-48 lg:py-20">
          <div className="text-center">
            <h1 className="text-[32px] font-semibold tracking-tight text-white sm:text-6xl">
              Transform Your Images into Stunning Websites with Neptis
            </h1>
            <p className="text-base text-[rgba(255,255,255,0.80);]">
              &quot;Harness the power of AI to turn your website designs into
              reality&quot;
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-full bg-[#A522C3] px-10 py-4 lg:py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <section>
          <div className="relative isolate px-6 lg:px-8">
            <div className="hidden lg:block mx-auto max-w-4xl py-10 sm:py-48 lg:py-10">
              <Suspense fallback={<div>Loading...</div>}>
                <FrameImageOne />
              </Suspense>
            </div>
            <div className="lg:hidden mx-auto max-w-4xl py-5 sm:py-48 lg:py-10">
              <Suspense fallback={<div>Loading...</div>}>
                <MobileFrameImage />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
