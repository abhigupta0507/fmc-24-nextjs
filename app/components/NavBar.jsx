"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import logoImage from "../components/logo.jpeg";
import Image from "next/image";
import "/styles/navbar.css";
import { useState } from "react";

function Profile() {
  const [showDetails, setShowDetails] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(function () {
    setUserData({ name: "abhishek", events: ["Event1", "Event2", "Event3"] });
  }, []);

  // useEffect(() => {
  //   // Fetch the user data from the API
  //   fetch('/api/user')
  //     .then(response => response.json())
  //     .then(data => setUserData(data))
  //     .catch(error => console.error('Error fetching user data:', error));
  // }, []);

  const handleProfileClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <button
        onClick={handleProfileClick}
        className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        My Profile
      </button>
      {showDetails && userData && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4">
          <p className="font-bold">
            Welcome,{" "}
            {userData.name.charAt(0).toUpperCase() + userData.name.slice(1)}
          </p>
          <Events events={userData.events} />
        </div>
      )}
    </div>
  );
}

function Events({ events }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {events.map((event, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="font-semibold">{event}</p>
        </div>
      ))}
    </div>
  );
}

function Logo() {
  return (
    <div>
      <Image src={logoImage} alt="Logo" width={200} height={100} />
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function handleRegisteration() {}

const NavBar = () => {
  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>

            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/aboutUs">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href="/sponsors">
                  <p>Sponsors</p>
                </Link>
              </li>
              <li>
                <Link href="/contactUs">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            {/* <Button>
              <Link className="text-white" href="/register">
                Register
              </Link>
            </Button> */}
            {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Purple to pink
              </span>
            </button> */}
            {/* <Link href="/register" className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Register</Link> */}
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
