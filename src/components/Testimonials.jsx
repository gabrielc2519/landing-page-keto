import Container from "./ui/Container";

export default function Testimonials() {
  const reviews = [
    { name: "Lucía", img: "/assets/rev1.jpg", text: "Bajé 5 kg en un mes sin pasar hambre. Súper claro y práctico." },
    { name: "Carla", img: "/assets/rev2.jpg", text: "Nunca entendí keto hasta leer este ebook. Me cambió el enfoque." },
    { name: "Marta", img: "/assets/rev3.jpg", text: "El plan de 30 días es excelente, lo sigo repitiendo cada mes." },
    { name: "José", img: "/assets/rev4.jpg", text: "Probé mil dietas, esta fue la única que pude mantener sin ansiedad." },
  ];

  return (
    <section className="py-16 md:py-20 bg-emerald-50">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-8 text-center">
          Lo que dicen nuestros lectores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition text-center">
              <img
                src={r.img}
                alt={r.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <p className="text-slate-600 italic mb-2">"{r.text}"</p>
              <div className="font-semibold text-emerald-700">{r.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
