export default function Footer() {
  return (
    <footer className="section" style={{ paddingTop: 24 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <small className="muted">© {new Date().getFullYear()} Academia Salud. Todos los derechos reservados.</small>
        <a className="muted" href="#terminos">Términos</a>
      </div>
    </footer>
  )
}
