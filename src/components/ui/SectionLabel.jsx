export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-blue-400 text-xs font-semibold tracking-[3px] uppercase">{children}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
    </div>
  );
}
