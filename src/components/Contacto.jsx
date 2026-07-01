import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { useIntersection } from "../hooks/useIntersection";
import { DATA } from "../data/data";

export function Contacto() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <section id="contacto" ref={ref} className={`py-24 section-fade ${visible ? "visible" : ""}`} style={{ background: "linear-gradient(180deg, transparent, rgba(10,22,40,0.8))" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionLabel>Contacto</SectionLabel>
        <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4">¿Hablamos?</h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto">Estoy disponible para nuevas oportunidades laborales y proyectos. ¡No dudes en escribirme!</p>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href={`mailto:${DATA.email}`} className="btn-primary text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2.5">
            <Mail size={18} /> {DATA.email}
          </a>
          <a href={`tel:${DATA.phone}`} className="btn-outline text-slate-300 font-medium px-8 py-3.5 rounded-xl flex items-center gap-2.5">
            <Phone size={18} /> {DATA.phone}
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a href={DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-outline w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 hover:text-white">
            <Github size={20} />
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-outline w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 hover:text-white">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
