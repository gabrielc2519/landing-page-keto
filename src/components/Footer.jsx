import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-emerald-100 bg-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-3">
        <small className="text-slate-500">
          © {new Date().getFullYear()} Academia Salud. Todos los derechos reservados.
        </small>
        <div className="text-xs text-slate-500">
          Los resultados pueden variar. Este sitio no está afiliado a Meta/Facebook™.
        </div>
      </Container>
    </footer>
  );
}
