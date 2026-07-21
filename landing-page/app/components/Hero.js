export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6"
      style={{
        // TODO: ganti ke foto asli -> "linear-gradient(rgba(26,24,21,0.35), rgba(26,24,21,0.55)), url('/hero-bakery.jpg')"
        backgroundImage:
          "linear-gradient(rgba(26,24,21,0.35), rgba(26,24,21,0.55)), linear-gradient(135deg, #D9C7A8 0%, #B08D57 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl">
        <p className="eyebrow mb-6 text-white/90">Artisan Bakery · Crafted With Intention</p>
        <h1 className="text-6xl md:text-8xl leading-[1.05] mb-8 text-white">
          Where Every Layer Tells a Story
        </h1>
        <p className="text-white/85 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Handcrafted pastries & breads by Nastra Bakery; Slow-proofed, Small-batch, and Made with Intention.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#menu" className="btn-primary text-lg px-10 py-4">Explore Our Menu</a>
          
           <a href="#story"
            className="btn-secondary text-lg px-10 py-4"
            style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
