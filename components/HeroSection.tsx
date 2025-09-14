// components/HeroSection.tsx
export default function HeroSection({
  title,
  subtitle,
  ctaText,
}: {
  title: string;
  subtitle: string;
  ctaText: string;
}) {
  return (
    <section
      className="py-32 text-center"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-light)",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
      <button
        style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-light)" }}
        className="px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        {ctaText}
      </button>
    </section>
  );
}
