import Button from "./UI/Button";
import Container from "./UI/Container";
import { Link } from "react-router-dom";

const PRICE = "$14.99";

export default function Hero() {
  return (
    <header
      className="
        relative text-white
        bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-600
        overflow-hidden
      "
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 30rem at 20% -10%, rgba(16,185,129,0.35), transparent 60%), radial-gradient(50rem 25rem at 90% 0%, rgba(34,197,94,0.25), transparent 55%)",
        }}
      />

      {/* NAV */}
      <Container className="py-6 relative">
        <nav className="flex items-center justify-between">
          <div>
            <div className="text-xl font-extrabold tracking-tight">Academia Salud</div>
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-emerald-200/80">
              Cursos en salud y bienestar
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/20 text-white border border-white/30 shadow-sm hover:bg-white/30 transition"
            >
              Inicio
            </Link>

            <Button href="#comprar" variant="outline">Comprar ahora</Button>
          </div>
        </nav>
      </Container>

      {/* HERO */}
      <Container className="relative py-14 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">

          {/* Subtítulo (pegado al badge) */}
          <div className="text-emerald-200/90 text-sm font-medium tracking-wide uppercase mb-1">
            Salud • Alimentación • Hábitos
          </div>

          {/* Badge destacado */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm mt-0">
            <span>Guía Keto • 30 días</span>
            <span className="text-emerald-200">Acceso inmediato</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
            <span className="text-lime-300 drop-shadow-sm">Código Keto</span>
            <span className="text-emerald-50">
              {" "}• tu camino práctico hacia una vida más liviana y llena de energía
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-emerald-100/90 max-w-xl text-lg">
            Transformá tu salud con un método claro, simple y sostenible. 
            Aprendé a entrar en cetosis sin complicarte, mejorá tu energía y 
            descubrí cómo la comida puede convertirse en tu mejor herramienta de bienestar.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-3">
            <Button href="#comprar" variant="primary">
              Quiero mi guía por {PRICE}
            </Button>

            <Button href="#contenido" variant="dark">
              Ver contenido
            </Button>
          </div>

          {/* Beneficios */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <li className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
              ✔️ Fácil de seguir
            </li>
            <li className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
              ✔️ Recetas rápidas
            </li>
            <li className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
              ✔️ Resultados reales
            </li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center">
          <div aria-hidden className="absolute -inset-4 blur-xl rounded-[2rem] pointer-events-none"></div>
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
