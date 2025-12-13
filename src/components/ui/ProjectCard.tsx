

import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router"
import { publicAsset } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const coverSrc = publicAsset(project.coverImage)
  const isContain = project.coverFit === "contain"

  return (
    <Link to={`/projects/${project.slug}`} className="group">
      <Card className="h-full border-neutral-200 hover:border-[#800020] transition-colors flex flex-col overflow-hidden">
        <div
          className="aspect-video overflow-hidden bg-neutral-100 flex items-center justify-center"
        >
          <img
            src={coverSrc}
            alt={project.title}
            className={`w-full h-full ${isContain ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-300`}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-base">{project.title}</CardTitle>
          <p className="text-xs text-neutral-500">{project.shortDescription}</p>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
