import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Devuelve la ruta completa para assets colocados en /public,
// respetando el base path configurado en Vite.
export function publicAsset(path: string) {
  const base = import.meta.env.BASE_URL || "/"
  const normalizedBase = base.endsWith("/") ? base : `${base}/`
  const trimmedPath = path.startsWith("/") ? path.slice(1) : path
  return `${normalizedBase}${trimmedPath}`
}
