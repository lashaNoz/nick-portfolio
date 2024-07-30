"use client";
import { skillsData } from "@/assets";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <div
      id="skills"
      className="flex min-h-screen flex-col items-center justify-center gap-y-20"
    >
      <Heading text="Skills" />
      <div className="lg:gap-x- flex w-full flex-wrap justify-between gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            variants={variants}
            key={i}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
          >
            <Image
              src={item.icon}
              alt="Icon"
              width={100}
              height={100}
              priority={true}
              className="h-auto w-[40px]"
            />
            <p className="text-sm text-gray-600 lg:text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
