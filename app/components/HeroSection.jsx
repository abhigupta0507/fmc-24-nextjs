import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-full h-full px-12 md:px-24 py-[40px] transition-opacity flex flex-col overflow-visible">
      <h1 className="text-white left-2 text-7xl font-clash font-bold opacity-0 animate-fade animate-fill-forwards">
        Asia's Largest <br /> Digital Arts <br /> Festival{" "}
      </h1>
      <button className="text-white bg-red-600 mt-[20px] mb-[10px] px-4 py-2 rounded-full border-none outline-none w-[194px] h-[56px] opacity-0 animate-fade animate-delay-300 animate-fill-forwards">
        Explore More
      </button>
      <div className="w-full justify-center hidden sm:flex opacity-0 animate-fade animate-delay-700 animate-fill-forwards">
        <Image src="./hero_capsules.svg" width={956} height={422}/>
      </div>
      <div className="relative top-[-14vh] w-full flex justify-center opacity-0 animate-fade animate-delay-1000 animate-fill-forwards">
        <Image src="./handles.svg" width={956} height={161}/>
      </div>
    </div>
  );
};

export default HeroSection;
