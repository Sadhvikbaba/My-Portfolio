"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib";
import Connect from "../../public/connectPro.png";
import Twit from "../../public/twitPro.png";
import CodeGuru from "../../public/codeGuru.png";

export function NavbarDemo({
  moveSkills,
  moveCertifications,
  moveContactus,
  moveAboutMe,
}: {
  moveSkills: () => void;
  moveCertifications: () => void;
  moveContactus : () =>void; 
  moveAboutMe : () => void;
}) {
  return (
    <div className="relative w-full flex items-center justify-center h-full">
      <Navbar className="top-2" moveSkills={moveSkills} moveCertifications={moveCertifications} moveContactus={moveContactus} moveAboutMe={moveAboutMe}/>
    </div>
  );
}

type NavbarProps = {
  className?: string;
  moveSkills: () => void; 
  moveCertifications: () => void; 
  moveContactus : () =>void; 
  moveAboutMe : () =>void;
};

function Navbar({ className, moveSkills, moveCertifications, moveContactus , moveAboutMe}: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 sm:w-80 mx-auto z-50 w-36", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <div className="cursor-pointer text-white hover:text-neutral-400" onClick={moveAboutMe}>About Me</div>
            <div className="cursor-pointer text-white hover:text-neutral-400" onClick={moveCertifications}>
              Certifications
            </div>
            <div className="cursor-pointer text-white hover:text-neutral-400" onClick={moveSkills}>
              Skills
            </div>
            <div className="cursor-pointer text-white hover:text-neutral-400" onClick={moveContactus}>Contact Me</div>
          </div>
        </MenuItem>

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
            <ProductItem
              title="Code Guru"
              href="https://code-guru-frontend.vercel.app/"
              src={CodeGuru.src}
              description="A Coding Platform"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm text-white">Associate Next Tech Lab</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
