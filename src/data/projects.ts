export type ProjectTag =
  | "ilustración"
  | "diseño gráfico"
  | "diseño editorial"
  | "video"
  | "web"

export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  role: string
  year: number
  technologies: string[]
  tags: ProjectTag[]
  coverImage: string
  galleryImages: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Destino California",
    slug: "destino-california",
    shortDescription:
      "Trabajo de final de grado que combina la narrativa con la ilustración y el diseño",
    description:
      "Trabajo de final de grado que se centra en el desarrollo de una novela ilustrada del género young adult combinando distintas disciplinas como la ilustración digital, el diseño editorial y la narrativa.",
    role: "Diseño editorial",
    year: 2026,
    technologies: ["Procreate", "Photoshop"],
    tags: ["ilustración", "diseño editorial"],
    coverImage: "/imagenes/617077F2-995B-4F90-A6E3-9FF4FB494B8A_1_102_o.jpeg",
    galleryImages: [
      "/imagenes/904135C7-2227-4102-8477-12ACCB98B06D_1_105_c.jpeg",
      "/imagenes/65C726F1-92A5-49D6-B704-E18025FFE002_1_105_c.jpeg",
    ],
    
  },
  {
    id: "2",
    title: "Proyecto Sampler",
    slug: "sampler",
    shortDescription:
      "Campaña publicitaria para un festival de música",
    description:
      "Campaña publicitaria completa para un festival de música electrónica",
    role: "diseño y publicidad",
    year: 2025,
    technologies: ["Illustrator", "Procreate", "Photoshop"],
    tags: ["diseño gráfico"],
    coverImage: "/imagenes/cartel definitivo color bien-02 (1) (1).jpg",
    galleryImages: [
      "/imagenes/El Texto Del Párrafo - 1 (3).png",
      "/imagenes/Captura de pantalla 2024-12-01 a las 19.02.47 (2).png",
    ],
  },
  {
    id: "3",
    title: "Retratos",
    slug: "retratos",
    shortDescription:
      "Retratos digitales",
    description:
      "Retratos de fotos de pinterest en procreate",
    role: "Ilustración digital",
    year: 2024,
    technologies: ["Procreate"],
    tags: ["ilustración"],
    coverImage: "public/imagenes/Ilustración Sin Título.jpg",
    galleryImages: [
      "/imagenes/IMG2770.jpg",
      "public/imagenes/Ilustración Sin Título (1).jpg",
      "public/imagenes/Ilustración Sin Título.jpg",
    ],
  },
  {
    id: "4",
    title: "Carteles",
    slug: "carteles",
    shortDescription:
      "carteles culturales",
    description:
      "Carteles realizados para la asignatura de diseño",
    role: "Carteles",
    year: 2024,
    technologies: ["Illustrator, InDesing"],
    tags: ["diseño gráfico"],
    coverImage: "imagenes/cartel 4. pignoise copia.jpg",
    galleryImages: [
      "imagenes/cartel 3.jpg",
      "imagenes/cartel gama colores - Copia.jpg",
      "imagenes/cartel 4. pignoise copia.jpg"
    ],
  },

]
