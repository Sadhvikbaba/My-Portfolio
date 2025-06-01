import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaLinkedinIn , FaInstagram} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linked in",
      icon: (
        <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sadhvik-baba-patibandla-563964278",
    },

    {
      title: "Github",
      icon: (
        <FiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Sadhvikbaba",
    },
    {
      title: "Leetcode",
      icon: (
        <SiLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/sadhvik_baba_patibandla",
    },
    {
      title: "HackerRank",
      icon: (
        <LiaHackerrank className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.hackerrank.com/profile/AP23110010128",
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/sadhvikbaba",
    },

    
  ];
  return (
    <div className="flex items-center justify-center mb-6 w-full max-w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
