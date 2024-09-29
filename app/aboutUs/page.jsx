'use client'
import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import NavBar from "../components/NavBar";
import MatrixBackground from "../components/background/MatrixBackground";
import Image from "next/image";

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




function Header({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -20 });
    }
  }, [controls, isInView]);

  return (
    <header className="relative py-10 text-center">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className="text-4xl md:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        {children}
      </motion.h1>
    </header>
  );
}

function Teamblock({ teamName, children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      className="relative py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white tracking-wider">
        {teamName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-36">
        {children}
      </div>
    </motion.section>
  );
}

const MemberCard = React.memo(function MemberCard({
  name = "unknown",
  post = "Unknown Post",
  photo = "/Img/EventImages/sculpture.png",
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.95 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      className="relative bg-black bg-opacity-70 rounded-lg p-6 text-white flex items-center justify-between border border-gray-400 shadow-lg"
    >
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-tr-lg rounded-bl-lg">
        {post}
      </div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 relative mr-4 flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          unoptimized={true}
          className="rounded-full border-2 border-white"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  );
});

const AboutUs = () => {
  const renderMemberCard = useCallback(
    (member, index, type) => (
      <MemberCard
        key={`${type}-${index}`}
        name={member.name}
        post={member.post}
        photo={`/${type}/${index}.jpg`}
      />
    ),
    []
  );

  return (
    <>
      <NavBar />
      <div className="relative text-white font-sans min-h-screen">
        <MatrixBackground />
        <Header>Meet the heroes who organized this event</Header>
        <Teamblock teamName="Helm">
          {helmTeamData.map((member, index) => renderMemberCard(member, index, "helm"))}
        </Teamblock>
        <Teamblock teamName="Tech">
          {techTeamData.map((member, index) => renderMemberCard(member, index, "tech"))}
        </Teamblock>
      </div>
    </>
  );
};

export default AboutUs;
