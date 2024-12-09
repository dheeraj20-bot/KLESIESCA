"use client";

import { motion } from "framer-motion";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { AudioLines, Star } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const profileImages = ["/av1.webp", "/av2.webp", "/av3.webp", "/av4.webp"];

export function HeroSection() {
  return (
    <main className="min-h-[100vh] relative">
      <Image
        src={"/herobg.svg"}
        width={1000}
        height={1000}
        alt=""
        className="w-full absolute top-0 inset-0  -z-8 "
      />
      <div className=" absolute inset-0 -z-10 top-0  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#d946ef_100%)]"></div>

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
            <span>Klesiescall Connect</span>
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
        <div className="flex flex-col z-10 items-center text-center">
          <motion.h1
            className="text-5xl mb-4 md:text-7xl  font-semibold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Your Own Call Center, Ready to Serve You 24/7
            {/* <WordRotate
              className="bg-gradient-to-br text-transparent bg-clip-text inlin from-fuchsia-700 to-violet-500"
              words={["Always","Quick","Steady"]}
            /> */}
          </motion.h1>

          <motion.p
            className="text-neutral-300 max-w-3xl mx-auto text-sm md:text-lg mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
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
            <Link
              href={"/"}
              className="bg-white  justify-center w-full flex items-center gap-3 px-2 py-4 
              rounded-xl font-medium text-lg mb-6 text-black hover:bg-gray-200 transition-colors"
            >
              <AudioLines className="size-5 animate-pulse text-fuchsia-500 " />
              Claim Your Free Strategy Call Now
            </Link>

            <div>
              <div className="flex mb-5 flex-col-reverse md:flex-row items-center gap-4">
                <div className="flex -space-x-4">
                  {profileImages.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Profile ${index + 1}`}
                      width={1000}
                      height={1000}
                      className="rounded-full h-10 w-10 border-2 border-black"
                    />
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-white">
                    <span className="text-sm font-medium">+96</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center md:justify-start items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-center md:text-left text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white">
                    <span className="">100+ Startup Founders</span> Love{" "}
                    <span className="text-emerald-400">KLESIESCALL</span>
                  </p>
                </div>
              </div>
            </div>
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
