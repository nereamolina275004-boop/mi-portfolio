import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { AppLayout } from "@/components/AppLayout"
import { Home } from "./pages"
import { Projects } from "./pages"
import { ProjectDetail } from "./pages"
import { About } from "./pages"
import { Contact } from "./pages"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
