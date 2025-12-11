// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { publicAsset } from "@/lib/utils"

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-neutral-600">Proyecto no encontrado.</p>
        <Link
          to="/projects"
          className="inline-flex items-center text-xs text-neutral-500 hover:text-neutral-900"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver a trabajos
        </Link>
      </div>
    )
  }

  return (
    <article className="space-y-6">
      <Link
        to="/projects"
        className="inline-flex items-center text-xs text-neutral-500 hover:text-neutral-900"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Volver a trabajos
      </Link>

      <header className="space-y-3">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
          <span>{project.year}</span>
          <span className="text-neutral-400">•</span>
          <span>{project.role}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
        <img
          src={publicAsset(project.coverImage)}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="grid md:grid-cols-[2fr,1fr] gap-6 text-sm text-neutral-800">
        <p>{project.description}</p>

        <aside className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
            Tecnologías
          </h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li
                key={t}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs"
              >
                {t}
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 mt-4"
            >
              Ver proyecto online
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </aside>
      </section>

      {project.galleryImages.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold">Galería</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.galleryImages.map((src, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100"
              >
                <img
                  src={publicAsset(src)}
                  alt={`${project.title} imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
