// components/ProjectCard.tsx
export default function ProjectCard({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <div className="bg-black text-textLight p-6 rounded-xl shadow-lg border border-red-800 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400">{location}</p>
    </div>
  );
}
