"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./bg.png";
import NavBar from "../components/NavBar";
import MatrixBackground from "../components/background/MatrixBackground";
import animation from "./animation.png";
import { allWorkshops } from "./../../utils/workshops/workshops";
import { Loader, Minus, ShoppingCart, X } from "lucide-react";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { FaMinus, FaTimes } from "react-icons/fa";

const cardData = allWorkshops();

const Explore = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cookies = useCookies();
  const router = useRouter();

  // Dummy fetch for cart

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/cart_and_reg`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookies.get("authToken")}`,
            },
          }
        ).then((res) => res.json());
        console.log(res);
        if (!res.message) setCart(res.cart);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = useCallback(async (workshop) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/add_to_cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("authToken")}`,
        },
        body: JSON.stringify({
          events: workshop,
        }),
      }
    ).then((res) => res.json());

    setCart((prevCart) => [...prevCart, workshop]);
  }, []);

  const removeFromCart = useCallback(async (workshopId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/remove_from_cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("authToken")}`,
        },
        body: JSON.stringify({ events: [workshopId] }),
      }
    ).then((res) => res.json());
    setCart((prev) => prev.filter((item) => item.id !== workshopId));
  }, []);

  const isInCart = useCallback(
    (workshopId) => {
      if (Array.isArray(cart)) {
        return cart?.some((item) => item.id === workshopId);
      }
    },
    [cart]
  );

  if (isLoading) {
    return (
      <div className="mx-auto h-48 w-48 justify-center mt-40">
        <Loader
          size={42}
          className="text-white mx-auto text-5xl animate-spin"
        />
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
        <MatrixBackground />
        <div className="container mx-auto px-8 py-8 h-screen">
          <CardContainer
            cards={cardData}
            addToCart={addToCart}
            isInCart={isInCart}
          />
        </div>
        <CartButton
          onClick={() => setIsCartOpen(true)}
          itemCount={cart?.length}
        />
        {isCartOpen && (
          <CartModal
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onRemove={removeFromCart}
          />
        )}
      </div>
    </div>
  );
};

function CardContainer({ cards, addToCart, isInCart }) {
  return (
    <div className="relative h-full overflow-x-hidden overflow-y-scroll snap-y no-scrollbar">
      <div className="space-y-1000 h-full">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Workshops
        </motion.h2>
        {cards?.map((card, index) => (
          <ExploreCard
            key={card.id}
            card={card}
            index={index}
            addToCart={addToCart}
            isInCart={isInCart}
          />
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
            <p className="text-md text-gray-500 font-bold mb-2">
              {card.name}
              <span className="text-gray-400 ml-4">
                [{card.type.split(" ")[0]}]
              </span>
            </p>
            <p className="text-lg">{card.description}</p>
            <p className="text-xl font-bold mt-2">Price: ₹{card.price}</p>
            <button
              onClick={() => addToCart(card)}
              className={`mt-4 px-4 py-2 rounded transition-colors ${
                inCart
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              disabled={inCart}
            >
              {inCart ? "Added to Cart" : "Add to Cart"}
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

const CartModal = ({ cart, onClose, onRemove }) => {
  const router = useRouter();
  const cookies = useCookies();
  const events = cart?.filter((item) => item.id?.startsWith("e"));
  const workshops = cart?.filter((item) => item.id?.startsWith("w"));

  return (
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

        {cart?.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <>
            {/* Section for Events */}
            {events.length > 0 && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                {events.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>{item.name}</span>
                    <div>
                      <span className="mr-4">₹ {item.price}</span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaMinus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Section for Workshops */}
            {workshops.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Workshops</h3>
                {workshops.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>{item.name}</span>
                    <div>
                      <span className="mr-4">₹ {item.price}</span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaMinus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total Price */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  ₹ {cart?.reduce((total, item) => total + item.price, 0)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-full mt-4 w-full"
              onClick={() => {
                router.push(cookies.get("authToken") ? "/checkout" : "/login");
              }}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Explore;
