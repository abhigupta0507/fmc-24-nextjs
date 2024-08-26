'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtIsNotAThing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="w-[90vw] mx-auto justify-between rounded-2xl flex flex-col md:flex-row text-white p-6 md:p-12 backdrop-blur-md bg-gray-400/10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 flex justify-center items-center z-0 opacity-50 md:opacity-70"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <Image
          src="./art_women.svg"
          width={600}
          height={600}
          alt="Art Woman"
          className="w-auto h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/3 flex flex-col justify-between mb-8 md:mb-0 z-10"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-clash mb-6 md:mb-10">
            Art is not a thing, it is a way.
          </h1>
          <p className="hidden md:block text-lg lg:text-2xl font-medium font-manrope mb-6">
            Join us for an unforgettable celebration of boundless creativity
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link href="/explore" className="font-manrope font-bold text-xl hover:underline">
            let's EXPLORE &gt;
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/3  font-manrope z-10"
        variants={staggerContainer}
      >
        {[1, 2, 3].map((num) => (
          <motion.div key={num} className="mb-6 md:mb-8" variants={fadeInUp}>
            <div className="text-red-600 font-bold text-2xl border-b-2 pb-2 mb-2">
              0{num}.
            </div>
            <p className="font-normal text-base md:text-xl pr-4 md:pr-20">
              {num === 1 &&
                "Immerse yourself in a tapestry of enlightening workshops hosted by industry luminaries"}
              {num === 2 && "Unleash Your Potential Through Thrilling Competitive Events!"}
              {num === 3 &&
                "Showcase Your Skills and Win Big in Our Prestigious and Thrilling Challenges and Contests!"}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
