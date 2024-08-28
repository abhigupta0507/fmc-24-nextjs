"use client";
import React from "react";
import Image from "next/image";
import group from "../../public/Group 176.png";
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
        className="z-0 flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image src={group} width={650} height={100} alt="Sponsors" />
      </motion.div>
    </div>
  );
};

export default Sponsors;
