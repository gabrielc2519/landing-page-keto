import Container from "./ui/Container";

const modules = [
  {
    title: "Módulo 1: La Ciencia Detrás de la Dieta Keto",
    items: [
      "¿Qué es la cetosis y cómo funciona?",
      "Beneficios de la dieta keto más allá de la pérdida de peso.",
      "Alimentos permitidos y prohibidos.",
      "Impacto de la cetosis en la pérdida de peso y la salud mental.",
    ],
  },
  {
    title: "Módulo 2: Preparando tu Cuerpo y Mente para la Transformación",
    items: [
      "Cambio de mentalidad para el éxito en keto.",
      "Estrategias para evitar la 'gripe keto'.",
      "Limpieza de despensa: qué eliminar y qué incorporar.",
    ],
  },
  {
    title: "Módulo 3: La Fase de Adaptación – Primeros 7 Días",
    items: [
      "Qué esperar durante la primera semana.",
      "Cómo asegurar que el cuerpo entre en cetosis.",
      "Organización diaria para facilitar la adaptación.",
      "Plan de alimentación con recetas detalladas para los primeros 7 días.",
    ],
  },
  {
    title: "Módulo 4: Manteniendo el Impulso – Semana 2 y 3",
    items: [
      "Estrategias para controlar antojos y mantener la motivación.",
      "Cómo optimizar resultados combinando keto con ejercicio.",
      "La importancia del descanso en la quema de grasa.",
    ],
  },
  {
    title: "Módulo 5: La Transformación Completa – Semana 4",
    items: [
      "Ajustes nutricionales según objetivo: pérdida de peso, mantenimiento o ganancia muscular.",
      "Incorporación del ayuno intermitente para potenciar la cetosis.",
      "Planificación a largo plazo para consolidar hábitos saludables.",
    ],
  },
  {
    title: "Módulo 6: Recetas Keto para la Transformación",
    items: [
      "Recetas fáciles, económicas y deliciosas.",
      "Opciones rápidas para el día a día.",
      "Guía de compras con ingredientes accesibles.",
    ],
  },
  {
    title: "Módulo 7: Manteniendo los Resultados a Largo Plazo",
    items: [
      "Cómo evitar el efecto rebote sin sacrificios.",
      "Flexibilidad en keto: cómo adaptarlo a distintos estilos de vida.",
      "Qué hacer si salís de cetosis y cómo volver rápidamente.",
    ],
  },
];

const bonuses = [
  "Bono 1: 7 días keto – Un plan de alimentación completa.",
  "Bono 2: 7 días detox (Smoothies) – Para limpiar tu organismo antes de entrar en cetosis.",
  "Bono 3: 11 Keto Snacks – Opciones rápidas y deliciosas para mantenerte en cetosis sin esfuerzo.",
];

export default function ProgramDetail() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
            Programa paso a paso dentro del Ebook
          </h2>
          <p className="text-slate-600 mt-2">
            Código Keto no es solo un recetario: es un recorrido guiado por 30 días para que sepas
            qué hacer en cada etapa, desde la preparación hasta el mantenimiento a largo plazo.
          </p>
        </div>

        {/* Módulos */}
        <div className="space-y-5">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 md:p-6 shadow-sm"
            >
              <h3 className="font-semibold text-emerald-900 text-lg mb-2">
                {mod.title}
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                {mod.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bonos listados al final */}
        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-6">
          <h3 className="text-xl md:text-2xl font-extrabold text-emerald-900 mb-3">
            Bonos exclusivos incluidos
          </h3>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            {bonuses.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
