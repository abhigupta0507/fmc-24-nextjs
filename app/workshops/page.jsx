"use client";

import React from "react";
import { motion } from "framer-motion";
import bg from "./bg.png";
import NavBar from "../components/NavBar";
import animation from "./animation.png";

// Sample data for cards
const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    img: `${animation.src}`,
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    img: `${animation.src}`,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    img: `${animation.src}`,
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the fourth card",
    img: `${animation.src}`,
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the fifth card",
    img: `${animation.src}`,
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the sixth card",
    img: `${animation.src}`,
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the seventh card",
    img: `${animation.src}`,
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the eighth card",
    img: `${animation.src}`,
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is the ninth card",
    img: `${animation.src}`,
  },
];

const Explore = () => {
  const BackgroundMaker = () => (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    ></div>
  );

  return (
    <div className="mb-100px">
      <NavBar />
      <div className="relative min-h-screen font-sans text-white overflow-hidden">
        <BackgroundMaker />
        <div className="container mx-auto px-8 py-8 h-screen">
          <CardContainer cards={cardData} />
        </div>
      </div>
    </div>
  );
};

function CardContainer({ cards }) {
  return (
    <div className="relative h-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <div className="space-y-1000 h-full">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Workshops
        </motion.h2>
        {cards.map((card, index) => (
          <ExploreCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

function ExploreCard({ card, index }) {
  // Apply flex-row-reverse when the index is odd to flip image and text
  const isEven = index % 2 === 0;
  const cardDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <motion.div
      className="snap-center flex items-center justify-center w-full max-w-[800px] bg-white text-black shadow-lg rounded-lg overflow-hidden mx-auto my-16 p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex flex-col ${cardDirection} w-full h-auto`}>
        {/* Left or Right side - Image */}
        <div className="w-full md:w-1/3 h-auto p-4">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right or Left side - Text */}
        <div className="w-full md:w-2/3 p-4 flex flex-col justify-center text-center md:text-left">
          <div className="flex flex-col justify-center h-full text-center">
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <p className="text-lg">{card.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Explore;
