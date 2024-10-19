"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib";
import Connect from "../../public/connectPro.png";
import Twit from "../../public/twitPro.png";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center h-full">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Me</HoveredLink>
            <HoveredLink href="/interface-design">Certifications</HoveredLink>
            <HoveredLink href="/seo">Skills</HoveredLink>
            <HoveredLink href="/branding">contact Me</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="experience">
          <div className="flex flex-col space-y-4 text-sm text-white">
            Associate Next Tech Lab
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="deployements">
          <div className="  text-sm grid gap-10 p-4">
            <ProductItem
              title="Connect"
              href="https://first-fullstack-two.vercel.app"
              src={Connect.src}
              description="social media app"
            />
            <ProductItem
              title="Twit"
              href="https://twit-frontend.vercel.app"
              src={Twit.src}
              description="Youtube Twitter hybrid application"
            />
            
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
