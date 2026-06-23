// TODO: taruh foto-foto lu di /public/ lalu update backgroundImage tiap item
const GALLERY_IMAGES = [
  { id: 1, src: null, label: "Suasana Kafe" },
  { id: 2, src: null, label: "Signature Coffee" },
  { id: 3, src: null, label: "Makanan" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title text-center" style={{ marginBottom: "2rem" }}>
          <h2>Lumina <span>Vibe</span></h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Suasana yang bikin lu betah berlama-lama.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="gallery-item"
              style={{
                backgroundImage: img.src
                  ? `url('${img.src}')`
                  : "linear-gradient(135deg, #1a1a1a, #2a1f15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
