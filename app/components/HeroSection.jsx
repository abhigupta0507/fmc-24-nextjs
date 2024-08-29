'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Refs for each element you want to animate
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const handlesRef = useRef(null);

  // Use the useInView hook to detect when each element is in view
  const headingInView = useInView(headingRef, { triggerOnce: false });
  const buttonInView = useInView(buttonRef, { triggerOnce: false });
  const imageInView = useInView(imageRef, { triggerOnce: false });
  const handlesInView = useInView(handlesRef, { triggerOnce: false });

  return (
    <div className="w-full h-full px-12 md:px-24 py-[40px] transition-opacity flex flex-col overflow-visible">
      <motion.h1 
        ref={headingRef}
        className="text-white left-2 text-7xl font-clash font-bold"
        variants={fadeIn}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        Asia's Largest <br /> Digital Arts <br /> Festival{" "}
      </motion.h1>
      
      <motion.button 
        ref={buttonRef}
        className="text-white bg-red-600 mt-[20px] mb-[10px] px-4 py-2 rounded-full border-none outline-none w-fit sm:w-[150px] md-w[180px] lg:w-[194px] h-[56px] sm:text-sm md:text-lg"
        variants={slideUp}
        initial="hidden"
        animate={buttonInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Explore More
      </motion.button>
      
      <motion.div 
        ref={imageRef}
        className="w-full justify-center flex"
        variants={fadeIn}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Image src="./hero_capsules.svg" width={956} height={422} />
      </motion.div>
      
      <motion.div 
        ref={handlesRef}
        className="relative top-[-6vh] sm:top-[-14vh] w-full flex justify-center"
        variants={fadeIn}
        initial="hidden"
        animate={handlesInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Image src="./handles.svg" width={956} height={161} />
      </motion.div>
    </div>
  );
};

export default HeroSection;
