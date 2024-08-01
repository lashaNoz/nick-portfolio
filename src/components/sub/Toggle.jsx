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
    const darkTheme = reactLocalStorage.get("darkTheme");
    console.log(darkTheme);

    const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme);

    const systemTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme === undefined) {
      if (systemTheme) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    } else if (darkThemeParsed) {
      console.log("Add dark theme");
      addDarkTheme();
    } else {
      console.log("remove dark theme");
      removeDarkTheme();
    }

    console.log(darkTheme, darkThemeParsed, systemTheme);
  }, []);

  //

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 transition-colors dark:bg-zinc-800">
        <div className="mx-auto flex max-w-[1200px] justify-center overflow-hidden xl:w-full xl:px-[90px] sm:pl-[80px] sm:pr-5">
          <button
            className="fixed right-14 top-10 z-40 text-2xl text-yellow-600 transition-colors hover:text-yellow-500 sm:right-10"
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
              className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800"
              initial={{ scale: darkTheme ? 0 : 1 }}
              animate={{ scale: darkTheme ? 0 : 1 }}
            >
              {moonIcon}
            </motion.span>
            <motion.span
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
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
