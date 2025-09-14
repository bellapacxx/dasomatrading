"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function EventsSection() {
  const services = [
    {
      title: "Corporate Events",
      description:
        "Planning and executing conferences, meetings, and corporate gatherings with precision.",
      image: "/images/events/corporate.jpg",
    },
    {
      title: "Trade Exhibitions",
      description:
        "Organizing trade fairs and expos that connect businesses, investors, and communities.",
      image: "/images/events/exhibitions.jpg",
    },
    {
      title: "Cultural Festivals",
      description:
        "Showcasing Ethiopian and African culture through large-scale cultural events.",
      image: "/images/events/festivals.jpg",
    },
    {
      title: "Event Management Services",
      description:
        "Full-service event planning including logistics, marketing, and on-site management.",
      image: "/images/events/management.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-red mb-12 text-center">
          Exhibitions & Event Organizing
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Dasoma Events & Exhibitions provides end-to-end event solutions, from corporate
          conferences to cultural festivals, connecting communities and businesses across Ethiopia.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events"
            className="px-6 py-3 bg-deep-red hover:bg-red-800 rounded font-semibold transition"
          >
            Learn More About Events
          </Link>
        </div>
      </div>
    </section>
  );
}
