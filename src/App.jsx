import { useState, useEffect } from "react";
import { Nav }         from "./components/Nav";
import { Hero }        from "./components/Hero";
import { SobreMi }     from "./components/SobreMi";
import { Skills }      from "./components/Skills";
import { Experiencia } from "./components/Experiencia";
import { Formacion }   from "./components/Formacion";
import { Proyectos }   from "./components/Proyectos";
import { Contacto }    from "./components/Contacto";
import { Footer }      from "./components/Footer";

const SECTION_IDS = ["inicio", "sobre-mi", "skills", "experiencia", "proyectos", "contacto"];

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="noise">
      <Nav active={activeSection} />
      <main>
        <Hero />
        <SobreMi />
        <Skills />
        <Experiencia />
        <Formacion />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
