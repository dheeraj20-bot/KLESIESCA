"use client";
import { motion } from "framer-motion";
import { AudioLines, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import JSON content
import content from "@/content/nl.json";
import { HeroVideo } from "./ui/hero-video";
import { Button } from "./ui/button";
import { WordRotate } from "./ui/word-rotate";

const { heroSection } = content;

export function HeroSection() {
  const {
    buttonText,
    mainHeading,
    description,
    cta,
    testimonials,
    videoDialog,
  } = heroSection;

  return (
    <main className="min-h-[100vh] relative">
      <Image
        src={"/herobg.svg"}
        width={1000}
        height={1000}
        alt=""
        className="w-full absolute top-0 inset-0  -z-8"
      />
      <div className="absolute inset-0 -z-10 top-0 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#d946ef_100%)]"></div>

      <div className="max-w-5xl px-2 md:px-5 mx-auto flex flex-col items-center py-40 h-full w-full">
        <motion.button
          className="bg-slate-800 mb-6 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{buttonText}</span>
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
          <h1 className="text-4xl mb-4 md:text-7xl font-semibold text-white text-center">
            {mainHeading} <WordRotate  words={["ondersteuning bieden 24/7", " afspraken inplannen","verkopen stimuleren","potentiële klanten koud bellen","kosten reduceren","menselijk klinken","je bedrijf stimuleren","prospects omzetten"]} />
          </h1>
          <p className="text-neutral-300 max-w-3xl mx-auto text-sm md:text-xl mb-8">
            {description}
          </p>
          <Link
              href={cta.url}
              target="blank"
              className=" mb-8"
            >
              <Button className="px-3 py-5  bg-white text-black hover:bg-violet-500 transition-colors  ">
              <AudioLines className="size-5 animate-pulse text-fuchsia-500" />
              {cta.text}
              </Button>
              
            </Link>
          <div> 
           
            <div>
              <div className="flex mb-5 flex-col-reverse md:flex-row items-center gap-4">
                <div className="flex -space-x-4">
                  {testimonials.profileImages.map((src, index) => (
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
                    <span className="text-sm font-medium">
                      {testimonials.additionalProfiles}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center md:justify-start items-center gap-1">
                    {[...Array(testimonials.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-center md:text-left text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white">
                    <span>{testimonials.testimonialText}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <HeroVideo videoSrc={videoDialog.videoSrc} />
        </div>
      </div>
    </main>
  );
}
