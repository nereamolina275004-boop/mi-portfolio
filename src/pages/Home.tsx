
import { HeaderHero } from "@/components/ui/HeaderHero"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { Link } from "react-router"

export const Home: React.FC = () => {
  const featured = projects.slice(0, 3)

  return (
    <div className="space-y-10">
      <HeaderHero />

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Trabajos destacados</h2>
          <Link
            to="/projects"
            className=" text-xs text-neutral-500 hover:text-neutral-900"
          >
            Ver todos
          </Link>
        </div>

        <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

