import Container from "./UI/Container";

const items = [
  {
    title: "Planificación sin estrés",
    desc: "Armá menús keto simples con reemplazos inteligentes.",
    img: "/assets/plan_keto2.avif",
  },
  {
    title: "Control de antojos",
    desc: "Diferenciá hambre real de emocional y evitá recaídas.",
    img: "/assets/antojo_keto.jpg",
  },
  {
    title: "Energía y foco",
    desc: "Hábitos diarios que sostienen tu rendimiento.",
    img: "/assets/energia_keto.avif",
  },
  {
    title: "Resultados duraderos",
    desc: "Convertí keto en un estilo de vida sostenible.",
    img: "/assets/estilo_keto.png",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-10 text-center">
          Cambia Tu Vida HOY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-emerald-900">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Franja de prueba social opcional */}
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <span className="ml-1">4.9/5</span>
            <span className="mx-2">·</span>
            <span>+1.200 lectores</span>
          </div>
          <div className="text-xs text-slate-500">
            “Resultados pueden variar según cada persona.”
          </div>
        </div>
      </Container>
    </section>
  );
}
