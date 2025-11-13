import Container from "./ui/Container";
import {
  Salad,
  Flame,
  Brain,
  Dumbbell,
  LeafyGreen,
  Gift,
} from "lucide-react";

export default function Program() {
  const features = [
    {
      title: "Plan de 30 días",
      desc: "Menú detallado con recetas simples, accesibles y pensadas para principiantes.",
      icon: <Salad className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Cetosis explicada fácil",
      desc: "Aprendé cómo funciona la dieta keto y cómo activar la quema de grasa.",
      icon: <Flame className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Control de antojos",
      desc: "Estrategias psicológicas y nutricionales para no abandonar a mitad del camino.",
      icon: <Brain className="h-6 w-6 text-purple-600" />,
    },
    {
      title: "Keto + ejercicio",
      desc: "Multiplicá los resultados con rutinas simples que acompañan la cetosis.",
      icon: <Dumbbell className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Hábitos sostenibles",
      desc: "Convertí keto en un estilo de vida real, flexible y sin culpa.",
      icon: <LeafyGreen className="h-6 w-6 text-green-600" />,
    },
  ];

  const bonuses = [
    {
      title: "7 días Keto",
      desc: "Plan nutricional para facilitar la adaptación.",
      price: "$15",
      img: "/assets/7_dias_keto.png",
    },
    {
      title: "7 días Detox (Smoothies)",
      desc: "Limpia tu organismo y preparalo para entrar en cetosis.",
      price: "$15",
      img: "/assets/7_dias_detox.png",
    },
    {
      title: "11 Keto Snacks",
      desc: "Snacks rápidos, ricos y cetogénicos para mantenerte firme.",
      price: "$15",
      img: "/assets/11_snacks.png",
    },
  ];

  return (
    <section
      id="contenido"
      className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 via-emerald-50 to-white"
    >
      <Container>
        {/* TÍTULO */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
            ¿Qué encontrarás en <span className="text-emerald-700">Código Keto?</span>
          </h2>
          <p className="text-slate-600 mt-2">
            Un método claro y práctico diseñado para ayudarte desde el día 1 a entrar en cetosis,
            perder peso y mejorar tu energía sin complicaciones.
          </p>
        </div>

        {/* LAYOUT: MOCKUP + CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 md:items-start">
          {/* Mockup a la izquierda */}
          <div className="flex justify-center">
            <img
              src="/assets/mockup_keto1.png"
              alt="Mockup del contenido del Ebook Código Keto"
              className="w-full max-w-md rounded-3xl shadow-xl border border-emerald-200"
              loading="lazy"
            />
          </div>

          {/* Cards a la derecha */}
          <div className="grid grid-cols-1 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm hover:shadow-lg transition flex gap-4"
              >
                <div className="pt-1">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-emerald-900">{f.title}</h3>
                  <p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ BONOS ------------------ */}
        <div className="mt-16">
          <h3 className="text-center text-sm uppercase tracking-widest text-emerald-700 mb-2">
            Y NO ES TODO…
          </h3>

          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-900 mb-6">
            Te REGALAMOS <span className="text-emerald-600">3 bonos adicionales</span>
          </h3>

          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
            Valor total de <span className="font-bold text-emerald-700 line-through">$45</span>, hoy
            incluidos <span className="font-bold text-emerald-700">GRATIS</span> con tu compra del Ebook.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white p-6 border border-emerald-200 shadow-sm hover:shadow-lg transition flex flex-col gap-4"
              >
                {/* Imagen del bono */}
                <div className="w-full rounded-2xl overflow-hidden mb-2 bg-white">
  <img
    src={b.img}
    alt={b.title}
    className="w-full h-auto object-contain"
    loading="lazy"
  />
</div>


                {/* Precio tachado */}
                <div className="text-right">
  <span className="text-lg font-bold text-red-600 line-through">
    Precio {b.price} USD
  </span>
</div>


                {/* Título y descripción */}
                <h4 className="font-bold text-emerald-900 text-lg">{b.title}</h4>
                <p className="text-slate-600 text-sm">{b.desc}</p>

                {/* Gratis */}
                <div className="mt-auto flex justify-center">
  <span className="
    inline-block 
    px-5 py-2 
    text-xl font-extrabold 
    bg-emerald-600 
    text-white 
    rounded-full 
    shadow-lg 
    tracking-wide
  ">
    ¡HOY GRATIS!
  </span>
</div>

              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
