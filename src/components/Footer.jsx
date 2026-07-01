import { DATA } from "../data/data";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-white text-sm">JS<span className="text-blue-400">.</span>dev</span>
        <span className="text-slate-600 text-sm">{DATA.name} {DATA.lastName} · CC {DATA.cc} · {DATA.location}</span>
        <span className="text-slate-700 text-xs">Built with React + Tailwind CSS + Vite</span>
      </div>
    </footer>
  );
}
