"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <div className=" relative py-20">
      <div className="w-full mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-violet-300 to-violet-500 py-4 bg-clip-text text-center text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-transparent"
          >
            How it 
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {["Subscribe", "Request", "Receive"].map((step, index) => (
            <div key={step} className="text-center relative">
              <div
                className="text-[120px] absolute md:text-[200px] font-bold -top-1/2 -left-1/2 z-10"
              >
                {index + 1}
              </div>
              <div className="relative z-20 p-4 md:p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2 md:mb-4">{step}</h3>
                <p className="text-zinc-300 text-sm md:text-base lg:text-lg">
                  {index === 0 &&
                    "Pick a subscription and you'll receive an invite to your own private Slack channel."}
                  {index === 1 &&
                    "Submit as many design requests as you want. We'll focus on one request at a time."}
                  {index === 2 &&
                    "Expect your designs in 2-3 business days. We'll also make as many revisions as you need."}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/4 -right-6 text-zinc-800 z-30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

