"use client";

import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-deep-red text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner with Dasoma Trading
        </h2>
        <p className="text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us in shaping the future of Ethiopia. Whether through investment, collaboration,
          or leveraging our expertise, Dasoma Trading provides opportunities to drive innovation,
          growth, and social impact.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-black text-deep-red font-semibold rounded hover:bg-gray-900 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
