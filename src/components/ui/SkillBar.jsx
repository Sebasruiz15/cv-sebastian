import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";

export function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const visible = useIntersection(ref, 0.1);
  const color = level >= 70 ? "#22C55E" : level >= 45 ? "#3B82F6" : "#F59E0B";
  const label = level >= 70 ? "Intermedio-Avanzado" : level >= 45 ? "Básico-Intermedio" : "Básico";
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs px-2 py-0.5 rounded-full border" style={{ color, borderColor: color + "44", background: color + "14", fontSize: "11px" }}>{label}</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full rounded-full skill-bar" style={{ width: visible ? `${level}%` : "0%", background: `linear-gradient(90deg, ${color}88, ${color})`, transitionDelay: `${delay}ms` }} />
      </div>
    </div>
  );
}
