import React from "react";

const Heading = ({ text }) => {
  return (
    <h1 className="mb-14 self-start text-3xl font-bold text-gray-600 transition-colors dark:text-white sm:text-2xl">
      {text}
    </h1>
  );
};

export default Heading;
