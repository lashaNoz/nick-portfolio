"use client";
import Image from "next/image";
import Heading from "./sub/Heading";
import { arrowIcons, reviewsData, starIcons } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  };

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  };

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="reviews" className="my-20">
      <Heading text={"Reviews"} />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="am:w-[280px] relative flex h-[500px] w-[800px] items-center justify-center overflow-hidden lg:h-[450px] lg:w-[600px] md:h-[400px] md:w-[95%] sm:h-[600px]"
        >
          {reviewsData.map((review, i) => (
            <motion.div
              initial={{ x: "100%" }}
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 rounded-xl border border-yellow-500 bg-zinc-50 p-14 transition-colors dark:bg-zinc-700 lg:gap-y-4 lg:p-5"
              ref={(el) => slides.current.push(el)}
            >
              <Image
                src={review.image}
                alt={review.image}
                width={150}
                height={150}
                priority={true}
                className="aspect-square h-auto w-[130px] rounded-full border border-yellow-500 object-contain p-4"
              />
              <h1 className="text-center text-2xl tracking-wider text-yellow-600 md:text-xl">
                {review.name}
              </h1>
              <p className="text-justify text-lg font-extralight tracking-wide text-gray-600 transition-colors first-letter:pl-2 dark:text-white md:text-sm">
                {review.comment}
              </p>

              <div className="flex flex-col items-center gap-y-2">
                <span className="mr-3 text-lg font-light text-yellow-600">
                  {review.stars
                    .reduce((sum, item) => {
                      return (sum += item);
                    }, 0)
                    .toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, i) => (
                    <span key={i}>
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-5 flex gap-x-4 text-4xl text-yellow-500">
          <button
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
          >
            {arrowIcons[0]}
          </button>
          <button
            className={`${
              index === reviewsData.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
