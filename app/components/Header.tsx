"use client";

import React from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export interface NavItem {
  title: string;
  href: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header = ({ navItems }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split("#");
    if (!hash) return;

    const targetPath = path || "/";
    if (window.location.pathname === targetPath && window.location.hash === `#${hash}`) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/80 px-8 py-4 md:px-16 lg:px-24">
      <Link href="/" className="text-left text-xl font-bold text-white md:text-3xl">
        connell<span className="text-[var(--color-brand)]">boyce</span>.
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="flex items-center text-white md:hidden"
        aria-label="Open menu"
      >
        <FaBars className="h-6 w-6" />
      </button>

      <nav className="hidden md:block">
        <ul className="flex md:space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-2 text-lg text-white transition-colors duration-300 ease-in-out hover:text-[var(--color-brand)]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-black transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="m-6 flex items-center text-white"
          aria-label="Close menu"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        <ul className="flex flex-col items-start gap-6 px-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setMenuOpen(false);
                }}
                className="text-xl text-white transition-colors duration-300 ease-in-out hover:text-[var(--color-brand)]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
