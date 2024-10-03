"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Award,
  LogOutIcon,
  HomeIcon,
  LandPlot,
} from "lucide-react";
import NavBar from "../components/NavBar";
import MatrixBackground from "../components/background/MatrixBackground";
import { useCookies } from "next-client-cookies";
import { getEventById } from "../../utils/events/events";
import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useCart } from "../../utils/CartContext";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState(null);
  const { cart, setCart } = useCart();
  const cookies = useCookies();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.get("authToken")}`,
          },
        }
      ).then((res) => res.json());
      setUserData(res);
      if (!res.message) {
        setCart(res.cart);

        if (!res.message) {
          let tempRegisteredEvents = [];

          for (let item of res.registered) {
            // Check if item is a string and starts with 'e'
            if (typeof item === "string" && item.startsWith("e")) {
              tempRegisteredEvents.push(getEventById(item));
            }
            // Handle other cases: number or strings not starting with 'e'
            else if (typeof item === "string" || typeof item === "number") {
              item = "e" + item.toString();
              tempRegisteredEvents.push(getEventById(item));
            }
          }

          // Populate events
          const populatedEvents = await Promise.all(tempRegisteredEvents);
          setRegisteredEvents(populatedEvents);

          console.log(populatedEvents);
        }
      }

      console.log(cart);
    })();
  }, []);

  const DisplayInfo = ({ icon, dataType, value }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg"
    >
      {icon}
      <div>
        <span className="text-sm text-gray-400">{dataType}</span>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );

  const EventCard = ({ event }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-red-400 to-black p-4 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold text-white mb-2">{event.type}</h3>
      <p className="text-gray-200">{event.name}</p>
    </motion.div>
  );

  const Loader = () => (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-t-4 border-red-600 rounded-full"
      />
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen font-sans text-white">
        <MatrixBackground />
        <div className="container mx-auto px-4 py-8">
          {userData ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              <div className="lg:col-span-1">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
                  <div className="flex justify-center mb-4">
                    <User size={80} className="text-red-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-center mb-2">
                    {userData.name}
                  </h1>
                  <p className="text-gray-400 text-center">{userData.email}</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/events"
                        className="flex items-center text-gray-300 hover:text-gray-400"
                      >
                        <LandPlot className="mr-2" size={18} />
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/workshops"
                        className="flex items-center text-gray-300 hover:text-gray-400"
                      >
                        <FaChalkboardTeacher className="mr-2" size={18} />
                        Workshops
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://forms.gle/Qz5CcatCDGkCeWU36"
                        className="flex items-center text-gray-300 hover:text-gray-400"
                      >
                        <HomeIcon className="mr-2" size={18} />
                        Accomodation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/logout"
                        className="flex items-center text-red-500 hover:text-red-600"
                      >
                        <LogOutIcon className="mr-2" size={18} />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <DisplayInfo
                    icon={<Mail className="text-red-500" size={24} />}
                    dataType="Email"
                    value={userData.email}
                  />
                  <DisplayInfo
                    icon={<Phone className="text-red-500" size={24} />}
                    dataType="Mobile"
                    value={userData.phone}
                  />
                  <DisplayInfo
                    icon={<Calendar className="text-red-500" size={24} />}
                    dataType="Age"
                    value={userData.age}
                  />
                  <DisplayInfo
                    icon={<Award className="text-red-500" size={24} />}
                    dataType="Events Registered"
                    value={registeredEvents ? registeredEvents.length : 0}
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Registered Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {registeredEvents ? (
                    registeredEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))
                  ) : (
                    <p>No events registered yet.</p>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
