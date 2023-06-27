import { lazy, Suspense } from "react";
import { works } from "./howItWorksData";
import "./work.css";

// Define lazy-loaded versions of images
const FrameImageTwo = lazy(() => import("../frameImages/FrameImageTwo"));

const MobileFrameImage = lazy(() => import("../frameImages/MobileFrameImage"));

const HowItWorks = () => {
  return (
    <>
      <div id="how-it-works" className="overflow-hidden py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {" "}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10">
              How it Works
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {works.map((work) => (
                    <div key={work.name} className="relative pl-9">
                      <dt className="inline text-base font-semibold text-white">
                        <div className="absolute left-1 top-1 h-5 w-5">
                          <img src="/images/circle.png" alt="list" />
                          <div
                            className={`border-[#A522C3] line border-2 h-[245px] lg:h-72 xl:h-64 w-1 lg:-top-[280px] xl:-top-[250px] -top-[245px] left-1.5 absolute ${
                              work.name === "User-Friendly Interface"
                                ? "border-none h-0"
                                : work.name === "AI-Powered Website Generation"
                                ? "ai"
                                : ""
                            }`}
                          ></div>
                        </div>
                        {work.name}
                      </dt>{" "}
                      <dd className="inline text-[#C6C2D6] text-sm">
                        {work.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="hidden lg:block">
              <Suspense fallback={<div>Loading...</div>}>
                <FrameImageTwo />
              </Suspense>
            </div>

            <div className="lg:hidden mx-auto max-w-4xl py-5 sm:py-48 lg:py-10">
              <Suspense fallback={<div>Loading...</div>}>
                <MobileFrameImage />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
