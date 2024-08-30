"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import hamburger and cross icons
import Cookies from "js-cookie";
import logoImage from "../components/logo.jpeg";
import "/styles/navbar.css";

function Logo() {
  return (
    <div>
      <Image src={logoImage} alt="Logo" width={200} height={100} />
    </div>
  );
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isRegistered, setIsRegistered] = useState(true);

  useEffect(() => {
    const userToken = Cookies.get("userToken"); // Replace 'userToken' with your actual cookie name
    if (userToken) {
      setIsRegistered(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full h-full py-4 bg-black sticky top-0 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </div>

            {/* Desktop Menu */}
            <ul className={`hidden md:flex gap-x-6 text-white`}>
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

            {/* User Profile/Registration Button */}
            {isRegistered ? (
              <Link
                href="/dashboard"
                className="hidden md:block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                My Profile
              </Link>
            ) : (
              <Link
                href="/register"
                className="hidden md:block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Register
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 text-white space-y-4">
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
              {isRegistered ? (
                <Link
                  href="/dashboard"
                  className="block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  My Profile
                </Link>
              ) : (
                <Link
                  href="/register"
                  className="block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  Register
                </Link>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
