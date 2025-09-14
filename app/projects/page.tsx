// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    { name: "Cement Factory", location: "Northern Ethiopia" },
    { name: "Food Oil Refinery", location: "Ethiopia" },
    { name: "Solar-Powered Housing", location: "500,000m² land (PPP)" },
    { name: "Solar Grid Replacement", location: "Region with 8 million residents" },
    { name: "Mega Amusement Park", location: "Ethiopia" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Mega Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} location={project.location} />
        ))}
      </div>
    </main>
  );
}
