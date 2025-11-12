import Container from "./ui/Container";

export default function Program() {
  const modules = [
    "Fundamentos de cetosis y cómo activarla con seguridad",
    "Armado de menús y compras eficientes",
    "Macros, reemplazos y errores comunes",
    "Estrategias para controlar ansiedad y antojos",
    "Rutina base: movimiento + descanso",
    "Cómo leer etiquetas y comer fuera de casa",
    "Mantenimiento: sostener resultados sin retrocesos",
  ];

  return (
    <section id="contenido" className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 via-emerald-50 to-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-8">Contenido del Ebook</h2>
        <ul className="space-y-2 text-sm">
          {modules.map((m, i) => (
            <li key={i} className="flex gap-2 text-emerald-800">
              <span>✅</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
