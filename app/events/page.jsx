"use client";
import React, { useEffect, useState } from "react";
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    ></div>
  );
}

const purchasedEvents = ["fmc_1", "fmc_2"]; // Replace with actual event IDs

const EventCard = ({ id, name, photo, price, onToggle, isSelected }) => {
  const isPurchased = purchasedEvents.includes(id);

  return (
    <motion.div
      className={`rounded-lg p-4 flex flex-col justify-between border transition duration-300 ${
        isPurchased
          ? "bg-gray-800 border-gray-700 opacity-50 cursor-not-allowed"
          : "bg-black border-white"
      }`}
      whileHover={!isPurchased ? { scale: 1.05 } : {}}
    >
      <div className="flex items-center mb-4">
        <img
          src={photo || sample.src}
          alt={name}
          className="w-20 h-20 rounded-lg shadow-md"
        />
        <div className="ml-4 flex-grow">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-400 mb-4">Price: Rs {price}</p>
          {isPurchased ? (
            <div className="text-green-500 font-semibold">Registered</div>
          ) : (
            <div className="flex justify-start items-center">
              <button
                onClick={onToggle}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isSelected
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSelected ? (
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
          )}
        </div>
      </div>
    </motion.div>
  );
};


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
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span>{item.name}</span>
              <div>
                <span className="mr-4">Rs {item.price}</span>
                <button
                  onClick={() => onRemove(item.id)}
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
              className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 w-full hover:bg-blue-700 transition-colors duration-300"
              onClick={() => alert("Proceeding to checkout...")}
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
  const [categories, setCategories] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://fmcw2024-backend.onrender.com/api/events"
        );
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    })();
  }, []);

  const toggleEvent = (event) => {
    setCart((prev) =>
      prev.some((item) => item.id === event.id)
        ? prev.filter((item) => item.id !== event.id)
        : [...prev, event]
    );
  };

  const removeFromCart = (eventId) => {
    setCart((prev) => prev.filter((item) => item.id !== eventId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="relative text-white font-sans min-h-screen">
      <BackgroundMaker />

      <motion.section
        className="relative flex flex-col items-center justify-center h-screen text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Participate in
            <br />
            Exciting Events
          </h1>
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto text-gray-300">
            Explore a world of creativity through various engaging events!
          </p>
        </div>
        <Image
          src={eventsImg}
          alt="Events"
          height={500}
          width={500}
          className="mt-8"
        />
      </motion.section>

      <motion.button
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center hover:bg-blue-700 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCartOpen(true)}
      >
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {cart.length}
          </span>
        )}
      </motion.button>

      {Object.entries(categories).map(([categoryName, events]) => (
        <SectionBlock key={categoryName} name={categoryName}>
          {Object.values(events).map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              photo={event.photo}
              price={event.price}
              onToggle={() => toggleEvent(event)}
              isSelected={cart.some((item) => item.id === event.id)}
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
