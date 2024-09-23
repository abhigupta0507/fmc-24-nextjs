"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const guestData = [
  { title: "Anantha Krishnan", imageUrl: "/guests/Anantha Krishnan_.jpg" },
  { title: "Ankur Debnath", imageUrl: "/guests/Ankur Debnath_.jpg" },
  { title: "Bhalovashi", imageUrl: "/guests/Bhalovashi_.png" },
  { title: "Dhruv Sehgal", imageUrl: "/guests/Dhruv Sehgal.jpg" },
  { title: "Dhwalika Singh", imageUrl: "/guests/Dhwalika Singh_.jpg" },
  { title: "Satyam Bhuyan", imageUrl: "/guests/Satyam Bhuyan.jpg" },
  { title: "Saurabh Shukla", imageUrl: "/guests/Saurabh Shukla.jpg" },
  // { title: "Shubhajeet Dey", imageUrl: "/guests/Shubhajeet Dey.png" },
  { title: "Subhash Nair", imageUrl: "/guests/Subhash Nair.jpg" },
  { title: "Sumaira Khan", imageUrl: "/guests/Sumaira Khan.png" },
  { title: "Yash Rathi", imageUrl: "/guests/Yash Rathi.jpg" },
];

const Guests = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const Guest = ({ title, imageUrl }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: false });

    return (
      <motion.div
        ref={ref}
        className="flex flex-col items-center"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <div className="border rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2 text-center h-12 flex items-center justify-center">
          <h2 className="text-sm sm:text-base md:text-lg text-white">{title}</h2>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="mt-1 mb-4 w-full overflow-hidden">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-extrabold text-center mb-8"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        Our Previous Guests
      </h1>
      <div className="px-4 md:px-8 lg:px-16">
        <Slider {...settings}>
          {guestData.map((card, index) => (
            <Guest key={index} title={card.title} imageUrl={card.imageUrl} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Guests;
