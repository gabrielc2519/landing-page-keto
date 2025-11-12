import Button from "./ui/Button";
import Container from "./ui/Container";

const PRICE = "$14.99";
const AFFILIATE_URL = "https://TU-ENLACE-DE-AFILIADO-HOTMART.com";

export default function CTA() {
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
          Compra segura y entrega inmediata. Tenés 7 días de garantía.
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
