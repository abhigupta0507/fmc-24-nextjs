import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-full px-12 py-20 transition-opacity">
      <h1 className="text-white left-2 text-7xl font-clash font-bold">
        Asia's Largest <br /> Digital Arts <br /> Festival{" "}
      </h1>
      <button className=" text-white bg-red-600 mt-[20px] px-4 py-2 rounded-full border-none outline-none">
        Explore More
      </button>
    </div>
  );
};

export default HeroSection;
