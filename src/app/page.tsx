"use client";

import Head from "next/head";
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
      <Head>
        <title>Sadhvik Baba </title>
        <meta name="description" content="Portfolio of Sadhvik Baba Patibandla Full Stack Developer, Open Source Contributor, and AI Enthusiast." />
        <meta name="keywords" content="Sadhvik Baba, MERN, Full Stack, AI, Next.js, Portfolio, Developer, React, MongoDB, Express, Node.js" />
        <meta name="author" content="Sadhvik Baba Patibandla" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://my-portfolio-khaki-two-52.vercel.app" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Sadhvik Baba | MERN Developer" />
        <meta property="og:description" content="Explore the projects and skills of Sadhvik Baba a passionate full stack web developer with AI/ML interest." />
        <meta property="og:url" content="https://my-portfolio-khaki-two-52.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://my-portfolio-khaki-two-52.vercel.app/og-image.jpg" />
      </Head>
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