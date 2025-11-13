import Container from "./ui/Container";

export default function Guarantees() {
  return (
    <section className="py-12 bg-emerald-900 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Compra segura */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/seguro.png"
              alt="Compra segura"
              className="h-16 w-16 object-contain"
            />
            <h4 className="font-semibold text-lg">Compra segura</h4>
            <p className="text-sm text-emerald-100">
              Pagos protegidos 100% por Hotmart.
            </p>
          </div>

          {/* Satisfacción garantizada */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/calidad.png"
              alt="Satisfacción garantizada"
              className="h-16 w-16 object-contain"
            />
            <h4 className="font-semibold text-lg">Satisfacción garantizada</h4>
            <p className="text-sm text-emerald-100">
              Tenés 7 días de garantía sin preguntas.
            </p>
          </div>

          {/* Privacidad protegida */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/intimidad.png"
              alt="Privacidad protegida"
              className="h-16 w-16 object-contain"
            />
            <h4 className="font-semibold text-lg">Privacidad protegida</h4>
            <p className="text-sm text-emerald-100">
              Tus datos personales están 100% seguros.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
