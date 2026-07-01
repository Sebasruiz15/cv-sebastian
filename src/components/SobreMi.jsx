import { useRef } from "react";
import { MapPin, Phone, Mail, CreditCard } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";
import { useIntersection } from "../hooks/useIntersection";
import { DATA } from "../data/data";

export function SobreMi() {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  const items = [
    { icon: MapPin,     label: "Ubicación", value: DATA.location },
    { icon: Phone,      label: "Teléfono",  value: DATA.phone    },
    { icon: Mail,       label: "Correo",    value: DATA.email    },
    { icon: CreditCard, label: "Cédula",    value: DATA.cc       },
  ];
  return (
    <section id="sobre-mi" ref={ref} className={`py-24 section-fade ${visible ? "visible" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Sobre mí</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display font-bold text-4xl text-white mb-6 leading-tight">
              Técnico apasionado por <span className="text-blue-400">resolver problemas</span> con tecnología
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">{DATA.about}</p>
            <div className="flex flex-wrap gap-2">
              {DATA.soft.map((s) => <Tag key={s} blue>{s}</Tag>)}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card-hover flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/3 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                  <div className="text-sm text-slate-200 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
