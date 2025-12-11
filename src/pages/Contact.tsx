// src/pages/Contact.tsx
import { type FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

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

  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Formulario enviado:", form)
    setStatus("sent")
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Contacto</h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          ¿Tienes un proyecto, una colaboración o simplemente quieres saludar?
          Rellena el formulario o escríbeme directamente a{" "}
          <a
            href="nereamolina275004@gmail.com"
            className="text-[#800020] underline underline-offset-2"
          >
            nereamolina275004@gmail.com
          </a>
          .
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-md space-y-4 border border-neutral-200 rounded-2xl p-4"
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
          />
        </div>

        <Button variant={"micolor"} type="submit" className="inline-flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Enviar mensaje
        </Button>

        {status === "sent" && (
          <p className="text-xs text-emerald-600 mt-2">
            ¡Gracias! He recibido tu mensaje (simulado).
          </p>
        )}
      </form>
    </section>
  )
}

