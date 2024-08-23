import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-full h-full px-12 md:px-24 py-20 transition-opacity flex flex-col">
      <h1 className="text-white left-2 text-7xl font-clash font-bold">
        Asia's Largest <br /> Digital Arts <br /> Festival{" "}
      </h1>
      <button className=" text-white bg-red-600 mt-[50px] mb-[50px] px-4 py-2 rounded-full border-none outline-none w-[194px] h-[56px]">
        Explore More
      </button>
      <div className="w-full justify-center hidden md:flex">
        <Image src="./hero_capsules.svg" width={956} height={422}/>
      </div>
    </div>
  );
};

export default HeroSection;
