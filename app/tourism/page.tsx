import { TourismSection } from "@/components/sections/TourismSection";

export default function TourismPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero for Tourism */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-deep-red mb-6">
          Dasoma Digital Tourism
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Experience Ethiopia like never before. Book authentic stays, guided cultural tours,
          and enjoy seamless digital travel solutions.
        </p>
      </section>

      {/* Features */}
      <TourismSection />
    </div>
  );
}
