import { pricing } from "./pricingData";

const PricingAndPlans = () => {
 

  return (
    <div id="pricing" className="mx-auto max-w-7xl py-10 px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none lg:text-4xl text-center">
        Pricing and Plans
      </h2>
      <p className="lg:px-32 max-w-2xl text-base text-[rgba(255,255,255,0.70)] mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem commodo
        turpis ipsum.
      </p>

      {/* Tiers */}
      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className={`relative flex flex-col rounded-2xl p-8 shadow-sm ${
              tier.title === "Free"
                ? "bg-[rgba(165,34,195,0.15)] hover:bg-"
                : tier.title === "Lite"
                ? "bg-[rgba(34,41,208,0.15)] hover:bg-"
                : "bg-[rgba(14,164,196,0.15)] hover:bg-"
            }`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{tier.title}</h3>

              <p className="mt-4 flex items-baseline text-white">
                <span className="text-5xl font-bold tracking-tight">
                  ${tier.price}
                </span>
              </p>
              <a
                href="#"
                className={`${
                  tier.title === "Free"
                    ? "bg-[#A522C3] text-white hover:bg-"
                    : tier.title === "Lite"
                    ? "bg-[#2228C3] text-white hover:bg-"
                    : "bg-[#22A6C3] text-white hover:bg-"
                } mt-8 block w-full py-3 px-6 border text-xs border-transparent rounded-full text-center font-semibold`}
              >
                {tier.cta}
              </a>
              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex">
                    <span className="material-symbols-outlined text-white">
                      check_circle
                    </span>
                    <span className="ml-3 text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingAndPlans;
