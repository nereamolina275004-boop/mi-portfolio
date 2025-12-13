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
  coverFit?: "cover" | "contain"
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Destino California",
    slug: "destino-california",
    shortDescription:
      "Trabajo de final de grado que combina la narrativa con la ilustración y el diseño",
    description:
      "Destino California es un proyecto de novela ilustrada de género young adult que integra escritura creativa, ilustración digital y diseño editorial, desarrollado como una propuesta autoral completa desde la concepción de la historia hasta la maquetación final. La obra narra la historia de Ava y Nan, dos amigas que atraviesan un momento de cambio vital marcado por la insatisfacción, el miedo y la necesidad de empezar de nuevo, abordando temas como el crecimiento personal, la amistad, la búsqueda de identidad y el salto hacia lo desconocido a través de una narración en primera persona con puntos de vista alternos. El proyecto combina texto e imagen para reforzar la carga emocional de escenas clave, apostando por una estética contemporánea inspirada en la ilustración juvenil actual y concebida como una edición ilustrada conceptual con enfoque profesional y potencial editorial.",
    role: "Diseño editorial",
    year: 2026,
    technologies: ["Procreate", "Photoshop"],
    tags: ["ilustración", "diseño editorial"],
    coverImage: "src/imagenes/617077F2-995B-4F90-A6E3-9FF4FB494B8A_1_102_o.jpeg",
    galleryImages: [
      "src/imagenes/Ilustración_sin_título (1).jpg",
      "src/imagenes/Ilustración_sin_título_2.jpg",
      "src/imagenes/Ilustración_sin_título 1 (1).jpg",
      "src/imagenes/0BF2116A-C7E8-4E34-BC29-07B256F3FB7E_1_105_c.jpeg",
      "src/imagenes/5F293D66-A87B-42A0-BC00-66BF9D699F2F_1_105_c.jpeg",
      "src/imagenes/97282C07-366B-4A1D-9E24-7D4A87E8F515_1_102_o.jpeg",
      "src/imagenes/DB69CEB7-494A-4EB3-8C0A-2A392548742F_1_102_o.jpeg",
    ],
    
  },
  {
    id: "2",
    title: "Proyecto Sampler",
    slug: "sampler",
    shortDescription:
      "Campaña publicitaria para un festival de música",
    description:
      "Sampler es un festival de artes sonoras expandidas celebrado en Matadero Madrid, que explora la intersección entre lo visual y lo sonoro a través de una programación experimental y multidisciplinar. El proyecto desarrolla una identidad visual modular y flexible que traduce el concepto de sonido expandido en un sistema gráfico adaptable a múltiples soportes físicos y digitales.",
    role: "diseño y publicidad",
    year: 2025,
    technologies: ["Illustrator", "Procreate", "Photoshop"],
    tags: ["diseño gráfico"],
    coverImage: "src/imagenes/cartel definitivo color bien-02 (1) (1).jpg",
    galleryImages: [
      "src/imagenes/El Texto Del Párrafo - 1 (3).png",
      "src/imagenes/Captura de pantalla 2024-12-01 a las 19.02.47 (2).png",
      "src/imagenes/El Texto Del Párrafo - 1 (1).jpg",
      "src/imagenes/Captura de pantalla 2024-12-02 a las 11.49.35 (1).png",
    ],
  },
  {
    id: "3",
    title: "Retratos",
    slug: "retratos",
    shortDescription:
      "Retratos digitales",
    description:
      "Serie de ilustraciones digitales de retrato femenino, realizadas en Procreate como proyecto personal. El trabajo explora la expresión, la identidad y la emocionalidad a través de un enfoque de realismo estilizado, poniendo especial atención en la luz, el color y el tratamiento de la piel.",
    role: "Ilustración digital",
    year: 2024,
    technologies: ["Procreate"],
    tags: ["ilustración"],
    coverImage: "src/imagenes/Ilustración Sin Título.jpg",
    galleryImages: [
      "src/imagenes/IMG2770.jpg",
      "src/imagenes/Ilustración Sin Título (1).jpg",
      "src/imagenes/Ilustración Sin Título.jpg",
    ],
  },
  {
    id: "4",
    title: "Carteles",
    slug: "carteles",
    shortDescription:
      "carteles culturales",
    description:
      "Proyecto de diseño de cartelería cultural que reinterpreta diferentes obras teatrales y musicales a través de lenguajes gráficos contemporáneos. Cada cartel explora una identidad visual propia, trabajando con tipografía expresiva, composición experimental y color como elemento narrativo para transmitir el carácter de cada obra.",
    role: "Carteles",
    year: 2024,
    technologies: ["Illustrator", "InDesing"],
    tags: ["diseño gráfico"],
    coverImage: "src/imagenes/cartel 4. pignoise copia.jpg",
    galleryImages: [
      "src/imagenes/cartel 3.jpg",
      "src/imagenes/cartel gama colores - Copia.jpg",
      "src/imagenes/cartel 4. pignoise copia.jpg"
    ],
  },

  {
    id: "5",
    title: "Tipografías",
    slug: "tipografías",
    shortDescription:
      "Tipografías propias.",
    description:
      "Proyecto de diseño tipográfico experimental, desarrollado a partir de la creación de un sistema de formas orgánicas inspirado en el movimiento, el fuego y la transformación. El trabajo investiga la legibilidad, la repetición y la composición, explorando la tipografía más allá de su función comunicativa para convertirla en un elemento visual y expresivo.",
    role: "Tipografías",
    year: 2024,
    technologies: ["Illustrator", "InDesing", "Procreate"],
    tags: ["diseño gráfico"],
    coverImage: "src/imagenes/fallas tipografía negro.png",
    coverFit: "contain",
    galleryImages: [
      "src/imagenes/fallas tipografía.png",
      "src/imagenes/Tipografía diseño negro vertical.png",
      "src/imagenes/Tipografía diseño sin color vertical.png"
    ],
  },


]
