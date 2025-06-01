"use client";

import { NavbarDemo } from "@/components/navbar";
import { HeroParallaxDemo } from "@/components/hero";
import { TimelineDemo } from "@/components/TimelineComp";
import { LayoutGridDemo } from "@/components/grid";
import Skills from "@/components/Skills";
import ContactUs from "@/components/contactUs";
import { FloatingDockDemo } from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  const skills = useRef<HTMLDivElement>(null); 

  const moveSkills = () => {
    setTimeout(() => {
      skills.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const certifications = useRef<HTMLDivElement>(null); 

  const moveCertifications = () => {
    setTimeout(() => {
      certifications.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const contactUs = useRef<HTMLDivElement>(null); 

  const moveContactus = () => {
    setTimeout(() => {
      contactUs.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const aboutMe = useRef<HTMLDivElement>(null); 

  const moveAboutMe = () => {
    setTimeout(() => {
      aboutMe.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex items-center justify-center h-full w-full flex-col bg-black max-w-full overflow-x-hidden">
      
      <div >
        <NavbarDemo moveSkills={moveSkills} moveCertifications={moveCertifications} moveContactus={moveContactus} moveAboutMe={moveAboutMe}/>
      </div>
      <div className="w-screen" ref={aboutMe}>
        <HeroParallaxDemo />
      </div>
      <div>
        <TimelineDemo />
      </div>
      <div ref={certifications} className="w-full">
        <LayoutGridDemo />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={contactUs} className="w-full">
        <ContactUs />
      </div>
      <FloatingDockDemo />
    </div>
  );
}