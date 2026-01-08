import { NavLink, Outlet } from "react-router"
import { cn, publicAsset } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/projects", label: "Trabajos" },
  { to: "/about", label: "Sobre mí" },
  { to: "/contact", label: "Contacto" },
]

const navLinkClasses = (isActive: boolean) =>
  cn(
    "rounded-full px-3 py-2 text-sm transition-colors",
    isActive
      ? "bg-[#c80453]/15 text-[#800020] shadow-sm"
      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
  )

export const AppLayout: React.FC = () => {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <NavLink
            to="/"
            end
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#800020]"
          >
            <Avatar className="size-15">
              <AvatarImage
                src={publicAsset("imagenes/Logotipo Minimalista en Rosa Pastel.png")}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </Avatar>
            <span>NM · Portfolio</span>
          </NavLink>

          <nav className="flex flex-wrap items-center gap-2">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => navLinkClasses(isActive)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="w-full flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
