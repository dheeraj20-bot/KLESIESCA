"use client";

import { motion } from "framer-motion";
import Arrow from "@/public/arrow.json";

export default function HowItWorks() {
 

  return (
    <div className="relative py-20">
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
            How it Works!
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            "Customized System ",
            "Seamless Integration",
            "Happy Conversions",
          ].map((step, index) => (
            <div key={step} className="text-center relative">
              {/* Large Numbers Positioned Behind the Text */}
              <div className="text-[120px] absolute md:text-[200px] font-bold text-zinc-800/20 -top-[20%] z-0 left-1/2 transform -translate-x-1/2">
                {index + 1}
              </div>
              {/* Text Content */}
              <div className="relative z-10 p-4 md:p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-2 md:mb-4">
                  {step}
                </h3>
                <p className="text-zinc-300 text-sm md:text-base lg:text-lg">
                  {index === 0 &&
                    "We design and build your AI-powered calling solution to meet your specific needs and requests."}
                  {index === 1 &&
                    "Our system integrates smoothly with your existing tools and processes, ensuring minimal disruption to your business."}
                  {index === 2 &&
                    "Start experiencing smarter calls, better lead qualification, and higher conversion rates—effortlessly."}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/4 -right-6 text-zinc-800 z-20">
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
