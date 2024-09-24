'use client'
import React, { useRef } from "react";
import { motion,useInView } from "framer-motion";
import sample from "../../public/Img/EventImages/sculpture.png";
import bg from "../../public/Img/EventImages/bg.png";
import NavBar from "../components/NavBar";

const helmTeamData = [
  { name: "Atmadeep Bhattacharya", post: "General Secretary" },
  { name: "Suhani Garg", post: "Joint General Secretary" },
  { name: "Suyash Vijay", post: "Joint General Secretary" },
  { name: "Utkarsh Raj", post: "Convener" },
  { name: "Meet Kotadiya", post: "Co-Convenor" },
  { name: "Nandini Dhakaan", post: "Co-Convenor" },
];

const techTeamData = [
  { name: "Dev Gupta", post: "Tech Head" },
  { name: "Adarsh Kumar", post: "Tech Head" },
];

function BackgroundMaker() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
        opacity: 0.9,
      }}
    ></div>
  );
}

function Header({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <header className="relative py-10 text-center">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -50,
        }}
        transition={{ duration: 0.5 }}
        className=" text-4xl md:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        {children}
      </motion.h1>
    </header>
  );
}

function Teamblock({ teamName, children }) {
  const ref = useRef(null);
 
  const isInView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.5 }}
      className="relative py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white tracking-wider">
        {teamName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-36">
        {children}
      </div>
    </motion.section>
  );
}

function MemberCard({
  name = "unknown",
  post = "Unknown Post",
  photo = sample.src,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
      }}
      transition={{ duration: 0.5 }}
      className="relative bg-black bg-opacity-70 rounded-lg p-6 text-white flex items-center justify-between border border-gray-400 shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-tr-lg rounded-bl-lg">
        {post}
      </div>
      <img
        src={photo}
        alt={name}
        className=" w-40 h-40 object-cover rounded-full border-2 border-white"
      />
      <div className="flex-1 text-center ml-4">
        <h3 className="text-lg md:text-xl font-bold">{name}</h3>
      </div>
    </motion.div>
  );
}

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="relative bg-black text-white font-sans min-h-screen">
        <BackgroundMaker />
        <Header>Meet the heroes who organized this event</Header>
        <Teamblock teamName="Helm">
          {helmTeamData.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              post={member.post}
              photo={`/helm/${index}.jpg`}
            />
          ))}
        </Teamblock>
        <Teamblock teamName="Technical">
          {techTeamData.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              post={member.post}
              photo={`/tech/${index}.jpg`}
            />
          ))}
        </Teamblock>
      
      </div>
    </>
  );
};

export default AboutUs;