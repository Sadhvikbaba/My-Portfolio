"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaBriefcase, FaCloudUploadAlt } from "react-icons/fa"; 

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuItemProps = {
  setActive: (item: string) => void;
  active: string | null;
  item: "Home" | "Experience" | "Deployments"; 
  children?: ReactNode;
};

export const MenuItem = ({ setActive, active, item, children }: MenuItemProps) => {
  const icons: Record<"Home" | "Experience" | "Deployments", ReactNode> = {
    Home: <FaHome size={20} />,
    Deployments: <FaCloudUploadAlt size={20} />,
    Experience: <FaBriefcase size={20} />,
  };

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        <span className="hidden md:block">{item}</span>
        <span className="md:hidden text-neutral-400">{icons[item]}</span>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 -translate-y-3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

type MenuProps = {
  setActive: (item: string | null) => void;
  children: ReactNode;
};

export const Menu = ({ setActive, children }: MenuProps) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-3"
    >
      {children}
    </nav>
  );
};

type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

export const ProductItem = ({ title, description, href, src }: ProductItemProps) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

type HoveredLinkProps = {
  children: ReactNode;
  href: string;
};

export const HoveredLink = ({ children, href }: HoveredLinkProps) => {
  return (
    <Link
      href={href}
      className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-500"
    >
      {children}
    </Link>
  );
};
