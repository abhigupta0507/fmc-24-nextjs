import React from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li className={router.pathname === "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === "/about" ? styles.active : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === "/services" ? styles.active : ""}>
          <Link href="/services">Services</Link>
        </li>
        <li className={router.pathname === "/contact" ? styles.active : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.registerButton}>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
};

export default NavBar;
