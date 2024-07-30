"use client";
import { checkIcon, pricingPlans } from "@/assets";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";

const PricingPlans = () => {
  return (
    <div id="pricing" className="py-20">
      <Heading text={"Pricing Plans"} />
      <div className="flex h-full items-center justify-between gap-8 lg:flex-col">
        {pricingPlans.map((plan, i) => (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.4,
              delay: i * 0.2,
              scale: { duration: 0.15 },
            }}
            key={i}
            className={`relative flex flex-col gap-y-6 p-6 rounded-xl border border-red-400 text-gray-600 sm:w-[270px] dark:bg-zinc-700 transition-colors ${
              i === 1 ? "w-[370px] bg-white" : "w-[350px] bg-zinc-50"
            }`}
          >
            <h1 className="text-center text-3xl font-light tracking-wide transition-colors dark:text-white lg:text-2xl">
              {plan.title}
            </h1>
            <span className="text-center text-2xl transition-colors dark:text-white lg:text-lg">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-x-3">
                  <span
                    className={`text-2xl ${
                      i === 1 ? "text-red-300" : "text-yellow-500"
                    }`}
                  >
                    {checkIcon}
                  </span>
                  <li className="text-[15px] font-light tracking-wide transition-colors dark:text-white">
                    {feature}
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-center text-sm font-light transition-colors dark:text-gray-200">
              <span className="text-sm font-semibold">Ideal for:</span>{" "}
              {plan.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
