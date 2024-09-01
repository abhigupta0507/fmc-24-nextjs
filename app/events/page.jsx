'use client'
'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Image from "next/image";
import eventsImg from "./events.svg";
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

const EventCard = ({ name, price, onToggle, isInCart, isRegistered, isSelected }) => (
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
                ? "bg-blue-600 cursor-not-allowed"
                : isSelected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isRegistered || isInCart}
          >
            {isRegistered
              ? "Registered"
              : isInCart
              ? "In Cart"
              : isSelected
              ? "Selected"
              : "Select"}
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);
const EventCard = ({ name, price, onToggle, isInCart, isRegistered, isSelected }) => (
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
                ? "bg-blue-600 cursor-not-allowed"
                : isSelected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isRegistered || isInCart}
          >
            {isRegistered
              ? "Registered"
              : isInCart
              ? "In Cart"
              : isSelected
              ? "Selected"
              : "Select"}
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
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 w-full"
            onClick={() => alert("Payment successful!")}
          >
            Proceed to Checkout
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 w-full"
            onClick={() => alert("Payment successful!")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </motion.div>
  </motion.div>
);

const EventsPage = () => {
  const [categories, setCategories] = useState({});
  const [categories, setCategories] = useState({});
  const [cart, setCart] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data for cart and registered events
  const dummyCart = [
    { id: "fmc_1", name: "Snapchase", price: 199 },
    { id: "fmc_3", name: "PhotoArt", price: 199 },
  ];

  const dummyRegisteredEvents = ["fmc_2", "fmc_4"]; // Assuming these are event IDs

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const eventsRes = await fetch("https://fmcw2024-backend.onrender.com/api/events");
        const events = await eventsRes.json();
        //const registeredEventsRes = await fetch(`https://fmcw2024-backend.onrender.com/${userid}/registered-events`);
        //const registeredEvents = await registeredEventsRes.json();
        //const cartRes = await fetch(`https://fmcw2024-backend.onrender.com/${userid}/cart`);
        //const cart = await cartRes.json();
        console.log("Events:", events);

        setCategories(events);
        // Currently using dummy data for cart and registered events
        setCart(dummyCart);
        setRegisteredEvents(dummyRegisteredEvents);
        const eventsRes = await fetch("https://fmcw2024-backend.onrender.com/api/events");
        const events = await eventsRes.json();
        //const registeredEventsRes = await fetch(`https://fmcw2024-backend.onrender.com/${userid}/registered-events`);
        //const registeredEvents = await registeredEventsRes.json();
        //const cartRes = await fetch(`https://fmcw2024-backend.onrender.com/${userid}/cart`);
        //const cart = await cartRes.json();
        console.log("Events:", events);

        setCategories(events);
        // Currently using dummy data for cart and registered events
        setCart(dummyCart);
        setRegisteredEvents(dummyRegisteredEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    };

    fetchData();
  }, []);

  const toggleEventSelection = (event) => {
    setSelectedEvents((prev) =>
  const toggleEventSelection = (event) => {
    setSelectedEvents((prev) =>
      prev.some((item) => item.id === event.id)
        ? prev.filter((item) => item.id !== event.id)
        : [...prev, event]
    );
  };

  const addSelectedToCart = () => {
    //api call to add selected events to cart
    
    setCart([...cart, ...selectedEvents]);
    setSelectedEvents([]);
  };

  const removeFromCart = (eventName) => {
    setCart((prev) => prev.filter((item) => item.name !== eventName));
  const addSelectedToCart = () => {
    //api call to add selected events to cart
    
    setCart([...cart, ...selectedEvents]);
    setSelectedEvents([]);
  };

  const removeFromCart = (eventName) => {
    setCart((prev) => prev.filter((item) => item.name !== eventName));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (isLoading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-20">{error}</div>;
  }


  if (isLoading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-20">{error}</div>;
  }


  return (
    <div className="relative text-white font-sans min-h-screen">
      <BackgroundMaker />

      <motion.section
        className="relative flex flex-col items-center justify-center h-screen text-center px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
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

      {selectedEvents.length > 0 && (
        <motion.button
          className="fixed bottom-4 left-4 bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addSelectedToCart}
        >
          Add {selectedEvents.length} to Cart
        </motion.button>
      )}

      {Object.entries(categories).length > 0 ? (
        Object.entries(categories).map(([category, events]) => (
          <SectionBlock key={category} name={category}>
            {Object.entries(events).map(([event, details]) => (
              <EventCard
                key={details.id}
                name={event}
                price={details.price}
                onToggle={() => toggleEventSelection(details)}
                isInCart={cart.some(item => item.id === details.id)}
                isRegistered={registeredEvents.includes(details.id)}
                isSelected={selectedEvents.some(item => item.id === details.id)}
              />
            ))}
          </SectionBlock>
        ))
      ) : (
        <div className="text-white text-center mt-20">No events available</div>
      )}
      {selectedEvents.length > 0 && (
        <motion.button
          className="fixed bottom-4 left-4 bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addSelectedToCart}
        >
          Add {selectedEvents.length} to Cart
        </motion.button>
      )}

      {Object.entries(categories).length > 0 ? (
        Object.entries(categories).map(([category, events]) => (
          <SectionBlock key={category} name={category}>
            {Object.entries(events).map(([event, details]) => (
              <EventCard
                key={details.id}
                name={event}
                price={details.price}
                onToggle={() => toggleEventSelection(details)}
                isInCart={cart.some(item => item.id === details.id)}
                isRegistered={registeredEvents.includes(details.id)}
                isSelected={selectedEvents.some(item => item.id === details.id)}
              />
            ))}
          </SectionBlock>
        ))
      ) : (
        <div className="text-white text-center mt-20">No events available</div>
      )}

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