import Container from "./ui/Container";

export default function Benefits() {
  const items = [
    { title: "Planificación sin estrés", desc: "Estructura tus menús keto con reemplazos inteligentes." },
    { title: "Control de antojos", desc: "Diferenciá hambre real vs emocional y evitá errores comunes." },
    { title: "Energía y foco", desc: "Mejorá tu día con hábitos que sostienen la cetosis sin sacrificios." },
    { title: "Resultados duraderos", desc: "Integrá el método a tu estilo de vida sin retrocesos." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-8">Lo que vas a lograr</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="font-bold text-emerald-800 mb-1">{it.title}</div>
              <p className="text-slate-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
