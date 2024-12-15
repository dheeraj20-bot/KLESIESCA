"use client";

import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
// import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Interval = "month" | "year";

export function toHumanPrice(price: number, decimals: number = 2) {
  return Number(price / 100).toFixed(decimals);
}
const demoPrices = [
  {
    id: "price_1",
    name: "Starter",
    description: "A basic plan for startups and individual users",
    features: [
      "Kosten per minuut: €0,40",
      "Basis ondersteuning",
      "vaste voice assistant"
    ],
    monthlyPrice: 97    ,
    yearlyPrice: 10000,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Growth",
    description: "A premium plan for growing businesses",
    features: [
      "Kosten per minuut: €0,25",
      "3 gelijktijdige lijnen",
      "Prioritaire ondersteuning",
      "Geavanceerde data-analyse",
    ],
    monthlyPrice: 697,
    yearlyPrice: 20000,
    isMostPopular: true,
  },
  {
    id: "price_5",
    name: "Business",
    description:
      "An enterprise plan with advanced features for large organizations",
    features: [
      "Kosten per minuut: €0,20",
      "10 gelijktijdige lijnen",
      "1.500 gratis belminuten per maand",
      "Exclusieve ondersteuning",
      "Gepersonaliseerde voice assistants"
    ],
    monthlyPrice: 1497,
    yearlyPrice: 50000,
    isMostPopular: false,
  },
  {
    id: "price_6",
    name: "Enterprise",
    description: "The ultimate plan with all features for industry leaders",
    features: [
      "Maatwerkoplossingen voor grootschalige bedrijven",
      "Geavanceerde beveiliging en compliance",
      "Toegewijde accountmanager",
      "Gepersonaliseerde voice assistants en uitgebreide analyses",
    ],
    monthlyPrice: 3000,
    yearlyPrice: 80000,
    enterprise:true,
    isMostPopular: false,
  },
];

export function Pricing() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    
    setIsLoading(false);
  };

  return (
    <section id="pricing" className="bg-gradient-to-bl from-violet-500 via-black to-black">
      <div className="mx-auto flex max-w-screen-xl  flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className=" text-4xl sm:text-7xl font-bold tracking-tight text-white">
            Pricing
          </h4>
        </div>

       

        <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 overflow-hidden bg-zinc-900/30  backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-300 rounded-2xl border border-neutral-400 p-4 text-white",
                {
                  "border-2 ":
                    price.isMostPopular,
                },
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                {
                  price.enterprise ? (<div className="text-4xl  font-bold text-white ">
                     <p>Neem contact met ons op</p>
                  </div>):( <span className="text-4xl font-bold text-white">
                    €
                  <span>{price.monthlyPrice}</span>
                 <span className="text-xs"> /month</span>
               </span>)
                }
               
              </motion.div>
       
              <Button
                className={cn(
                  "group relative w-full gap-2  bg-violet-500 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu  opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 bg-violet-500" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Boek een gesprek</p>
                )}

                {isLoading && id === price.id && <p>Loading...</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 size-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-white"
                    >
                      <CheckIcon className="size-5 shrink-0 rounded-full bg-green-400 p-[2px] text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
