import { CheckIcon } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 lg:pb-32  relative overflow-hidden text-neutral-50">
      <div className="max-w-6xl   px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className=" md:mb-4 text-4xl md:text-6xl tracking-tighter">
            Pricing &amp; Plans
          </h2>
          <p className=" text-md md:text-xl tracking-tight">
            Get access to cutting-edge AI features, exceptional support, and
            flexible options to keep your business ahead of the curve. Start
            with a free trial today and experience the difference!
          </p>
        </div>
        <div className="flex flex-wrap -m-6 *:mx-auto">
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="h-full bg-white/5 backdrop-blur-lg z-10  border relative border-slate-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500 ">
              <div
                className=" absolute inset-0  -z-10 opacity-10 "
                style={{
                  backgroundImage: "url('/grain.jpg')",
                }}
              ></div>
              <div className="p-12 border-b border-neutral-300 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter">Basic Plan</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tight">
                    From €195/mo per assistant
                  </p>
                  <p className="tracking-tight">
                    The ideal plan for small teams and startups starting to
                    automate customer interactions.
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11">
                  <FeatureItem>500 minutes/month</FeatureItem>
                  <FeatureItem>€0.99 per minute</FeatureItem>
                  <FeatureItem>
                    Full access to AI Voice Assistant features
                  </FeatureItem>
                  <FeatureItem>Priority Email Support</FeatureItem>
                </ul>
                <PricingButton noCardRequired={true}>
                  Try 14 Days Free Trial
                </PricingButton>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="p-px overflow-hidden rounded-2xl hover:-translate-y-2 transition duration-500 transform-gpu">
              <div className="h-full bg-white/5 backdrop-blur-lg relative z-10 rounded-2xl">
                <div
                  className="p-12"
                  style={{
                    backgroundImage: "url('/advanced-gradient.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    className=" absolute inset-0  -z-10 opacity-10 "
                    style={{
                      backgroundImage: "url('/grain.jpg')",
                    }}
                  ></div>
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl text-white tracking-tighter">
                      Business Plan
                    </h4>
                    <p className="mb-2 text-xl text-white font-semibold tracking-tighter">
                      From €195/mo
                    </p>
                    <p className="text-white tracking-tight">
                      Perfect for medium-sized businesses needing more support
                      and higher customer conversation volumes.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11">
                    <FeatureItem>50 Users</FeatureItem>
                    <FeatureItem>Unlimited Projects</FeatureItem>
                    <FeatureItem>Project Schedule</FeatureItem>
                    <FeatureItem>150+ Integrations</FeatureItem>
                    <FeatureItem>Priority Email Support</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true}>
                    Try 14 Days Free Trial
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="flex flex-col justify-between relative z-10 h-full  bg-white/5 backdrop-blur-lg border border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500">
              <div
                className=" absolute inset-0  -z-10 opacity-10 "
                style={{
                  backgroundImage: "url('/grain.jpg')",
                }}
              ></div>
              <div className="p-12 border-neutral-300 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter">Custom</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tighter">
                    From $399/mo
                  </p>
                  <p className="tracking-tight">
                    We can customize a plan that suits the exact needs of your
                    business.
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <PricingButton>Contact sales</PricingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="size-3 mr-3" />
      <span className="font-medium tracking-tight">{children}</span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,

  noCardRequired,
}: {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <>
      <a
        className="inline-block px-5 py-4 w-full text-center  font-semibold tracking-tight bg-transparent hover:bg-purple-500 hover:text-white border dark:hover:bg-white dark:hover:text-neutral-800 hover:scale-105 border-neutral-700 rounded-lg transition duration-200"
        href={href ?? ""}
      >
        {children}
      </a>
    </>
  );
};
