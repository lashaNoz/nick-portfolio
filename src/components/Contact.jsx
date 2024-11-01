"use client";
import Image from "next/image";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="h-screen py-20">
      <Heading text={"Get in tach"} />
      <div className="my-auto flex h-full w-full items-center justify-between gap-x-20 lg:flex-col lg:justify-center lg:gap-x-0 lg:gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            width={500}
            height={500}
            alt="Contact image"
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          className="flex w-[600px] flex-col gap-3 lg:w-[400px] sm:w-full"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex w-full gap-x-3 lg:flex-col lg:gap-y-3">
            <input
              className="w-full rounded-md border border-yellow-500 bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full rounded-md border border-yellow-500 bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="rounded-md border border-yellow-500 bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="max-h-[250px] min-h-[150px] rounded-md border border-yellow-500 bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
          ></textarea>
          <input
            className="cursor-pointer rounded-md border border-yellow-500 bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none transition-colors hover:bg-yellow-500"
            type="submit"
            value="Send Message"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
