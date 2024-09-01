"use client";
import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Image from "next/image";
import eventsImg from "./events.svg";
import Photography from "../../public/Img/EventImages/photography.png";
import Cinematography from "../../public/Img/EventImages/cinematography.png";
import Animation from "../../public/Img/EventImages/animation.png";
import Outreach from "../../public/Img/EventImages/outreach.png";
import Design from "../../public/Img/EventImages/design.png";
import sample from "../../public/Img/EventImages/sculpture.png";
import bg from "../../public/Img/EventImages/bg.png";

function BackgroundMaker() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    ></div>
  );
}
const EventCard = ({ name, photo, price, onToggle, isInCart, isRegistered }) => (
  <motion.div
    className="bg-black rounded-lg p-4 text-white flex flex-col justify-between border border-white"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.1 }}
  >
    <div className="flex items-center mb-4">
      <img
        src={sample.src}
        alt={name}
        className="w-fit h-fit rounded-lg shadow-md"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-400 mb-4">Price: Rs {price}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={onToggle}
            className={`py-2 px-4 rounded-full text-sm transition-colors duration-300 ${
              isRegistered
                ? "bg-gray-600 cursor-not-allowed"
                : isInCart
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isRegistered}
          >
            {isRegistered ? (
              "Registered"
            ) : isInCart ? (
              <>
                <FaMinus className="inline-block mr-2" /> Remove
              </>
            ) : (
              <>
                <FaPlus className="inline-block mr-2" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const SectionBlock = ({ name, children }) => (
  <section className="py-16">
    <motion.h2
      className="text-4xl md:text-6xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {name}
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
      {children}
    </div>
  </section>
);

const CartModal = ({ cart, onClose, onRemove }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-gray-900 rounded-xl p-6 w-full max-w-md"
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 50 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <FaTimes size={24} />
        </button>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center mb-2"
            >
              <span>{item.name}</span>
              <div>
                <span className="mr-4">Rs {item.price}</span>
                <button
                  onClick={() => onRemove(item.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaMinus size={16} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="font-bold">Total:</span>
              <span className="font-bold">
                Rs {cart.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
          </div>
          <div>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 w-full"
              onClick={() => alert("Payment successful!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  </motion.div>
);
const EventsPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    // Fetch user's cart and registered events from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user-data'); // Replace with your actual API endpoint
        const data = await response.json();
        setCart(data.cart);
        setUserEvents(data.registeredEvents);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggleEvent = async (event) => {
    try {
      const isInCart = cart.some(item => item.name === event.name);
      const endpoint = isInCart ? '/api/cart/remove' : '/api/cart/add';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventName: event.name })
      });

      if (response.ok) {
        setCart(prevCart =>
          isInCart
            ? prevCart.filter(item => item.name !== event.name)
            : [...prevCart, event]
        );
      } else {
        console.error('Failed to update cart');
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };
  const removeFromCart = async (eventName) => {
    try {
      const response = await fetch('/api/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventName })
      });

      if (response.ok) {
        setCart(prevCart => prevCart.filter(item => item.name !== eventName));
      } else {
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };


  const eventCategories = [
    {
      name: "Photography",
      events: [
        { name: "Snapchase", price: 500, photo: Photography },
        { name: "Portrait Workshop", price: 300, photo: Photography },
        { name: "Street Photography Walk", price: 250, photo: Photography },
        {
          name: "Night Photography Masterclass",
          price: 400,
          photo: Photography,
        },
        {
          name: "Landscape Photography Expedition",
          price: 600,
          photo: Photography,
        },
      ],
    },
    {
      name: "Cinematography",
      events: [
        { name: "Short Film Challenge", price: 750, photo: Cinematography },
        {
          name: "Documentary Filmmaking Workshop",
          price: 800,
          photo: Cinematography,
        },
        {
          name: "Lighting for Film Seminar",
          price: 500,
          photo: Cinematography,
        },
        {
          name: "Drone Cinematography Course",
          price: 900,
          photo: Cinematography,
        },
      ],
    },
    {
      name: "Design",
      events: [
        { name: "Graphic Design Bootcamp", price: 550, photo: Design },
        { name: "UI/UX Design Workshop", price: 650, photo: Design },
        { name: "Branding Strategy Masterclass", price: 700, photo: Design },
      ],
    },
    {
      name: "Animation",
      events: [
        { name: "2D Animation Fundamentals", price: 450, photo: Animation },
        { name: "3D Modeling and Rigging", price: 800, photo: Animation },
        {
          name: "Stop Motion Animation Workshop",
          price: 350,
          photo: Animation,
        },
        {
          name: "Character Design for Animation",
          price: 500,
          photo: Animation,
        },
      ],
    },
    {
      name: "Outreach",
      events: [
        { name: "Community Art Project", price: 200, photo: Outreach },
        { name: "Digital Literacy Workshop", price: 150, photo: Outreach },
        {
          name: "Youth Media Empowerment Program",
          price: 300,
          photo: Outreach,
        },
        {
          name: "Environmental Storytelling Initiative",
          price: 250,
          photo: Outreach,
        },
      ],
    },
    {
      name: "Media",
      events: [
        { name: "Social Media Marketing Seminar", price: 400, photo: Design },
        { name: "Podcast Production Workshop", price: 350, photo: Design },
        { name: "Digital Journalism Bootcamp", price: 500, photo: Design },
      ],
    },
  ];

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="relative text-white font-clash min-h-screen">
      <BackgroundMaker />

      <motion.section
      className="relative flex flex-col items-center justify-center h-screen text-center px-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <motion.div
        className="relative mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Participate in
          <br />
          exciting events
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl max-w-2xl mx-auto text-gray-300"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Explore a world of creativity through photography, cinematography,
          animation, media, design, and outreach!
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
      >
        <Image
          src={eventsImg}
          alt="Events"
          height={1000}
          width={1000}
          className="mt-8"
        />
      </motion.div>
    </motion.section>
    <motion.button
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCartOpen(true)}
      >
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            Rs {totalPrice}
          </span>
        )}
      </motion.button>

      {eventCategories.map((category) => (
        <SectionBlock key={category.name} name={category.name}>
          {category.events.map((event) => (
            <EventCard
              key={event.name}
              {...event}
              onToggle={() => toggleEvent(event)}
              isInCart={cart.some(item => item.name === event.name)}
              isRegistered={userEvents.includes(event.name)}
            />
          ))}
        </SectionBlock>
      ))}

      <AnimatePresence>
        {isCartOpen && (
          <CartModal
            cart={cart}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
