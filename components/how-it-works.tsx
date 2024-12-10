"use client";

import { motion } from "framer-motion";
import { Code, Plug, Smile } from "lucide-react"; // Import icons

export default function HowItWorks() {
  return (
    <div className="relative py-24">
      <div className="w-full mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h1
            className="bg-gradient-to-br from-fuchsia-500 to-violet-500 py-4 bg-clip-text text-center text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent"
          >
            How It Works!
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Customized System", icon: <Code size={48} /> },
            { title: "Seamless Integration", icon: <Plug size={48} /> },
            { title: "Happy Conversions", icon: <Smile size={48} /> },
          ].map((step, index) => (
            <div key={step.title} className="text-center relative">
              {/* Large Numbers Positioned Behind the Text */}
              {/* <div className="text-[100px] md:text-[160px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-gray-800 to-black absolute -top-16 left-1/2 transform -translate-x-1/2 -z-10">
                {index + 1}
              </div> */}

              {/* Card Content */}
              <div className="relative flex items-center justify-center flex-col z-10 bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg">
                {/* Icon */}
                <div className="mb-4 text-center text-white">
                  {step.icon}
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">
                  {step.title}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
