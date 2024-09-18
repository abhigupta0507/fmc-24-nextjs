"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
  };
  const isActiveLink = (path) => pathName === path;
  // console.log(pathName);

  return (
    <>
      <div className="w-full h-full py-4 bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo />
            </Link>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
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
                  <p
                    className={`opacity-${
                      isActiveLink("/aboutUs") ? "100 underline" : "70"
                    } hover:opacity-100`}
                  >
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p
                    className={`opacity-${
                      isActiveLink("/events") ? "100 underline" : "70"
                    } hover:opacity-100`}
                  >
                    Events
                  </p>
                </Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <Link href="/accommodation">
                    <p
                      className={`opacity-${
                        isActiveLink("https://forms.gle/Qz5CcatCDGkCeWU36") ? "100 underline" : "70"
                      } hover:opacity-100 text-red-600`}
                    >
                      Accomodation
                    </p>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {isAuthenticated ? (
                <li>
                  <Link href="/logout">
                    <p
                      className={`opacity-${
                        isActiveLink("/logout") ? "100 underline" : "70"
                      } hover:opacity-100 text-red-600`}
                    >
                      Logout
                    </p>
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>

            {/* User Profile/Authentication Button */}
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="hidden md:block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                My Profile
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden md:block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 text-white space-y-4 cursor-pointer">
              <li>
                <Link href="/aboutUs" onClick={toggleMenu}>
                  <p
                    className={`opacity-${
                      isActiveLink("/aboutUs") ? "100" : "70"
                    } hover:opacity-100`}
                  >
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/events" onClick={toggleMenu}>
                  <p
                    className={`opacity-${
                      isActiveLink("/events") ? "100" : "70"
                    } hover:opacity-100`}
                  >
                    Events
                  </p>
                </Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <Link href="/accommodation">
                    <p
                      className={`opacity-${
                        isActiveLink("/logout") ? "100 underline" : "70"
                      } hover:opacity-100 text-red-600`}
                    >
                      Accommodation
                    </p>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {isAuthenticated ? (
                <li>
                  <Link href="/logout" onClick={toggleMenu}>
                    <p
                      className={`opacity-${
                        isActiveLink("/logout") ? "100" : "70"
                      } hover:opacity-100 text-red-600`}
                    >
                      Logout
                    </p>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {isAuthenticated ? (
                <Link
                  href="/dashboard"
                  onClick={toggleMenu}
                  className="block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  My Profile
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className="block text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                >
                  Login
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
