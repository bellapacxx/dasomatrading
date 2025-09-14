// app/divisions/page.tsx
import DivisionCard from "@/components/DivisionCard";

export default function DivisionsPage() {
  const divisions = [
    {
      name: "Dasoma Trading PLC",
      description: "Leading car sales company in Ethiopia, serving private users, government, NGOs, and taxi associations.",
    },
    {
      name: "Dasoma Motors",
      description: "Owner of Ethiopia’s largest car assembly plant with a daily capacity of 100 cars.",
    },
    {
      name: "Dasoma Tour & Travel PLC",
      description: "Providing local and international travel services with trusted professionalism.",
    },
    {
      name: "Yene Mekina",
      description: "Car sales and rental brand offering 24/7 services, leasing options, and a digital credit system.",
    },
    {
      name: "Dantimo LLC",
      description: "Supporting ventures and investments in diversified industries.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Our Divisions</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisions.map((division) => (
          <DivisionCard key={division.name} name={division.name} description={division.description} />
        ))}
      </div>
    </main>
  );
}
