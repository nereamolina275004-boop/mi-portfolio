export interface Study {
  id: string
  title: string
  center: string
  years: string
}

export interface Skill {
  id: string
  name: string
  level: "básico" | "intermedio" | "avanzado"
  category: "diseño" | "desarrollo" | "video" | "otro" | "ilustración"
}

export const studies: Study[] = [
  {
    id: "1",
    title: "Grado en Bellas Artes",
    center: "Universidad politécnica de valencia",
    years: "2022 - 2026",
  },
  {
    id: "2",
    title: "Bachillerato de Artes",
    center: "IES Poeta Paco Mollá",
    years: "2020 - 2022",
  },
]

export const skills: Skill[] = [
  { id: "1", name: "React", level: "intermedio", category: "desarrollo" },
  { id: "2", name: "TypeScript", level: "intermedio", category: "desarrollo" },
  { id: "3", name: "Tailwind CSS", level: "intermedio", category: "desarrollo" },
  { id: "4", name: "Adobe Premiere", level: "intermedio", category: "video" },
  { id: "5", name: "After Effects", level: "básico", category: "video" },
  { id: "6", name: "Adobe Photoshop", level: "avanzado", category: "diseño" },
  { id: "7", name: "Adobe InDesing", level: "avanzado", category: "diseño" },
  { id: "8", name: "Adobe Ilustrator", level: "avanzado", category: "ilustración" },
  { id: "9", name: "Procreate", level: "avanzado", category: "ilustración" },
  { id: "10", name: "Microsoft Word", level: "intermedio", category: "otro" },
]
