import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/Pricing";
import { WorldMapDemo } from "@/components/WorldMapSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <HeroSection />
      <WorldMapDemo />
      <HowItWorks />
      <Pricing />
      <div className="h-screen py-10 flex flex-col items-center overflow-hidden  justify-center max-w-5xl mx-auto px-3">
        <h2 className="text-6xl text-white font-semibold mb-6">Book a Call Now</h2>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/ToQCltj8A0MsFaKORtvJ"
        width="600"
        height="800"
        loading="lazy"
        style={{ border: 0 }}
        aria-hidden="false"
      ></iframe>
      </div>
      
    </div>
  );
}
