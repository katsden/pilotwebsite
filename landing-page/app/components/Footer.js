export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>LUMINA.</h2>
          <p style={{ color: "var(--accent)" }}>Est. 2026</p>
        </div>
        <div className="footer-info">
          <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Jam Operasional</h4>
          <p style={{ color: "var(--text-secondary)" }}>Senin - Jumat: 07:00 - 22:00</p>
          <p style={{ color: "var(--text-secondary)" }}>Sabtu - Minggu: 08:00 - 23:00</p>
        </div>
        <div className="footer-info">
          <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Lokasi</h4>
          <p style={{ color: "var(--text-secondary)" }}>Jl. Senopati No. 88, Jakarta Selatan</p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid var(--glass-border)",
          paddingTop: "2rem",
          color: "var(--text-secondary)",
          fontSize: "0.8rem",
        }}
      >
        <p>&copy; 2026 Lumina Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}
