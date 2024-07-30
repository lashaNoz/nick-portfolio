"use client";

import { moonIcon, sunIcon } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { motion } from "framer-motion";

const Toggle = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef(null);

  const addDarkTheme = () => {
    mainRef.current.classList.add("dark");
    setDarkTheme(true);
  };

  const removeDarkTheme = () => {
    mainRef.current.classList.remove("dark");
    setDarkTheme(false);
  };

  useEffect(() => {
    let storedTheme = reactLocalStorage.get("darkTheme");

    storedTheme = storedTheme !== undefined && JSON.parse(storedTheme);

    const systemTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === undefined) {
      console.log("Undefined");
      if (systemTheme) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    } else if (storedTheme) {
      console.log("trueeee");
      addDarkTheme();
    } else {
      console.log("falseeee");
      removeDarkTheme();
    }
  }, []);

  //

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 transition-colors dark:bg-zinc-800">
        <div className="mx-auto max-w-[1200px] xl:w-full xl:px-[90px] md:pr-[20px]">
          <button
            className="fixed right-14 top-10 text-2xl text-yellow-600 transition-colors hover:text-yellow-500"
            onClick={(e) => {
              setDarkTheme(!darkTheme);
              if (!darkTheme) {
                mainRef.current.classList.add("dark");
                reactLocalStorage.set("darkTheme", true);
              } else {
                mainRef.current.classList.remove("dark");
                reactLocalStorage.set("darkTheme", false);
              }
            }}
          >
            <motion.span
              className="absolute block text-3xl"
              initial={{ scale: darkTheme ? 0 : 1 }}
              animate={{ scale: darkTheme ? 0 : 1 }}
            >
              {moonIcon}
            </motion.span>
            <motion.span
              className="absolute block text-4xl"
              initial={{ scale: darkTheme ? 1 : 0 }}
              animate={{ scale: darkTheme ? 1 : 0 }}
            >
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
