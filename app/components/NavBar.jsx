"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, LogOut } from "lucide-react";
import { useCookies } from "next-client-cookies";
import logoImage from "../components/logo.png";
import "/styles/navbar.css";
import { usePathname } from "next/navigation";

function Logo() {
  return (
    <div>
      <Image src={logoImage} alt="Logo" width={90} height={40} />
    </div>
  );
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathName = usePathname();
  const cookies = useCookies();

  useEffect(() => {
    const authToken = cookies.get("authToken");
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const isActiveLink = (path) => pathName === path;

  return (
    <>
      <div className="w-full h-full py-4 bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <ul className={`hidden md:flex gap-x-6 text-white`}>
              <li>
                <Link href="/aboutUs">
                  <p className={`hover:opacity-100 ${isActiveLink("/aboutUs") ? "opacity-100 underline" : "opacity-70"}`}>
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p className={`hover:opacity-100 ${isActiveLink("/events") ? "opacity-100 underline" : "opacity-70"}`}>
                    Events
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/workshops">
                  <p className={`hover:opacity-100 ${isActiveLink("/workshops") ? "opacity-100 underline" : "opacity-70"}`}>
                    Workshops
                  </p>
                </Link>
              </li>
              <li>
                <Link href="https://forms.gle/Qz5CcatCDGkCeWU36" target="_blank">
                  <p className={`hover:opacity-100 ${isActiveLink("https://forms.gle/Qz5CcatCDGkCeWU36") ? "opacity-100 underline" : "opacity-70"}`}>
                    <span className="flex items-center">
                      Accommodation
                    </span>
                  </p>
                </Link>
              </li>
            </ul>

            {/* User Profile Dropdown (Desktop) */}
            {isAuthenticated ? (
              <div className="hidden md:block relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white focus:outline-none"
                >
                  <User size={24} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <User size={18} className="mr-2" />
                        My Profile
                      </div>
                    </Link>
                    <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <LogOut size={18} className="mr-2" />
                        Logout
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:flex items-center text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                <User size={18} className="mr-2" />
                Login
              </Link>
            )}

            {/* Hamburger Menu Icon (Mobile) */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 text-white space-y-4 cursor-pointer">
              <li>
                <Link href="/aboutUs" onClick={toggleMenu}>
                  <p className={`hover:opacity-100 ${isActiveLink("/aboutUs") ? "opacity-100" : "opacity-70"}`}>
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/events" onClick={toggleMenu}>
                  <p className={`hover:opacity-100 ${isActiveLink("/events") ? "opacity-100" : "opacity-70"}`}>
                    Events
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/workshops" onClick={toggleMenu}>
                  <p className={`hover:opacity-100 ${isActiveLink("/workshops") ? "opacity-100" : "opacity-70"}`}>
                    Workshops
                  </p>
                </Link>
              </li>
              <li>
                <Link href="https://forms.gle/Qz5CcatCDGkCeWU36" onClick={toggleMenu} target="_blank">
                  <div className="flex items-center hover:opacity-100 opacity-70">
                    Accommodation
                  </div>
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link href="/dashboard" onClick={toggleMenu}>
                      <div className="flex items-center hover:opacity-100 opacity-70">
                        <User size={18} className="mr-2" />
                        My Profile
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/logout" onClick={toggleMenu}>
                      <div className="flex items-center hover:opacity-100 opacity-70">
                        <LogOut size={18} className="mr-2" />
                        Logout
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    href="/login"
                    onClick={toggleMenu}
                    className="flex items-center text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                  >
                    <User size={18} className="mr-2" />
                    Login
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
