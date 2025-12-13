
import { type FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Instagram, Mail } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Nuevo mensaje de ${form.name}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`,
    )

    window.location.href = `mailto:bynerssart@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="space-y-6 flex flex-col items-center justify-center">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-center">Contacto</h1>
        <p className="text-sm text-neutral-600 max-w-xl text-center">
          ¿Tienes un proyecto, una colaboración o simplemente quieres saludar?
          Rellena el formulario o escríbeme directamente a{" "}
          <a
            href="mailto:bynerssart@gmail.com"
            className="text-[#800020] underline underline-offset-2"
          >
            bynerssart@gmail.com
          </a>
          .
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-4 border border-[#800020] rounded-2xl p-4 bg-[#c80453]/15"
      >
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs text-neutral-600">
            Nombre
          </label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border-[#800020] bg-white"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-xs text-neutral-600">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border-[#800020] bg-white"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-xs text-neutral-600">
            Mensaje
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="border-[#800020] bg-white"
          />
        </div>

        <Button variant={"micolor"} type="submit" className="inline-flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Enviar mensaje
        </Button>
      </form> 

      <a
      href="https://www.instagram.com/bynerssart"
      target="_blank"
      className="text-[#800020] hover:text-[#c80453]/15"
      >
        <Instagram size={30}/>
 
      </a>
    </section>
   
  )
}
