// components/DigitalTourismCard.tsx
export default function DigitalTourismCard() {
  return (
    <div className="bg-black text-textLight shadow-lg rounded-xl p-6 border-l-4 border-red-700 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold mb-4">Digital Tourism & Event Organizing</h3>
      <p className="mb-4">
        Bringing Ethiopia’s culture and tourism to the world digitally. Book authentic local experiences, guided tours, and attend exhibitions or events organized seamlessly by Dasoma Trading.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Online booking platform for stays and experiences</li>
        <li>Exhibition and event management with virtual options</li>
        <li>Integration with transportation services for seamless travel</li>
        <li>Empowering local communities and entrepreneurs</li>
      </ul>
      <button className="mt-4 bg-primary text-textLight px-4 py-2 rounded hover:bg-red-900 transition">
        Learn More
      </button>
    </div>
  );
}
