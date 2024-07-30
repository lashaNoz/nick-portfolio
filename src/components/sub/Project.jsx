"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className="relative h-max w-[350px] cursor-pointer rounded-lg border border-yellow-400 sm:w-full"
    >
      <Image
        src={data.url}
        width={400}
        height={400}
        alt={data.name}
        className="rounded-lg opacity-75"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 z-10 flex h-full origin-top flex-col items-center justify-center gap-y-2 rounded-lg bg-white/95 p-6 transition-colors dark:bg-zinc-700/95"
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-500 transition-colors dark:text-white">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 transition-colors first-letter:pl-2 dark:text-gray-100">
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
