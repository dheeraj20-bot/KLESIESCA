"use client";

import { cn } from "@/lib/utils";

interface HeroVideoProps {
  videoSrc: string;
  className?: string;
}

export function HeroVideo({ videoSrc, className }: HeroVideoProps) {
  return (
    <div className={cn("relative w-full h-auto", className)}>
      <iframe
        src={`${videoSrc}?autoplay=1`}
        className="w-full aspect-video rounded-2xl shadow-lg"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
