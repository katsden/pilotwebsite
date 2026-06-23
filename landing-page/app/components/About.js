export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-text">
          <h2>Crafted with <span>Passion</span></h2>
          <p>
            Di Lumina Coffee, setiap cangkir adalah karya seni. Kami hanya menggunakan 100% biji kopi
            Arabica pilihan yang dipanggang sendiri setiap minggunya untuk memastikan kesegaran maksimal.
          </p>
          <p>
            Ruang kami didesain dengan konsep modern minimalis, cocok untuk bekerja, bersantai,
            atau sekadar menikmati waktu luang bersama orang terdekat.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-box glass-card">
            <h3>15+</h3>
            <p>Single Origin</p>
          </div>
          <div className="stat-box glass-card">
            <h3>100%</h3>
            <p>Biji Lokal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
