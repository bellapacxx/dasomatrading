"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Dasoma Group Hero"
          className="w-full h-full object-cover filter brightness-75"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-deep-red mb-6 drop-shadow-lg"
        >
          Driving Ethiopia’s Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 text-gray-200 max-w-2xl drop-shadow-md"
        >
          From Automotive Leadership to Mega Projects, Dasoma Trading is shaping industries that
          transform lives across Ethiopia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center md:justify-start gap-4"
        >
          <Link
            href="/about"
            className="px-6 py-3 bg-deep-red hover:bg-red-800 rounded font-semibold transition shadow-lg"
          >
            About Us
          </Link>
          <Link
            href="/tourism"
            className="px-6 py-3 border border-deep-red text-deep-red hover:bg-deep-red hover:text-white rounded font-semibold transition shadow-lg"
          >
            Explore Tourism
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="block w-3 h-3 rounded-full bg-deep-red mb-2"></span>
          <span className="block w-3 h-3 rounded-full bg-deep-red mb-2"></span>
          <span className="block w-3 h-3 rounded-full bg-deep-red"></span>
        </div>
      </div>
    </section>
  );
}
