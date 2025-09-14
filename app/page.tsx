import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { DivisionsSection } from "@/components/sections/DivisionsSection";
import { TourismSection } from "@/components/sections/TourismSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Dasoma Group */}
      <AboutSection />

      {/* Our Divisions */}
      <DivisionsSection />

      {/* Digital Tourism */}
      <TourismSection />

      {/* Exhibition & Event Organizing */}
      <EventsSection />

      {/* Mega Projects */}
      <ProjectsSection />

      {/* Call to Action */}
      <CTA />
    </>
  );
}
