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

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 sm:w-80 mx-auto z-50 w-36 ", className)}>
      <Menu setActive={setActive}>
        {/* Home */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="">About Me</HoveredLink>
            <HoveredLink href="">Certifications</HoveredLink>
            <HoveredLink href="">Skills</HoveredLink>
            <HoveredLink href="">Contact Me</HoveredLink>
          </div>
        </MenuItem>

        {/* Experience */}
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm text-white">
            Associate Next Tech Lab
          </div>
        </MenuItem>

        {/* Deployments */}
        <MenuItem setActive={setActive} active={active} item="Deployments">
          <div className="text-sm grid gap-10 p-4">
            <ProductItem
              title="Connect"
              href="https://first-fullstack-two.vercel.app"
              src={Connect.src}
              description="Social media app"
            />
            <ProductItem
              title="Twit"
              href="https://twit-frontend.vercel.app"
              src={Twit.src}
              description="YouTube Twitter hybrid application"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
