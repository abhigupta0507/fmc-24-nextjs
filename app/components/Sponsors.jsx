"use client";
import React from "react";
import Image from "next/image";
import group from "../../public/Group 176.png";
import sponser1 from "../../public/sponsers/sponser1.png"
import sponser2 from "../../public/sponsers/sponser2.png"
import sponser3 from "../../public/sponsers/sponser3.png"
import sponser4 from "../../public/sponsers/sponser4.png"
import sponser5 from "../../public/sponsers/sponser5.png"
import sponser6 from "../../public/sponsers/sponser6.png"
import sponser7 from "../../public/sponsers/sponser7.png"
import sponser8 from "../../public/sponsers/sponser8.png"
import sponser9 from "../../public/sponsers/sponser9.png"
import sponser10 from "../../public/sponsers/sponser10.png"
import sponser11 from "../../public/sponsers/sponser11.png"
import sponser12 from "../../public/sponsers/sponser12.png"
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex items-center justify-center w-full mt-20">
        <motion.div
          className="font-clash text-white text-5xl lg:text-7xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Previous Sponsors
        </motion.div>
      </div>
      <motion.div
        className="z-0 flex flex-col items-center justify-center w-full m-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
        <motion.div className="grid justify-center justify-items-center content-center items-center col-span grid-cols-4 md:grid-cols-4 gap-2 mx-3 rounded-2xl  p-5" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}> 
          <div className="col-span-4 md:col-span-6 backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl"><Image src={group} width={700} height={100} alt="Sponsors"/></div>
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser1} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser2} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser3} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser4} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser5} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser6} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser7} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser8} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser9} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser10} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser11} width={130} height={50} alt="Sponsors" />
          <Image className="backdrop-blur-md bg-gray-400/10 relative overflow-hidden p-2 rounded-2xl" src={sponser12} width={130} height={50} alt="Sponsors" />
        </motion.div>
    </motion.div>
    </div>
  );
};

export default Sponsors;
