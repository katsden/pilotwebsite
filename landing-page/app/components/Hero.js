export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        // TODO: taruh foto hero lu di /public/hero-bg.jpg lalu uncomment baris bawah
        // backgroundImage: "linear-gradient(rgba(18,18,18,0.7), rgba(18,18,18,0.9)), url('/hero-bg.jpg')",
        backgroundImage: "linear-gradient(rgba(18,18,18,0.7), rgba(18,18,18,0.9)), linear-gradient(135deg, #1a1a1a 0%, #2a1f15 100%)",
      }}
    >
      <div className="hero-content">
        <h1 className="fade-in-up">Kopi yang Mencerahkan Harimu</h1>
        <p className="fade-in-up delay-1">
          Nikmati racikan biji kopi Nusantara terbaik di ruang yang dirancang untuk kenyamanan dan inspirasi.
        </p>
        <div className="hero-buttons fade-in-up delay-2">
          {/* TODO: ganti href ke URL Vercel menu-app lu */}
          <a href="#" className="btn-primary">Pesan Sekarang</a>
        </div>
      </div>
    </section>
  );
}
