export default function About() {
  return (
    <section id="story" className="py-24 px-6" style={{ backgroundColor: "var(--bg-cream-alt)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">The Founder</p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-8">
            Baked from a Name,<br />Built from a Craft
          </h2>
          <div className="space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              Nastra bukan cuma nama toko. Ini nama panggilan yang nempel dari kecil, dari Naka Sastranegara yang dulu suka nongkrongin dapur nyokapnya cuma buat liatin adonan naik.
            </p>
            <p>
              Awalnya iseng doang. Nyoba resep dari internet, gagal berkali-kali, sampai akhirnya ketagihan ngoprek takaran sendiri. Bukan buat jualan, tapi karena penasaran kenapa satu resep bisa beda hasil kalau ditambah lima menit proofing.
            </p>
            <p>
              Dari situ jalan ke arah yang gak direncanain. Sekarang Nastra jadi tempat buat orang-orang yang ngerti bedanya kue yang dibikin buru-buru sama yang dibikin bener.
            </p>
            <p>
              Berbasis di Tangerang Selatan, semua masih dibikin dalam skala kecil. Bukan karena gak mau gede, tapi karena kualitasnya susah dijaga kalau terlalu cepat scale up.
            </p>
          </div>
        </div>

        <div className="h-[500px]" style={{ backgroundImage: "linear-gradient(135deg, #D9C7A8 0%, #B08D57 100%)" }} />
      </div>
    </section>
  );
}
