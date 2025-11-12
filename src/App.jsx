// src/App.jsx
const AFFILIATE_URL = "https://TU-ENLACE-DE-AFILIADO-HOTMART.com"; // <-- cámbialo
const PRICE = "$14.99";

// Imágenes de ejemplo (libres de Unsplash). Reemplázalas cuando quieras.
const HERO_IMG =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop";
const GRID_1 =
  "https://images.unsplash.com/photo-1543352634-8732c69b4e1b?q=80&w=800&auto=format&fit=crop";
const GRID_2 =
  "https://images.unsplash.com/photo-1526312426976-593c2e615b70?q=80&w=800&auto=format&fit=crop";
const GRID_3 =
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop";

function Container({ children, className = "" }) {
  return <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>;
}

function Button({ href = "#", children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition shadow-sm";
  const map = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white",
    dark: "bg-emerald-900 hover:bg-emerald-950 text-white",
    outline:
      "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-white/90 backdrop-blur",
  };
  const style = map[variant] || map.primary;
  const target = href.startsWith("http") ? "_blank" : undefined;
  return (
    <a href={href} target={target} rel="noreferrer" className={`${base} ${style} ${className}`}>
      {children}
    </a>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <header
      className="
        relative text-white
        bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-600
        overflow-hidden
      "
    >
      {/* Degradé radial decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 20% -10%, rgba(16,185,129,0.35), transparent 60%), radial-gradient(50rem 25rem at 90% 0%, rgba(34,197,94,0.25), transparent 55%)",
        }}
      />

      <Container className="py-6 relative">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-tight">Academia Salud</div>
          <Button href="#comprar" variant="outline">Comprar ahora</Button>
        </nav>
      </Container>

      <Container className="relative py-14 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm">
            <span>Guía Keto • 30 días</span>
            <span className="text-emerald-200">Acceso inmediato</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
  <span className="text-lime-300 drop-shadow-sm">Código Keto</span>
  <span className="text-emerald-50">: transforma tu salud con un método claro y sostenible</span>
</h1>

          <p className="text-emerald-100/90 max-w-xl">
            Entra en cetosis paso a paso, gana energía y reduce grasa sin pasar hambre ni complicaciones.
            Un enfoque práctico pensado para empezar hoy mismo.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#comprar" variant="primary">Quiero mi guía por {PRICE}</Button>
            <Button href="#contenido" variant="dark">Ver contenido</Button>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <li className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
              ✔️ Plan paso a paso
            </li>
            <li className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
              ✔️ Recetas accesibles
            </li>
            <li className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
              ✔️ Hábitos sostenibles
            </li>
          </ul>
        </div>

        {/* Imagen hero */}
<div className="relative flex justify-center">
  <div
    aria-hidden="true"
    className="absolute -inset-4 blur-xl rounded-[2rem] pointer-events-none"
  ></div>

  <div className="relative w-[80%] md:w-[60%] lg:w-[45%] bg-white/10 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden">
    <img
      src="/assets/mujer_hero.png"
      alt="Mujer sonriente sosteniendo libro Keto Saludable"
      className="w-full h-auto object-cover rounded-3xl"
      loading="eager"
    />
  </div>
</div>
      </Container>
      
    </header>
    
  );
  
}

/* --------------------------- BENEFITS --------------------------- */
function Benefits() {
  const items = [
    {
      title: "Planificación sin estrés",
      desc: "Estructura tus menús keto con listas simples y reemplazos inteligentes.",
    },
    {
      title: "Control de antojos",
      desc: "Diferenciá hambre real vs. emocional y evitá errores comunes.",
    },
    {
      title: "Energía y foco",
      desc: "Mejorá tu día con hábitos que sostienen la cetosis sin sacrificios extremos.",
    },
    {
      title: "Resultados duraderos",
      desc: "Integra el método a tu estilo de vida para mantener los avances.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-8">
          Lo que vas a lograr
        </h2>
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

/* ---------------------------- PROGRAM --------------------------- */
function Program() {
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
    <section
      id="contenido"
      className="py-16 md:py-20 bg-gradient-to-b from-emerald-50 via-emerald-50 to-white"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
              Contenido del Ebook
            </h2>
            <p className="text-slate-600">
              7 módulos prácticos para pasar de “no sé por dónde empezar” a una rutina keto clara y sostenible.
            </p>
            <ul className="space-y-2 text-sm">
              {modules.map((m, i) => (
                <li key={i} className="flex gap-2 text-emerald-800">
                  <span>✅</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Collage de imágenes */}
          <div className="grid grid-cols-2 gap-4">
            <img src={GRID_1} alt="Plato keto saludable" className="rounded-2xl shadow-md aspect-[4/3] object-cover" />
            <img src={GRID_2} alt="Smoothies detox verdes" className="rounded-2xl shadow-md aspect-[4/3] object-cover translate-y-6" />
            <img src={GRID_3} alt="Ingredientes frescos" className="rounded-2xl shadow-md aspect-[4/3] object-cover -translate-y-6 col-span-2" />
          </div>
        </div>

        {/* Bonos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ["7 días Keto", "Plan de alimentación completo para facilitar la adaptación."],
            ["7 días Detox (smoothies)", "Prepara tu organismo antes de entrar en cetosis."],
            ["11 Keto Snacks", "Opciones rápidas y saciantes para mantenerte en cetosis."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-sm font-semibold text-emerald-700 mb-1">BONO incluido HOY</div>
              <div className="font-bold text-emerald-900">{title}</div>
              <p className="text-slate-600 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ CTA ----------------------------- */
function CTA() {
  return (
    <section
      id="comprar"
      className="py-16 md:py-20 relative text-emerald-950"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.06) 60%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Container className="text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-3">
          Acceso completo por <span className="text-emerald-700">{PRICE}</span>
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          Compra segura y entrega inmediata. Si no es para vos, tenés 7 días para solicitar reembolso.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button href={AFFILIATE_URL} variant="primary">Quiero acceder ahora</Button>
          <Button href="#faq" variant="outline">Preguntas frecuentes</Button>
        </div>
        <p className="text-xs text-slate-500 mt-3">Pago procesado por Hotmart. Acceso por email al instante.</p>
      </Container>
    </section>
  );
}

/* ------------------------------ FAQ ----------------------------- */
function FAQ() {
  const faqs = [
    {
      q: "¿Cómo recibo el material?",
      a: "Luego de la compra, Hotmart te envía el acceso por email. Podés entrar al contenido inmediatamente.",
    },
    {
      q: "¿Necesito experiencia previa?",
      a: "No. El método está pensado para principiantes: explica paso a paso cómo activar la cetosis y sostenerla.",
    },
    {
      q: "¿Funciona desde el celular?",
      a: "Sí. Podés consultar el Ebook y bonos desde tu móvil, tablet o computadora.",
    },
    {
      q: "¿Hay garantía?",
      a: "Sí. Dentro de los primeros 7 días podés solicitar reembolso si no es lo que esperabas.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <Container>
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-6">Preguntas frecuentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="font-bold text-emerald-800 mb-1">{f.q}</div>
              <p className="text-slate-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------- FOOTER ---------------------------- */
function Footer() {
  return (
    <footer className="py-10 border-t border-emerald-100 bg-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-3">
        <small className="text-slate-500">
          © {new Date().getFullYear()} Academia Salud. Todos los derechos reservados.
        </small>
        <div className="text-xs text-slate-500">
          Los resultados pueden variar según cada persona. Este sitio no está afiliado a Meta/Facebook™.
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Program />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

