import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { DATA } from "../data/data";

const NAV_LINKS = [
  { id: "inicio",       label: "Inicio"      },
  { id: "sobre-mi",    label: "Sobre mí"    },
  { id: "skills",      label: "Skills"      },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos",   label: "Proyectos"   },
  { id: "contacto",    label: "Contacto"    },
];

export function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 bg-ink-950/90 backdrop-blur-xl border-b border-white/5" : "py-5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo("inicio")} className="font-display font-bold text-lg text-white tracking-tight">
          JS<span className="text-blue-400">.</span>dev
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} className={`nav-link text-sm transition-colors duration-200 ${active === id ? "active text-white" : "text-slate-400 hover:text-white"}`}>
              {label}
            </button>
          ))}
          <a href={`mailto:${DATA.email}`} className="btn-primary text-white text-sm font-medium px-4 py-2 rounded-lg">
            Contrátame
          </a>
        </div>
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left py-3 text-sm text-slate-300 border-b border-white/5 last:border-0">
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
