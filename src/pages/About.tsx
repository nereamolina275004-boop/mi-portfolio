
import { studies, skills } from "@/data/profile"
import { publicAsset } from "@/lib/utils"

export const About: React.FC = () => {
  return (
    <section className="space-y-8">
      <header className="flex flex-col md:flex-row-reverse gap-6 items-start">
        <div className="space-y-2 flex-1">
          <h1 className="text-2xl font-semibold text-[#800020] uppercase">
            Sobre mí
          </h1>
          <p className="text-sm text-neutral-600">
            Soy Nerea Molina Berna, estudiante de Bellas Artes con interés en el
            diseño gráfico, editorial y la ilustración, sobre todo digital. Aquí
            puedes ver un resumen de mi formación y habilidades principales.
          </p>
        </div>

        <div className="w-full max-w-sm flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-xl border border-neutral-200"
            src={publicAsset("imagenes/IMG_3890.jpg")}
            alt=""
          />
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Estudios */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
            Estudios
          </h2>
          <ul className="space-y-3">
            {studies.map((s) => (
              <li
                key={s.id}
                className="border border-[#c80453]  rounded-xl p-2 text-sm"
              >
                <p className="font-medium">{s.title}</p>
                <p className="text-neutral-500 text-xs">{s.center}</p>
                <p className="text-neutral-400 text-xs mt-1">{s.years}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Habilidades */}
        <div className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
            Habilidades
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="border border-[#c80453] rounded-xl p-2 flex flex-col"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs text-neutral-500">
                  Nivel: {skill.level}
                </span>
                <span className="text-[11px] text-neutral-400 mt-1">
                  Área: {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
