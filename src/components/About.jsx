"use client";

import Image from "next/image";

import { BiSolidLeftArrow } from "react-icons/bi";

import Achievements from "./sub/Achievements";
import Heading from "./sub/Heading";
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "@/assets";

const About = () => {
  return (
    <div
      id="about"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Heading text={"About Me"} />
      <div className="flex w-full items-center justify-between md:justify-center">
        <Image
          src={"/about-me.png"}
          width={400}
          height={400}
          alt="about me"
          className="w-[300px] lg:w-[200px] md:hidden"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify transition-colors dark:bg-zinc-700">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 transition-colors dark:text-zinc-700 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 dark:text-white lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          <a
            href="/nick-cv.pdf"
            download=""
            className="mt-6 flex w-max items-center gap-x-2 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white transition-colors hover:bg-red-500"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 flex w-full flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
