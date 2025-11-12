export default function Hero() {
  return (
    <header className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Academia Salud</div>
          <a className="btn" href="#comprar">Comprar ahora</a>
        </nav>

        <div style={{ display: 'grid', gap: 16 }}>
          <h1 style={{ fontSize: 42, fontWeight: 800 }}>
            Transforma tu salud con <span style={{ color: '#0ea5e9' }}>Keto</span>
          </h1>
          <p className="muted" style={{ maxWidth: 700 }}>
            Programa paso a paso para iniciar la Dieta Keto sin complicaciones. Ideal para principiantes.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <a className="btn" href="#comprar">Empieza hoy</a>
            <a className="btn" href="#contenido" style={{ background: '#1e293b' }}>Ver contenido</a>
          </div>
        </div>
      </div>
    </header>
  )
}
