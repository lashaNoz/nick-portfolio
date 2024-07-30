"use client";
import Heading from "./sub/Heading";
import { projectsButton, projectsData } from "@/assets";
import Project from "./sub/Project";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);
  // const projectsRef = useRef([]);

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
    // projectsRef.current.forEach((project) => {
    // console.log(project);
    // animate(project, { opacity: [0, 1] });
    // });
  }, [index]);

  return (
    <div className="min-h-screen py-20" id="projects">
      <Heading text={"Projects"} />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={(el) => buttonsRef.current.push(el)}
            key={i}
            onClick={() => {
              setTech(text);
              setIndex(i);
            }}
            className="rounded-xl border border-yellow-400 px-2 py-1 text-sm font-light tracking-wider text-gray-400"
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((data, i) => (
            <motion.div
              key={`id-${i}`}
              layout
              // ref={(el) => projectsRef.current.push(el)}
            >
              <Project data={data} index={i} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
