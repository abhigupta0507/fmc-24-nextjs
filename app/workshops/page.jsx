"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./bg.png";
import NavBar from "../components/NavBar";
import animation from "./animation.png";
import { allWorkshops } from './../../utils/workshops/workshops';
import { Loader, Minus, ShoppingCart, X } from 'lucide-react';
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const cardData = allWorkshops().events;

const Explore = () => {
  const [cart, setCart] = useState({ workshops: [], events: [] });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cookies = useCookies();
  const router = useRouter();

  // Dummy fetch for cart
  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // API call for fetching cart data,
        const res = { cart: [] }; 
        setCart({
          workshops: res.cart.filter(id => id.startsWith('w')).map(id => cardData.find(workshop => workshop.id === id)),
          events: res.cart.filter(id => !id.startsWith('e'))
        });
      } catch (error) {
        console.error("Error fetching cart:", error);
        setError("Failed to load cart. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

  const addToCart = useCallback(async (workshop) => {
    try {
      // API response for adding to cart
      const res = { message: null };
      if (!res.message) {
        setCart(prevCart => ({
          ...prevCart,
          workshops: [...prevCart.workshops, workshop]
        }));
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("Failed to add to cart. Please try again later.");
    }
  }, []);

  const removeFromCart = useCallback(async (workshopId) => {
    try {
      // API response for removing from cart
      const res = { message: null };
      if (!res.message) {
        setCart(prevCart => ({
          ...prevCart,
          workshops: prevCart.workshops.filter(item => item.id !== workshopId)
        }));
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
      setError("Failed to remove from cart. Please try again later.");
    }
  }, []);

  const isInCart = useCallback((workshopId) => {
    return cart.workshops.some(item => item.id === workshopId);
  }, [cart]);

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

  if (isLoading) {
    return (
      <div className="mx-auto h-48 w-48 justify-center mt-40">
        <Loader size={42} className="text-white mx-auto text-5xl animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-20">{error}</div>;
  }

  return (
    <div className="mb-100px">
      <NavBar />
      <div className="relative min-h-screen font-sans text-white overflow-hidden">
        <BackgroundMaker />
        <div className="container mx-auto px-8 py-8 h-screen">
          <CardContainer cards={cardData} addToCart={addToCart} isInCart={isInCart} />
        </div>
        <CartButton onClick={() => setIsCartOpen(true)} itemCount={cart.workshops.length + cart.events.length} />
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
            <p className="text-xl font-bold mt-2">Price: ₹{card.price}</p>
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
  const totalPrice = [...cart.workshops, ...cart.events].reduce((total, item) => total + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            className="bg-gray-900 rounded-xl p-6 w-full max-w-md"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Your Cart</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              {cart.workshops.length > 0 || cart.events.length > 0 ? (
                <>
                  {[...cart.workshops, ...cart.events].map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-white">{item.activity}</span>
                        <p className=" text-gray-300 text-sm">{item.name}</p>
                      </div>
                      
                      <div>
                        <span className="mr-4 text-white">₹{item.price}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Minus size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Total:</span>
                      <span className="font-bold text-white">₹{totalPrice}</span>
                    </div>
                  </div>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 w-full"
                    onClick={() => console.log(cart)}
                  >
                    Proceed to Checkout
                  </button>
                </>
              ) : (
                <p className="text-gray-400">Your cart is empty.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export default Explore;
