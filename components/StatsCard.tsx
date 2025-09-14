// components/StatsCard.tsx
export default function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-black text-textLight p-6 rounded-xl shadow-lg border border-red-800 hover:shadow-2xl transition text-center">
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p className="text-gray-400">{title}</p>
    </div>
  );
}
