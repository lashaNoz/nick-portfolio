"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Skills from "@/components/Skills";
import PricingPlans from "@/components/PricingPlans";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;

          intersecting && setId(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <div className="w-min" ref={compsRef}>
          <Landing />
          <About />
          <Experience />
          <Skills />
          <Reviews />
          <Projects />
          <PricingPlans />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
