import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";
import { useIntersection } from "../hooks/useIntersection";
import { DATA } from "../data/data";

export function Proyectos() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <section id="proyectos" ref={ref} className={`py-24 section-fade ${visible ? "visible" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Proyectos</SectionLabel>
        <h2 className="font-display font-bold text-4xl text-white mb-10">Lo que he <span className="text-blue-400">construido</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA.proyectos.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="card-hover flex flex-col bg-white/3 border border-white/8 rounded-2xl overflow-hidden group no-underline">
              <div className="bg-ink-800 border-b border-white/8 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-slate-500 ml-1 truncate">{p.preview}</span>
                <ExternalLink size={13} className="ml-auto text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-base text-white leading-tight">{p.nombre}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${p.status === "En vivo" ? "bg-green-500/15 text-green-400 border border-green-500/30" : "bg-blue-500/15 text-blue-400 border border-blue-500/30"}`}>{p.status}</span>
                </div>
                <p className="text-blue-400 text-xs font-medium mb-3">{p.empresa}</p>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <Tag key={t} blue>{t}</Tag>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
