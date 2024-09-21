"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./bg.png";
import NavBar from "../components/NavBar";
import animation from "./animation.png";
import { allWorkshops } from './../../utils/workshops/workshops'
import { ShoppingCart, X } from 'lucide-react';

const cardData = allWorkshops().events;

const Explore = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((workshop) => {
    setCart(prevCart => {
      if (!prevCart.some(item => item.id === workshop.id)) {
        return [...prevCart, workshop];
      }
      return prevCart;
    });
  }, []);

  const removeFromCart = useCallback((workshopId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== workshopId));
  }, []);

  const isInCart = useCallback((workshopId) => {
    return cart.some(item => item.id === workshopId);
  }, [cart]);

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
          <CardContainer cards={cardData} addToCart={addToCart} isInCart={isInCart} />
        </div>
        <CartButton onClick={() => setIsCartOpen(true)} itemCount={cart.length} />
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

function CardContainer({ cards, addToCart, isInCart }) {
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
          <ExploreCard key={card.id} card={card} index={index} addToCart={addToCart} isInCart={isInCart} />
        ))}
      </div>
    </div>
  );
}

function ExploreCard({ card, index, addToCart, isInCart }) {
  const isEven = index % 2 === 0;
  const cardDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";
  const inCart = isInCart(card.id);

  return (
    <motion.div
      className="snap-center flex items-center justify-center w-full max-w-[800px] bg-white text-black shadow-lg rounded-lg overflow-hidden mx-auto my-16 p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex flex-col ${cardDirection} w-full h-auto`}>
        <div className="w-full md:w-1/3 h-auto p-4">
          <img
            src={animation.src}
            alt={card.activity}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-2/3 p-4 flex flex-col justify-center text-center md:text-left">
          <div className="flex flex-col justify-center h-full text-center">
            <h2 className="text-3xl font-bold mb-2">{card.activity}</h2>
            <p className="text-md text-gray-500 font-bold mb-2">{card.name}<span className="text-gray-400 ml-4">[{card.type.split(' ')[0]}]</span></p>
            <p className="text-lg">{card.description}</p>
            <button
              onClick={() => addToCart(card)}
              className={`mt-4 px-4 py-2 rounded transition-colors ${
                inCart 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={inCart}
            >
              {inCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CartButton({ onClick, itemCount }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}

function CartModal({ isOpen, onClose, cart, removeFromCart }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-800">{item.activity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Explore;