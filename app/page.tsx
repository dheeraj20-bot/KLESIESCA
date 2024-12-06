import { BentoGridSecondDemo } from "@/components/bento-grid-section";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import { WorldMapDemo } from "@/components/WorldMapSection";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <Pricing />
      <WorldMapDemo />
      <BentoGridSecondDemo/>
    </div>
  );
}
