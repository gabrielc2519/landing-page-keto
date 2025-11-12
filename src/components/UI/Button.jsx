export default function Button({ href = "#", children, variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition shadow-sm";
  const map = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white",
    dark: "bg-emerald-900 hover:bg-emerald-950 text-white",
    outline: "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-white/90 backdrop-blur",
  };
  const style = map[variant] || map.primary;
  const target = href && href.startsWith("http") ? "_blank" : undefined;
  return (
    <a href={href} target={target} rel="noreferrer" className={`${base} ${style} ${className}`}>
      {children}
    </a>
  );
}
