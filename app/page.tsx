import { FeaturesSection } from "@/components/feature-section";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/Pricing";
import Service from "@/components/service";
import { WorldMapDemo } from "@/components/WorldMapSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Service />
      <HowItWorks />
      <WorldMapDemo />
      <Pricing />
      <div className="h-screen py-5 flex flex-col items-center overflow-hidden  justify-center max-w-5xl mx-auto px-3">
        <h2 className="text-4xl md:text-6xl text-white font-semibold mb-8">
          Book a Call <span className="text-purple-500">Now</span>
        </h2>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/ToQCltj8A0MsFaKORtvJ"
          loading="lazy"
          style={{ border: 0, backgroundColor: "transparent" }}
          className="w-full px-3 h-full"
          aria-hidden="false"
          allow="same-origin" // and this
        ></iframe>
      </div>
      <Footer/>
    </div>
  );
}
