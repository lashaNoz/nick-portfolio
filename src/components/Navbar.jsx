"use client";
import { copyRightIcon, navbarData } from "@/assets";
import { motion } from "framer-motion";

const Navbar = ({ id }) => {
  return (
    <div className="border-t-none fixed left-0 top-0 z-10 flex h-full w-[70px] flex-col justify-between border-r border-gray-200 px-4 py-10 md:w-[70px]">
      <a href="/#home" className="relative">
        <span className="text-3xl font-semibold text-red-400">N</span>.
        <span className="block w-min origin-bottom rotate-90 text-[12px] font-semibold dark:text-white">
          Brown
        </span>
      </a>
      <div className="flex flex-col gap-y-3">
        {navbarData.map((item, i) => (
          <motion.a
            href={`/#${item.id}`}
            key={item.id}
            className="group flex flex-col items-center gap-y-2"
          >
            <motion.span
              className={`text-2xl  transition-all group-hover:scale-125 ${
                item.id === id
                  ? "text-red-500 scale-110"
                  : "text-yellow-600 scale-100"
              }`}
            >
              {item.icon}
            </motion.span>
            <motion.span
              className={`text-[10px] tracking-wide opacity-0 transition-all duration-300 group-hover:translate-x-0 dark:text-white group-hover:opacity-100 text-center ${
                i % 2 === 0 ? "translate-x-2" : "-translate-x-2"
              } ${item.id === id && "-translate-x-0 opacity-100"}`}
            >
              {item.name}
            </motion.span>
          </motion.a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500">
        <span className="absolute left-1/2 flex w-max origin-bottom-left -rotate-90 items-center tracking-wider transition-colors dark:text-gray-200">
          {copyRightIcon}
          2019 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
