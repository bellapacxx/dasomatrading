"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-black text-white min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-deep-red mb-12 text-center">
          Contact Us
        </h1>

        {submitted ? (
          <p className="text-gray-300 text-center text-lg">
            Thank you! Your message has been submitted. We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded bg-gray-900 border border-deep-red text-white focus:outline-none focus:ring-2 focus:ring-deep-red"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded bg-gray-900 border border-deep-red text-white focus:outline-none focus:ring-2 focus:ring-deep-red"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={6}
                required
                className="w-full px-4 py-3 rounded bg-gray-900 border border-deep-red text-white focus:outline-none focus:ring-2 focus:ring-deep-red"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-deep-red hover:bg-red-800 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
