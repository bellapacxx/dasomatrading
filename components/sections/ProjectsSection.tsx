"use client";

import { Card } from "@/components/ui/Card";

export function ProjectsSection() {
  const projects = [
    {
      title: "Cement Factory",
      description:
        "One of the largest cement factories in northern Ethiopia, driving industrial growth.",
      image: "/images/projects/cement-factory.jpg",
    },
    {
      title: "Food Oil Refinery",
      description:
        "Modern refinery producing high-quality edible oils for domestic and export markets.",
      image: "/images/projects/oil-refinery.jpg",
    },
    {
      title: "Solar Housing Project",
      description:
        "500,000m² solar-powered housing development in a Public-Private Partnership model.",
      image: "/images/projects/solar-housing.jpg",
    },
    {
      title: "Solar Grid Replacement",
      description:
        "Implementing renewable solar technology to replace grid systems for 8 million people.",
      image: "/images/projects/solar-grid.jpg",
    },
    {
      title: "Mega Amusement Park",
      description:
        "A large-scale entertainment and amusement park serving communities and tourists.",
      image: "/images/projects/amusement-park.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-red mb-12 text-center">
          Mega Projects
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Dasoma Trading undertakes transformative mega projects across Ethiopia, spanning
          industrial, housing, renewable energy, and entertainment sectors.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-red mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
