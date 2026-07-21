const SIGNATURES = [
  {
    id: 1,
    name: "Black Caramel Fudge Brownie",
    price: "Rp 15.000/pcs",
    badge: "Bestseller",
    description: "Brownie coklat padat dengan lapisan karamel yang nyaris gosong di atasnya. Manis, sedikit pahit di ujung, dan lengket persis kayak karamel yang bener-bener niat dibikin.",
  },
  {
    id: 2,
    name: "Spaghetti Brûlée",
    price: "Rp 20.000/pcs",
    badge: "Signature",
    description: "Custard spaghetti manis dengan lapisan gula yang dibakar sampai renyah. Terdengar aneh di kertas, tapi orang yang nyoba biasanya balik lagi.",
  },
  {
    id: 3,
    name: "Golden Macaroni Schotel",
    price: "Rp 15.000/pcs",
    badge: "New",
    description: "Makaroni panggang dengan keju dan daging cincang, permukaannya keemasan dan garing, dalemnya tetep lembut.",
  },
];

export default function Signatures() {
  return (
    <section id="menu" className="py-24 px-6" style={{ backgroundColor: "var(--bg-cream)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">Our Signatures</p>
        <h2 className="text-4xl md:text-5xl mb-16 max-w-2xl">Three Things We Do Exceptionally Well</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SIGNATURES.map((item) => (
            <div key={item.id}>
              <div className="relative h-64 mb-6" style={{ backgroundImage: "linear-gradient(135deg, #D9C7A8 0%, #B08D57 100%)" }}>
                <span className="absolute top-4 left-4 text-xs uppercase tracking-wider px-3 py-1.5" style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-cream)" }}>{item.badge}</span>
              </div>
              <h3 className="text-2xl mb-3">{item.name}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{item.description}</p>
              <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="text-lg" style={{ fontFamily: "var(--font-heading)" }}>{item.price}</span>
                <a href="#order" className="text-sm uppercase tracking-wider hover:opacity-60 transition">Order →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
