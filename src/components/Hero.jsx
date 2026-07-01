// archivo: components/Hero.jsx
import { Mail, Github, Linkedin, ChevronDown, Code2 } from "lucide-react";
import { DATA } from "../data/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      <div className="glow-blob w-[600px] h-[600px] bg-blue-600/20 -top-40 -right-40" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-800/15 bottom-0 -left-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroText />
          <HeroProfile />
        </div>

        <ScrollIndicator />
      </div>
    </section>
  );
}

// Bloque de texto principal (nombre, título, CTA)
function HeroText() {
  return (
    <div>
      <div className="hero-fade-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Disponible para nuevas oportunidades
      </div>

      <h1 className="hero-fade-2 font-display font-extrabold text-5xl lg:text-6xl leading-none mb-4 text-white">
        {DATA.name}
        <br />
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #60A5FA, #3B82F6, #1D4ED8)",
          }}
        >
          {DATA.lastName}
        </span>
      </h1>

      <p className="hero-fade-3 text-blue-300 font-medium text-lg mb-4 tracking-wide">
        {DATA.title}
      </p>

      <p className="hero-fade-4 text-slate-400 text-base leading-relaxed max-w-lg mb-8">
        {DATA.tagline}
      </p>

      <div className="hero-fade-5 flex flex-wrap gap-3">
        <a
          href={`mailto:${DATA.email}`}
          className="btn-primary text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Mail size={17} /> Contáctame
        </a>
        <a
          href={DATA.github}
          target="_blank"
          rel="noreferrer"
          className="btn-outline text-slate-300 font-medium px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Github size={17} /> GitHub
        </a>
        <a
          href={DATA.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn-outline text-slate-300 font-medium px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Linkedin size={17} /> LinkedIn
        </a>
      </div>
    </div>
  );
}

// Foto de perfil + badge + stats
function HeroProfile() {
  return (
    <div className="hero-fade-in flex flex-col items-center gap-8">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-110" />
        <div className="relative w-72 h-72 rounded-full border-2 border-blue-500/40 overflow-hidden">
          <img
            src="public/img.png"
            alt="Foto de perfil de Juan Sebastian Ruiz Loaiza"
            className="w-full h-full object-cover object-top scale-125"
          />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-ink-800 border border-blue-500/30 rounded-xl px-3 py-1.5 flex items-center gap-2">
          <Code2 size={14} className="text-blue-400" />
          <span className="text-xs text-slate-300 font-medium">
            Dev en formación
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        {DATA.stats.map((s) => (
          <div
            key={s.label}
            className="text-center bg-white/4 rounded-2xl border border-white/8 p-4"
          >
            <div className="font-display font-bold text-2xl text-white">
              {s.n}
            </div>
            <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Flecha de scroll hacia la siguiente sección
function ScrollIndicator() {
  return (
    <div className="flex justify-center mt-16">
      <a
        href="#sobre-mi"
        aria-label="Ir a la sección Sobre mí"
        className="animate-bounce text-blue-400 hover:text-blue-500 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </a>
    </div>
  );
}
