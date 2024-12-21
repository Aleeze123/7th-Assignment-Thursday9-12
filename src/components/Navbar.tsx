"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLaptopCode, FaServer, FaHome } from "react-icons/fa"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const close = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-200 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-serif font-extrabold text-black">Data Fetching</div>
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="flex items-center px-4 py-2 rounded-md text-gray-800 hover:bg-blue-300 transition">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            href="/client-side"
            className="flex items-center px-4 py-2 rounded-md text-gray-800 hover:bg-blue-300 transition">
            <FaLaptopCode className="mr-2" /> Client Side
          </Link>
          <Link
            href="/server-side"
            className="flex items-center px-4 py-2 rounded-md text-gray-800 hover:bg-blue-300 transition">
            <FaServer className="mr-2" /> Server Side
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu} />
      )}
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-auto bg-blue-200 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col items-end pt-6">
          <button
            onClick={toggleMenu}
            className="mb-4 text-gray-800"
            aria-label="Close ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <Link
            href="/"
            className="flex items-center w-full px-4 py-3 rounded-md text-center text-gray-800 hover:bg-blue-300 transition"
            onClick={close}
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            href="/client-side"
            className="flex items-center w-full px-4 py-3 rounded-md text-center text-gray-800 hover:bg-blue-300 transition"
            onClick={close}
          >
            <FaLaptopCode className="mr-2" /> Client Side
          </Link>
          <Link
            href="/server-side"
            className="flex items-center w-full px-4 py-3 rounded-md text-center text-gray-800 hover:bg-blue-300 transition"
            onClick={close}>
            <FaServer className="mr-2" /> Server Side
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
