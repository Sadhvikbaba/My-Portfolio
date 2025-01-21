"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import chatPro from "../../public/chatPro.png";
import connectPro from "../../public/connectPro.png";
import twit from "../../public/twitPro.png";
import scroll from "../../public/scroll.png";
import parllax from "../../public/parllax.png";
import chat from "../../public/chat.png";
import ecoCoin from "../../public/ecoCoin.png";
import codeGuru from "../../public/codeGuru.png"


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "chat app Frontend",
    link: "https://github.com/Sadhvikbaba/ChatApp-Frontend",
    thumbnail:chatPro,
  },
  {
    title: "Twit Frontend",
    link: "https://github.com/Sadhvikbaba/Twit-Frontend",
    thumbnail:twit,
  },
  {
    title: "Connect ",
    link: "https://github.com/Sadhvikbaba/first-fullstack",
    thumbnail:connectPro,
  },
  {
    title: "scroll design",
    link: "https://github.com/Sadhvikbaba/scroll-animation",
    thumbnail:scroll,
  },
  {
    title: "parllax design",
    link: "https://github.com/Sadhvikbaba/parallax",
    thumbnail:parllax,
  },
  {
    title: "Twit Backend",
    link: "https://github.com/Sadhvikbaba/Twit-backend",
    thumbnail:twit,
  },
  {
    title: "Chat backend",
    link: "https://github.com/Sadhvikbaba/ChatApp-Backend",
    thumbnail:chat,
  },
  {
    title: "ecoCoin Backend",
    link: "https://github.com/Sadhvikbaba/ecoCoinBackend",
    thumbnail:ecoCoin,
  },
  {
    title: "Code Guru Frontend",
    link: "https://github.com/Sadhvikbaba/codeGuru-Frontend",
    thumbnail:codeGuru,
  },
  {
    title: "scroll design",
    link: "https://github.com/Sadhvikbaba/scroll-animation",
    thumbnail:scroll,
  },
  {
    title: "Code Guru Backend ",
    link: "https://github.com/Sadhvikbaba/codeGuru-Backend",
    thumbnail:codeGuru,
  },
  {
    title: "parllax design",
    link: "https://github.com/Sadhvikbaba/parallax",
    thumbnail:parllax,
  },
  {
    title: "chat app Frontend",
    link: "https://github.com/Sadhvikbaba/ChatApp-Frontend",
    thumbnail:chatPro,
  },
  {
    title: "Twit Frontend",
    link: "https://github.com/Sadhvikbaba/Twit-Frontend",
    thumbnail:twit,
  },
  {
    title: "Connect ",
    link: "https://github.com/Sadhvikbaba/first-fullstack",
    thumbnail:connectPro,
  },
];
