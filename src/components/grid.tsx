"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import postman from "../../public/postman.png";
import psBasic from "../../public/psBasic.png";
import psInter from "../../public/psInter.png";
import pyBasic from "../../public/pyBasic.png";

export function LayoutGridDemo() {
  return (
    <>
      <h1 className=' text-5xl sm:mb-4 text-white text-center mt-12'>Certifications</h1>
      <div className="h-screen py-20 w-full min-w-full">
        <LayoutGrid cards={cards} />
      </div>
    </>
  );
}

const SkeletonOne = () => {
  return (
    <div className="">
      <p className="font-bold md:text-4xl text-xl text-white">
        Problem solving (Basic)
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A certificate from HackerRank tested and enhanced my problem solving skills solved 2 questions in python
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Problem solving (Intermediate)
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A certificate from HackerRank tested and enhanced my problem solving skills solved 2 questions in python and javascript
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Python (Basic)
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A certificate from HackerRank tested and enhanced my python skills solved 2 questions
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Postman API Fundamentals student expert
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        a certificate form Postman based on working on proxies and API&apos;s
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:psBasic,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: psInter,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:pyBasic,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:postman,
  },
];
