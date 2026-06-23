const TESTIMONIALS = [
  {
    id: 1,
    text: "Tempatnya pewe banget buat nugas. Kopi susunya the best di Jaksel!",
    name: "Raka D.",
  },
  {
    id: 2,
    text: "Croissant-nya beneran flaky kayak di Paris. Pelayanan juga ramah banget.",
    name: "Siska P.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: "3rem" }}>
          Apa Kata <span>Mereka?</span>
        </h2>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testi-card glass-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"{t.text}"</p>
              <h4 style={{ color: "var(--accent)", marginTop: "1rem" }}>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
