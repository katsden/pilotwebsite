export default function Footer() {
  return (
    <footer className="pt-20 pb-8 px-6" style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-cream)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>Nastra</h2>
            <p className="opacity-60 max-w-sm leading-relaxed">
              Handcrafted pastries & breads, slow-proofed and made in small batches from Tangerang Selatan.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest opacity-60 mb-4">Explore</p>
            <div className="flex flex-col gap-3">
              <a href="#menu" className="hover:opacity-60 transition">Cookies</a>
              <a href="#menu" className="hover:opacity-60 transition">Cakes</a>
              <a href="#story" className="hover:opacity-60 transition">About</a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest opacity-60 mb-4">Visit Us</p>
            <div className="flex flex-col gap-3 opacity-80">
              <p>Tangerang Selatan, Indonesia</p>
              <p>Senin — Minggu: 09:00 — 21:00</p>
              <a href="https://wa.me/6281234567890?text=Halo%20Nastra%2C%20saya%20mau%20order" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition">Order via WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(245,241,234,0.15)" }}>
          <p className="text-sm opacity-50">© 2026 Nastra. All rights reserved.</p>
          <div className="flex gap-6 text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition">Instagram</a>
            <a href="#" className="hover:opacity-100 transition">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
