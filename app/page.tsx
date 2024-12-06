import { AnimatedTestimonialsSection } from "@/components/animated-testimonialssection";
import { BentoGridSecondDemo } from "@/components/bento-grid-section";
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import { WorldMapDemo } from "@/components/WorldMapSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <HeroSection/>
      <Pricing />
      <WorldMapDemo />
      <AnimatedTestimonialsSection/>
      {/* <BentoGridSecondDemo/> */}
    </div>
  );
}
