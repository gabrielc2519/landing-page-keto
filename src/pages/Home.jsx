// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* HERO / HEADER */}
      <header className="relative overflow-hidden">
        {/* Fondo con degradé azul profesional */}
        <div
          className="
            relative
            bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900
            text-white
            pb-16 pt-6
          "
        >
          {/* Degradés radiales suaves */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(40rem 20rem at 0% 0%, rgba(59,130,246,0.3), transparent 60%), radial-gradient(30rem 18rem at 100% 0%, rgba(129,140,248,0.25), transparent 55%)",
            }}
          />

          <Container className="relative">
            {/* NAVBAR */}
            <nav className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                
                <div>
                  <div className="text-lg font-extrabold tracking-tight">
                    Academia Salud
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-blue-100/80">
                    Cursos en salud y bienestar
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-5 text-sm">
                <a href="#cursos" className="hover:text-blue-200">
                  Cursos
                </a>
                <a href="#sobre" className="hover:text-blue-200">
                  Sobre nosotros
                </a>
                
              </div>
            </nav>

            {/* HERO */}
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="space-y-5">
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-100">
                  Salud • Alimentación • Hábitos
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-indigo-100">
                  Formación práctica para transformar tu salud de manera sostenible.
                </h1>
                <p className="text-blue-100/90 text-sm md:text-base max-w-xl">
                  En{" "}
                  <span className="font-semibold text-indigo-200">
                    Academia Salud
                  </span>{" "}
                  reunimos cursos digitales claros, accionables y éticos para ayudarte a mejorar tu
                  alimentación, energía y bienestar sin promesas mágicas ni dietas extremas.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#cursos"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-blue-500 text-white shadow-md hover:bg-blue-400 transition"
                  >
                    Ver cursos disponibles
                  </a>
                  <Link
                    to="/keto"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-blue-200/70 bg-white/5 text-blue-50 hover:bg-white/10 transition"
                  >
                    Ver detalles de Código Keto
                  </Link>
                </div>

                <ul className="grid grid-cols-2 gap-3 text-xs md:text-sm text-blue-100/90 max-w-md">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    Enfoque basado en hábitos reales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    Explicado en lenguaje simple
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    Acceso 100% online
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
                    Garantía de reembolso de 7 días
                  </li>
                </ul>
              </div>

              {/* Tarjeta destacando el curso actual */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm">
                  <div
                    aria-hidden
                    className="absolute -inset-6 rounded-[2.5rem] bg-blue-400/25 blur-3xl"
                  />
                  <div className="relative rounded-3xl bg-white/10 border border-white/25 p-5 shadow-2xl backdrop-blur flex flex-col gap-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100/90">
                      Curso destacado
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-24 rounded-2xl overflow-hidden bg-blue-900/40 border border-white/20 flex items-center justify-center">
                        <img
                          src="/assets/mockup_keto1.png"
                          alt="Código Keto"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h2 className="font-bold text-lg text-blue-50">Código Keto</h2>
                        <p className="text-xs text-blue-100/85">
                          Guía de 30 días para entrar en cetosis, perder grasa y ganar energía con
                          un método claro y sostenible.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-blue-100/90">
                      <p>✔ Plan de 30 días + bonos exclusivos.</p>
                      <p>✔ Ideal para quienes recién empiezan con la dieta keto.</p>
                    </div>
                    <Link
                      to="/keto"
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-blue-500 text-white hover:bg-blue-400 transition shadow-md"
                    >
                      Ir al curso
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* SECCIÓN CURSOS */}
      <section id="cursos" className="py-16 bg-white text-slate-900">
        <Container>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-blue-900">
            Cursos disponibles
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-8 max-w-2xl">
            Empezá por el programa que mejor se adapta a tu objetivo actual. Próximamente iremos
            sumando más cursos relacionados con salud, alimentación y bienestar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card de Código Keto */}
            <article className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition flex flex-col">
              <div className="h-40 overflow-hidden rounded-t-2xl bg-slate-50 flex items-center justify-center">
                <img
                  src="/assets/mockup_keto1.png"
                  alt="Código Keto"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-bold text-blue-900 text-lg">Código Keto</h3>
                <p className="text-sm text-slate-600 flex-1">
                  Ebook completo con plan de 30 días, explicación paso a paso de la cetosis,
                  control de antojos y 3 bonos exclusivos para facilitar el proceso.
                </p>
                <ul className="text-xs text-blue-700 space-y-1 mt-2">
                  <li>• Ideal para principiantes en dieta keto.</li>
                  <li>• Recetas accesibles y enfoque sostenible.</li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="/keto"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white w-full transition"
                  >
                    Ver detalles del curso
                  </Link>
                </div>
              </div>
            </article>

            {/* Lugar para futuros cursos */}
            <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-5 flex flex-col justify-center text-sm text-slate-600">
              <div className="text-blue-700 font-semibold mb-1">
                Próximamente
              </div>
              <p>
                Nuevos programas sobre alimentación saludable, organización de menús, hábitos y
                bienestar integral se irán sumando a Academia Salud.
              </p>
            </article>

            <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-5 flex flex-col justify-center text-sm text-slate-600">
              <div className="text-blue-700 font-semibold mb-1">
                Comunidad en crecimiento
              </div>
              <p>
                Estamos construyendo una biblioteca de recursos para que puedas aprender a tu ritmo,
                con información clara y aplicable a tu día a día.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre" className="py-14 bg-slate-100">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                Sobre Academia Salud
              </h2>
              <p className="text-slate-700 text-sm md:text-base mb-4">
                <span className="font-semibold">Academia Salud</span> nace con la idea de ofrecer
                programas digitales que combinen claridad, practicidad y ética. No vendemos
                promesas mágicas: enfocamos cada curso en hábitos sostenibles, educación y
                acompañamiento realista.
              </p>
              <p className="text-slate-700 text-sm md:text-base">
                Nuestro objetivo es que puedas entender el por qué de cada recomendación y que
                tengas herramientas para tomar mejores decisiones sobre tu alimentación y tu
                bienestar día a día.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
                <div className="text-2xl mb-1">🌱</div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Enfoque sostenible
                </h3>
                <p className="text-slate-600 text-xs">
                  Nada de extremos: priorizamos cambios que puedas sostener en el tiempo.
                </p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
                <div className="text-2xl mb-1">📚</div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Contenido claro
                </h3>
                <p className="text-slate-600 text-xs">
                  Explicaciones en lenguaje simple, sin tecnicismos innecesarios.
                </p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
                <div className="text-2xl mb-1">🔒</div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Compra segura
                </h3>
                <p className="text-slate-600 text-xs">
                  Pagos procesados por plataformas confiables y garantía de reembolso.
                </p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
                <div className="text-2xl mb-1">💙</div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Tu Bienestar, Nuestra Prioridad
                </h3>
                <p className="text-slate-600 text-xs">
                  Te damos herramientas prácticas para mejorar tu vida, sin complicaciones.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
