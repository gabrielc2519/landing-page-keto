import Container from "./ui/Container";

export default function FAQ() {
  const faqs = [
    { q: "¿Cómo recibo el material?", a: "Hotmart te envía el acceso por email inmediatamente después de pagar." },
    { q: "¿Necesito experiencia previa?", a: "No. Es paso a paso para principiantes." },
    { q: "¿Funciona desde el celular?", a: "Sí, lo ves desde móvil, tablet o computadora." },
    { q: "¿Hay garantía?", a: "Sí, 7 días para solicitar reembolso si no te convence." },
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
