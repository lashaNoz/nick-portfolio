"use client";

import { arrowLeftIcon, experienceData } from "@/assets";
import Heading from "./sub/Heading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Experience = () => {
  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div id="experience" className="relative py-20">
      <Heading text={"Experience & Education"} />
      <Image
        src={"/education.png"}
        width={400}
        height={400}
        alt="Education image"
        className="absolute -top-4 right-0 opacity-70 lg:hidden"
      />
      <div
        ref={containerRef}
        className="relative flex h-full w-full flex-col items-center justify-center gap-y-10 py-10 lg:gap-y-20"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] relative px-12 xl:w-[480px] sm:w-full sm:px-0 ${
              i % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
            } `}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className="relative z-20 flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide transition-colors dark:bg-zinc-700 sm:text-sm"
            >
              <h1 className="text-xl font-light text-gray-700 dark:text-white sm:text-lg">
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-100">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <ul className="text-gray-800 transition-colors dark:text-gray-200">
                <span className="font-light">Experience:</span>
                <div className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </div>
              </ul>

              <span
                className={`absolute top-20 -translate-y-1/2 text-red-300 lg:hidden ${
                  i % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            {/* Date */}
            <div
              className={`absolute top-20 w-14 z-10 aspect-square bg-white rounded-full grid place-items-center border border-gray-300 -translate-y-1/2 text-red-400 font-light ${
                i % 2 === 0
                  ? "left-full -translate-x-1/2 lg:left-1/2 -top-10"
                  : "right-full translate-x-1/2 lg:right-1/2 -top-10"
              }`}
            >
              {date - experienceData.length + i + 1}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute h-full w-1 origin-top rounded-full bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Experience;
