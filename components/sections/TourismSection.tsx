"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function TourismSection() {
  const features = [
    {
      title: "Authentic Stays",
      description:
        "Book unique Ethiopian homes, eco-lodges, and apartments for an immersive experience.",
      image: "/images/tourism/stays.jpg",
    },
    {
      title: "Guided Cultural Tours",
      description:
        "Experience Ethiopia’s heritage with curated tours guided by local experts.",
      image: "/images/tourism/tours.jpg",
    },
    {
      title: "Digital Booking",
      description:
        "Seamless online platform for booking stays, transportation, and experiences.",
      image: "/images/tourism/booking.jpg",
    },
    {
      title: "Community Empowerment",
      description:
        "Support local hosts and communities while enjoying authentic experiences.",
      image: "/images/tourism/community.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-red mb-12 text-center">
          Digital Tourism
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Dasoma Digital Tourism reimagines travel in Ethiopia. Book authentic stays,
          cultural tours, and experiences with our seamless online platform.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tourism"
            className="px-6 py-3 bg-deep-red hover:bg-red-800 rounded font-semibold transition"
          >
            Explore Tourism
          </Link>
        </div>
      </div>
    </section>
  );
}
