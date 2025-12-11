
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/ProjectCard"

export const Projects: React.FC = () => {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Trabajos</h1>
        <p className="text-sm text-neutral-600">
          Selección de proyectos realizados durante el grado y otros trabajos
          creativos.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

