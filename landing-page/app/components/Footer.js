export default function Footer() {
  return (
    <footer className="pt-24 pb-10 px-6" style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Logo cursive + social + email */}
          <div>
            <h2 className="text-6xl mb-8" style={{ fontFamily: "'Parisienne', cursive" }}>Nastra</h2>
            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </a>
              <a href="#" aria-label="TikTok" className="hover:opacity-70 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 104 4V4c.5 2 2 4 5 4" /></svg>
              </a>
            </div>
            <a href="mailto:hello@nastra.id" className="text-xl font-semibold hover:opacity-70 transition">hello@nastra.id</a>
          </div>

          {/* Nav links besar */}
          <div className="flex flex-col gap-2 text-3xl font-semibold">
            <a href="#menu" className="hover:opacity-70 transition">Cookies</a>
            <a href="#menu" className="hover:opacity-70 transition">Cakes</a>
            <a href="#story" className="hover:opacity-70 transition">About</a>
            <a href="#order" className="hover:opacity-70 transition">Contact</a>
          </div>

          {/* 2 kolom link sekunder */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm uppercase tracking-widest font-bold mb-4 pb-2" style={{ borderBottom: "2px solid rgba(255,255,255,0.4)" }}>Menu</p>
              <div className="flex flex-col gap-2 opacity-90">
                <a href="#menu" className="hover:opacity-70 transition">Cookies</a>
                <a href="#menu" className="hover:opacity-70 transition">Cakes</a>
                <a href="#order" className="hover:opacity-70 transition">Custom Order</a>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest font-bold mb-4 pb-2" style={{ borderBottom: "2px solid rgba(255,255,255,0.4)" }}>Info</p>
              <div className="flex flex-col gap-2 opacity-90">
                <a href="#" className="hover:opacity-70 transition">Wholesale</a>
                <a href="#" className="hover:opacity-70 transition">FAQ</a>
                <a href="#" className="hover:opacity-70 transition">Careers</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="mb-16">
          
           <a href="https://wa.me/628129383370?text=Halo%20Nastra%2C%20saya%20mau%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-semibold px-8 py-4"
            style={{ backgroundColor: "var(--text-primary)", color: "#fff", borderRadius: "999px" }}
          >
            Start an Order
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>

        {/* Bottom tagline */}
        <div className="text-center pt-8 italic opacity-80" style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }}>
          <p>© 2026 Nastra.</p>
          <p>Dipanggang dengan cinta (dan tepung) di Tangerang Selatan.</p>
        </div>
      </div>
    </footer>
  );
}
