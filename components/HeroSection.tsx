"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { WordRotate } from "./ui/word-rotate";

export function HeroSection() {
  return (
    <main className="min-h-[100vh] relative px-3">
      <div className=" absolute inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#d946ef_100%)]"></div>

      <div className="max-w-5xl px-3 mx-auto flex flex-col items-center py-40 h-full w-full">
        <motion.button
          className="bg-slate-800 mb-6 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Tailwind Connect</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </motion.button>
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl mb-7 md:text-7xl leading-relaxed font-semibold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Own Call Center, Ready to Serve You{" "}
            <WordRotate
              className="  bg-gradient-to-br text-transparent bg-clip-text inlin from-violet-700 to-white"
              words={["Always","Quick","Steady"]}
            />
          </motion.h1>

          <motion.p
            className="text-neutral-300 max-w-3xl mx-auto text-sm md:text-lg mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Say goodbye to unqualified leads! Let Kelsies handle your calls
            24/7, qualifying leads to your standards while you focus on growing
            your business. We always deliver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white mb-6 text-black hover:bg-gray-200 transition-colors"
            >
              Get Started Now
            </Button>
          </motion.div>

          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/BKdpc6C_MNU?si=4hcnxhd1WLcbf74V"
            thumbnailSrc="/hero.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </main>
  );
}
