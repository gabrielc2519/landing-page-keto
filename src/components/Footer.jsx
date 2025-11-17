import Container from "./UI/Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-emerald-100 bg-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-3">
        <small className="text-slate-500">
          © {new Date().getFullYear()} Academia Salud. Todos los derechos reservados.
        </small>
        <div className="text-xs text-slate-500">
          Términos y condiciones | Privacidad

Este sitio NO es parte de Facebook o Facebook Inc. Además, este sitio no ha sido endorsado por Facebook. FACEBOOK es una marca registrada de META, Inc.
Los resultados individuales variarán mucho y se basarán en su capacidad individual, experiencia comercial, conocimiento, experiencia y nivel de deseo, 
así como en su arduo trabajo y ejecución de sus estrategias individuales. No hay garantías sobre el nivel de éxito que pueda experimentar. Los testimonios 
y ejemplos presentados en este sitio web, así como en cualquier otro material promocional, son resultados excepcionales. Dichos resultados excepcionales no se aplican al usuario promedio y no pretenden garantizar que cualquier otra parte logre resultados iguales o similares.
Copyright © 2025 Digitalab learning
          
        </div>
      </Container>
    </footer>
  );
}
