
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { publicAsset } from "@/lib/utils"


export const HeaderHero: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Portfolio personal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Hola, soy{" "}
          <Link
            to="/about"
            className="text-[#800020] font-bold underline-offset-4 hover:underline"
          >
            Nerea Molina
          </Link>
          .
          <br />
          Diseñadora gráfica/ Ilustradora.
        </h1>
        <p className="text-sm md:text-base text-neutral-600">
          Este es un portfolio con algunos de mis proyectos de diseño e ilustración realizados durante el grado y otros trabajos
          personales.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="micolor" asChild>
            <Link to="/projects">
              Ver trabajos
              <ArrowDown className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Hablemos</Link>
          </Button>
        </div>
      </div>

      <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden">
        <div>
          <img src={publicAsset("imagenes/7B7F5C0F-B185-4AF7-A4CF-CE952B9E48F8_1_105_c.jpeg")} alt=" No photo " />
        </div>
      </div>
    </section>
  )
}
