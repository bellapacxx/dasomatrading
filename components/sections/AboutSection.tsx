"use client";

import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-red mb-6">
            About Dasoma Trading
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Dasoma Trading is a conglomerate based in Addis Ababa, Ethiopia, with over a decade of
            experience in automotive, trading, tourism, event organizing, and mega projects.
            Through its sister companies, the group delivers quality services and products that
            transform industries and communities.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            With a commitment to integrity, innovation, and professionalism, Dasoma Trading continues
            to expand its impact across Ethiopia and beyond.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-deep-red hover:bg-red-800 rounded font-semibold transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image/Illustration */}
        <div className="md:w-1/2">
          <img
            src="/images/about-hero.png"
            alt="Dasoma Trading"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
