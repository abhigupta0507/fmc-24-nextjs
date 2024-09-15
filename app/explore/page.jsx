// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import bg from "./bg.png";
// import NavBar from "../components/NavBar";
// import animation from "./animation.png"

// // Sample data for cards
// const cardData = [
//   { id: 1, title: "Card 1", description: "This is the first card", img: `${animation.src}` },
//   { id: 2, title: "Card 2", description: "This is the second card", img: `${animation.src}` },
//   { id: 3, title: "Card 3", description: "This is the third card", img: `${animation.src}` },
// ];

// const Explore = () => {
//   const BackgroundMaker = () => (
//     <div
//       className="absolute inset-0"
//       style={{
//         backgroundImage: `url(${bg.src})`,
//         backgroundRepeat: "repeat",
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//         backgroundColor: "black",
//       }}
//     ></div>
//   );

//   return (
//     <>
//       <NavBar />
//       <div className="relative min-h-screen font-sans text-white overflow-hidden">
//         <BackgroundMaker />
//         <div className="container mx-auto px-8 py-8 h-screen">
//           <CardContainer cards={cardData} />
//         </div>
//       </div>
//     </>
//   );
// };

// function Header() {
//   return <h1 className="text-4xl font-bold mb-8">Explore More</h1>;
// }

// function CardContainer({ cards }) {
//   return (
//     <div className="relative h-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">
//       <div className="space-y-8 h-full">
//         {cards.map((card) => (
//           <ExploreCard key={card.id} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ExploreCard({ card }) {
//   return (
//     <motion.div
//       className="snap-center flex items-center justify-center w-full h-screen bg-white text-black shadow-lg rounded-lg overflow-hidden"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex flex-col md:flex-row w-full h-full">
//         {/* Left side - Image */}
//         <div className="w-full md:w-1/2 h-1/2 md:h-full">
//           <img
//             src={card.img}
//             alt={card.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right side - Text */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
//           <p className="text-lg">{card.description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Explore;
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bg from "./bg.png";
import NavBar from "../components/NavBar";
import animation from "./animation.png";

// Sample data for cards
const cardData = [
  { id: 1, title: "Card 1", description: "This is the first card", img: `${animation.src}` },
  { id: 2, title: "Card 2", description: "This is the second card", img: `${animation.src}` },
  { id: 3, title: "Card 3", description: "This is the third card", img: `${animation.src}` },
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
    <>
      <NavBar />
      <div className="relative min-h-screen font-sans text-white overflow-hidden">
        <BackgroundMaker />
        <div className="container mx-auto px-8 py-8 h-screen">
          <CardContainer cards={cardData} />
        </div>
      </div>
    </>
  );
};

function Header() {
  return <h1 className="text-4xl font-bold mb-8">Explore More</h1>;
}

function CardContainer({ cards }) {
  return (
    <div className="relative h-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">
      <div className="space-y-8 h-full">
        {cards.map((card) => (
          <ExploreCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function ExploreCard({ card }) {
  return (
    <motion.div
      className="snap-center flex items-center justify-center w-full h-[80vh] bg-white text-black shadow-lg rounded-lg overflow-hidden mx-4 md:mx-8 lg:mx-16 p-4 md:p-8 lg:p-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left side - Image */}
        <div className="w-full md:w-1/3 h-[200px] md:h-auto p-4">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-2/3 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
          <p className="text-lg">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Explore;
