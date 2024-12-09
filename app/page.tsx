import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/Pricing";
import { WorldMapDemo } from "@/components/WorldMapSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <HeroSection/>
      <WorldMapDemo />
      <HowItWorks/>
      <Pricing />
    </div>
  );
}
