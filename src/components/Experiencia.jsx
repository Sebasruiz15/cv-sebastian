import { useRef, useState } from "react";
import { Calendar, ChevronDown, Trophy } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";
import { useIntersection } from "../hooks/useIntersection";
import { DATA } from "../data/data";

export function Experiencia() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  const [open, setOpen] = useState(null);

  return (
    <section id="experiencia" ref={ref} className={`py-24 section-fade ${visible ? "visible" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Trayectoria profesional</SectionLabel>
        <h2 className="font-display font-bold text-4xl text-white mb-10">Experiencia <span className="text-blue-400">laboral</span></h2>
        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />
          <div className="space-y-6 pl-12">
            {DATA.experiencia.map((exp, i) => (
              <div key={i} className="timeline-dot relative">
                <div className={`card-hover bg-white/3 border rounded-2xl p-6 cursor-pointer ${open === i ? "border-blue-500/40" : "border-white/8"}`} onClick={() => setOpen(open === i ? null : i)}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white mb-0.5">{exp.rol}</h3>
                      <p className="text-blue-400 font-medium text-sm mb-1">{exp.empresa}</p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={13} className="text-slate-500" />
                        {exp.fecha}
                      </div>
                    </div>
                    <div className={`transition-transform duration-300 text-slate-400 ${open === i ? "rotate-180" : ""}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-3">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  {open === i && (
                    <div className="mt-5 pt-5 border-t border-white/8" style={{ animation: "fadeIn 0.3s ease" }}>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">Funciones</p>
                      <ul className="space-y-2 mb-4">
                        {exp.funciones.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-green-500/8 border border-green-500/20">
                        <Trophy size={15} className="text-green-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-green-300">{exp.logro}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
