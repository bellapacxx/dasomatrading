// components/DivisionCard.tsx
export default function DivisionCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-primary text-text-light p-6 rounded-xl shadow-lg border border-red-800 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}
