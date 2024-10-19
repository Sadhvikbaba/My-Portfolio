import {NavbarDemo} from "@/components/navbar"
import { HeroParallaxDemo } from "@/components/hero";
import { TimelineDemo } from "@/components/TimelineComp";
import { LayoutGridDemo } from "@/components/grid";
import Skills from "@/components/Skills";
import ContactUs from "@/components/contactUs";
import { FloatingDockDemo } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col bg-black max-w-full overflow-x-hidden">
      <NavbarDemo/>
      <HeroParallaxDemo/>
      <TimelineDemo/>
      <LayoutGridDemo/>
      <Skills/>
      <ContactUs/>
      <FloatingDockDemo/>
    </div>
  );
}
