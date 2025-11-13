import Container from "./ui/Container";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana López",
      role: "Emprendedora, Buenos Aires",
      quote:
        "El Ebook me dio un plan realista. En dos semanas ya tenía más energía para trabajar y cocinar sano sin gastar de más.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Lucía Fernández",
      role: "Mamá ocupada",
      quote:
        "Las guías rápidas y los bonos me salvaron. Ahora organizo la comida de toda la familia sin complicaciones y sigo en cetosis.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Carla Pereyra",
      role: "Profesional de la salud",
      quote:
        "Me encantó la claridad con la que explica cada paso. Lo recomiendo a mis pacientes que buscan un enfoque keto sustentable.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Julieta Ramos",
      role: "Diseñadora freelance",
      quote:
        "La parte de mindset y control de antojos fue la clave. Dejé el picoteo nocturno y los resultados empezaron a verse rápido.",
      image:
        "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Laura Gómez",
      role: "Docente primaria",
      quote:
        "Me acompañó en cada etapa. La combinación de recetas, compras y hábitos me ayudó a mantenerme enfocada sin sentir culpa.",
      image:
        "https://images.unsplash.com/photo-1524156868115-1c8913d79aa2?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-emerald-950/95 text-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(60rem 25rem at 15% 10%, rgba(16,185,129,0.25), transparent 60%), radial-gradient(55rem 30rem at 85% 0%, rgba(56,189,248,0.18), transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
            Testimonios reales
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Historias de personas que aplicaron el método
          </h2>
          <p className="text-emerald-100/90 text-sm md:text-base">
            Cinco experiencias de nuestra comunidad que comenzaron con dudas y hoy disfrutan de más energía,
            control y bienestar gracias al Ebook.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="h-14 w-14 rounded-full object-cover border border-white/20"
                  loading="lazy"
                />
                <figcaption className="text-left">
                  <div className="font-semibold text-white leading-tight">{testimonial.name}</div>
                  <div className="text-xs text-emerald-100/80">{testimonial.role}</div>
                </figcaption>
              </div>
              <blockquote className="text-sm text-emerald-50 leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
