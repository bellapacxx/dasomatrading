import { EventsSection } from "@/components/sections/EventsSection";

export default function EventsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero for Events */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-deep-red mb-6">
          Dasoma Exhibitions & Events
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Professional event planning and management services for corporate conferences,
          trade exhibitions, and cultural festivals.
        </p>
      </section>

      {/* Services */}
      <EventsSection />
    </div>
  );
}
