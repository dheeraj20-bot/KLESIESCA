import { AudioLines } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" py-4 w-full fixed border-b border-neutral-600  top-0  backdrop-blur-md z-50 ">
      <div className="flex justify-between items-center px-2 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center relative gap-2">
        <AudioLines className="size-5 text-fuchsia-500 " />
        <div className="text-white text-xl font-semibold ">KLESIESCALL</div>
        
        </Link>
        <Link href="https://api.leadconnectorhq.com/widget/booking/ToQCltj8A0MsFaKORtvJ" target="blank">
          <Button className="text-white bg-purple-500">Book Now</Button>
        </Link>
      </div>
    </header>
  );
}
