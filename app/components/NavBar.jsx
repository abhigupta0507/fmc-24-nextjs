'use client'
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathName = usePathname();
  const cookies = useCookies();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const authToken = cookies.get("authToken");
    setIsAuthenticated(!!authToken);
  }, [cookies]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActiveLink = (path) => pathName === path;

  const NavLink = ({ href, children }) => (
    <li>
      <Link href={href}>
        <p className={`opacity-${isActiveLink(href) ? "100 underline" : "70"} hover:opacity-100`}>
          {children}
        </p>
      </Link>
    </li>
  );

  const UserMenu = () => (
    <div className="relative" ref={userMenuRef}>
      <div 
        className="cursor-pointer" 
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
      >
        <User size={24} className="text-white" />
      </div>
      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <Link href="/dashboard">
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</p>
          </Link>
          <Link href="/logout">
            <p className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</p>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav className="w-full py-4 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          {/* Centered Navigation */}
          <ul className="hidden md:flex space-x-6 text-white">
            <NavLink href="/aboutUs">About Us</NavLink>
            <NavLink href="/events">Events</NavLink>
            {isAuthenticated && <NavLink href="/accommodation">Accommodation</NavLink>}
          </ul>

          {/* User Menu / Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <Link
                href="/login"
                className="text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Login
              </Link>
            )}
          </div>

          {/* Hamburger Menu Icon */}
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
          <div className="md:hidden mt-4 text-white space-y-4">
            <NavLink href="/aboutUs">About Us</NavLink>
            <NavLink href="/events">Events</NavLink>
            {isAuthenticated && <NavLink href="/accommodation">Accommodation</NavLink>}
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <p className="block py-2 text-sm text-white hover:underline">My Profile</p>
                </Link>
                <Link href="/logout">
                  <p className="block py-2 text-sm text-red-400 hover:underline">Logout</p>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <p className="block py-2 text-sm text-white hover:underline">Login</p>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;