import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const normalizeKey = (value: string) => value.normalize("NFC")
const localImages = import.meta.glob("../imagenes/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
})
const localImageMap = new Map(
  Object.entries(localImages).map(([path, url]) => {
    const filename = path.split("/").pop() || path
    return [normalizeKey(filename), url as string]
  }),
)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Devuelve la ruta completa para assets colocados en /public,
// respetando el base path configurado en Vite.
export function publicAsset(path: string) {
  const base = import.meta.env.BASE_URL || "/"
  const normalizedBase = base.endsWith("/") ? base : `${base}/`
  const trimmedPath = path.startsWith("/") ? path.slice(1) : path
  if (trimmedPath.startsWith("imagenes/")) {
    const filename = trimmedPath.slice("imagenes/".length)
    const localUrl = localImageMap.get(normalizeKey(filename))
    if (localUrl) {
      return localUrl
    }
  }
  return `${normalizedBase}${trimmedPath}`
}
