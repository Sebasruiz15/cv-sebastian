import { useRef } from "react";
import { SectionLabel } from "./ui/SectionLabel";
import { SkillBar } from "./ui/SkillBar";
import { useIntersection } from "../hooks/useIntersection";
import { DATA } from "../data/data";

const GROUPS = [
  { label: "Tecnologías Web", badge: "Básico · En formación", color: "#F59E0B", key: "web"   },
  { label: "Bases de Datos",  badge: "Básico",                color: "#F59E0B", key: "db"    },
  { label: "Otros Lenguajes & Herramientas", badge: "Intermedio", color: "#3B82F6", key: "otros" },
  { label: "Redes & Telecomunicaciones",     badge: "Avanzado",   color: "#22C55E", key: "redes" },
];

export function Skills() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <section id="skills" ref={ref} className={`py-24 section-fade ${visible ? "visible" : ""}`} style={{ background: "linear-gradient(180deg, transparent, rgba(10,22,40,0.6), transparent)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Stack técnico</SectionLabel>
        <h2 className="font-display font-bold text-4xl text-white mb-10">Mis <span className="text-blue-400">habilidades</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {GROUPS.map((group, gi) => (
            <div key={group.label} className="card-hover bg-white/3 border border-white/8 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-white">{group.label}</span>
                <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color: group.color, borderColor: group.color + "44", background: group.color + "12" }}>{group.badge}</span>
              </div>
              {visible && DATA.skills[group.key].map((skill, bi) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 100 + bi * 80} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
