"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function DivisionsSection() {
  const divisions = [
    {
      name: "Dasoma Trading PLC",
      description:
        "Leading car sales company in Ethiopia, supplying vehicles to private users, government organizations, NGOs, and taxi associations.",
      link: "/about#dasoma-trading",
      image: "/images/divisions/trading.jpg",
    },
    {
      name: "Dasoma Motors",
      description:
        "Owns the largest car assembly plant in Ethiopia, producing 100 cars daily with advanced facilities.",
      link: "/about#dasoma-motors",
      image: "/images/divisions/motors.jpg",
    },
    {
      name: "Dasoma Tour & Travel PLC",
      description:
        "Provides tourism solutions, travel management, and cultural experiences across Ethiopia.",
      link: "/tourism",
      image: "/images/divisions/tourism.jpg",
    },
    {
      name: "Yene Mekina",
      description:
        "Major brand for car sales and rental, offering 24/7 services, leasing, and a digital credit system for customers.",
      link: "/about#yene-mekina",
      image: "/images/divisions/yene-mekina.jpg",
    },
    {
      name: "Dantimo LLC",
      description:
        "Focused on industrial and trade services, providing innovative solutions in multiple sectors.",
      link: "/about#dantimo",
      image: "/images/divisions/dantimo.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-red mb-12 text-center">
          Our Divisions
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => (
            <Card key={division.name}>
              <img
                src={division.image}
                alt={division.name}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  {division.name}
                </h3>
                <p className="text-gray-300 mb-4">{division.description}</p>
                <Link
                  href={division.link}
                  className="text-deep-red font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
