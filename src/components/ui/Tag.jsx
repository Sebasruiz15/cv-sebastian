export function Tag({ children, blue = false }) {
  return (
    <span className={`tag-hover text-xs px-2.5 py-1 rounded-full border cursor-default select-none ${blue ? "bg-blue-500/10 text-blue-300 border-blue-500/30" : "bg-white/5 text-slate-400 border-white/10"}`}>
      {children}
    </span>
  );
}
