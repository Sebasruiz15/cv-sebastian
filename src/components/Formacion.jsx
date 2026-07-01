import { useRef } from "react";
import { Monitor, Globe, Wifi } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { useIntersection } from "../hooks/useIntersection";
import { DATA } from "../data/data";

const ICON_MAP = { Monitor, Globe, Wifi };

export function Formacion() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <section ref={ref} className={`py-16 section-fade ${visible ? "visible" : ""}`} style={{ background: "rgba(10,22,40,0.4)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Formación académica</SectionLabel>
        <div className="grid md:grid-cols-3 gap-5">
          {DATA.formacion.map((f, i) => {
            const Icon = ICON_MAP[f.icon] || Monitor;
            return (
              <div key={i} className="card-hover bg-white/3 border border-white/8 rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <p className="text-white font-semibold text-sm leading-snug mb-1">{f.titulo}</p>
                <p className="text-slate-500 text-xs mb-2">{f.inst}</p>
                <span className="text-blue-400 text-xs font-medium">{f.tipo}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
