// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-textLight fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <img src="/images/logo.png" alt="Dasoma Group Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/about" className="hover:text-red-500 transition">About</Link>
          <Link href="/divisions" className="hover:text-red-500 transition">Divisions</Link>
          <Link href="/projects" className="hover:text-red-500 transition">Projects</Link>
          <Link href="/digital-tourism" className="hover:text-red-500 transition">Digital Tourism</Link>
          <Link href="/contact" className="hover:text-red-500 transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black px-6 py-4 space-y-2">
          <Link href="/" className="block hover:text-red-500 transition">Home</Link>
          <Link href="/about" className="block hover:text-red-500 transition">About</Link>
          <Link href="/divisions" className="block hover:text-red-500 transition">Divisions</Link>
          <Link href="/projects" className="block hover:text-red-500 transition">Projects</Link>
          <Link href="/digital-tourism" className="block hover:text-red-500 transition">Digital Tourism</Link>
          <Link href="/contact" className="block hover:text-red-500 transition">Contact</Link>
        </nav>
      )}
    </header>
  );
}
