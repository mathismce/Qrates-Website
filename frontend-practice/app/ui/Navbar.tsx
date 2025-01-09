"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-background text-foreground font-noto-sans-bold text-lg">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
          className="dark:invert"
          src="/qrates-logo.svg"
          alt="Qrates logo"
          width={40}
          height={28}
          priority
        />
        <span className="text-lg font-noto-bold">Qrates</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 uppercase">
          <li>
            <a href="#discover" className="hover:underline">
              Discover
            </a>
          </li>
          <li>
            <a href="#search" className="hover:underline">
              Search
            </a>
          </li>
          <li>
            <a href="#whyQRATES" className="hover:underline">
              Why QRATES
            </a>
          </li>
          <li>
            <a href="#Cart" className="hover:underline">
              Cart
            </a>
          </li>
        </ul>
        
      </div>

      <div className="hidden md:flex gap-6">
          <button className="uppercase">Log in</button>
          <button className="bg-gray rounded-full text-black px-5 py-3 uppercase">Make a record</button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10 bg-background text-foreground"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          
          <Image
            src="/menu-bar.png"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-full h-full bg-black shadow-lg rounded-md z-40">
            <ul className="flex flex-col p-2 text-white">
              <li>
                <a href="#discover" className="block p-2 hover:bg-gray-200">
                  Discover
                </a>
              </li>
              <li>
                <a href="#search" className="block p-2 hover:bg-gray-200">
                  Search
                </a>
              </li>
              <li>
                <a href="#search" className="block p-2 hover:bg-gray-200">
                  Why QRATES
                </a>
              </li>
              <li>
                <a href="#search" className="block p-2 hover:bg-gray-200">
                  Cart
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 font-noto-bold">
              <button className="bg-white rounded-full m-4 p-3 text-black">Make a record</button>
              <button className="bg-black rounded-full text-white px-6 py-4">Log In</button>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
}
