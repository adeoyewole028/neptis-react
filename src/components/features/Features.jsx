import { features } from "./featuresData";
const Features = () => {
  return (
    <>
      <div id="features" className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-10 sm:py-48 lg:py-20">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-6xl">
              Amazing Features for You
            </h1>
            <div className="rounded-lg shadow-lg mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-1 flex-col justify-between bg-[#4F467340] p-6"
                >
                  <div className="flex-1 text-center lg:text-left">
                    <p className="text-[15px] lg:text-xl font-semibold text-white lg:pr-10">
                      {feature.title}
                    </p>
                    <p className="mt-3 text-sm text-[#C6C2D6]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
