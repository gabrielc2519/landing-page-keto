const items = [
  { title: 'Plan paso a paso', desc: 'Guías claras para tus primeras 4 semanas.' },
  { title: 'Recetas fáciles', desc: 'Ingredientes simples, resultados reales.' },
  { title: 'Soporte básico', desc: 'Resuelve dudas frecuentes sin perder tiempo.' },
]

export default function Features() {
  return (
    <section id="contenido" className="section">
      <div className="container">
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>Lo que obtienes</h2>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {items.map((f) => (
            <div key={f.title} style={{ padding: 20, border: '1px solid #e2e8f0', borderRadius: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>{f.title}</div>
              <div className="muted">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
