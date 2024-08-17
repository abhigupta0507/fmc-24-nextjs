import React from "react";
import Link from "next/link";

function Logo() {
  return <div className="text-white">Logo of FMC</div>;
  //image to be added instead of text
}

function Button({ children }) {
  return <button>{children}</button>;
}

function handleRegisteration() {}

const NavBar = () => {
  //css of this navbar will be changed later currently the rough work
  return (
    <>
      <div className="w-full h-20 bg-black-800 sticky top-0">
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
                  <p>sponsors</p>
                </Link>
              </li>
              <li>
                <Link href="/contactUs">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            <Button>
              <Link className="text-white" href="/register">
                Register
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
