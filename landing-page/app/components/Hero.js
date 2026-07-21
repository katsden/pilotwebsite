export default function Hero() {
  return (
    <section className="pt-32 md:pt-24">
      <div className="flex flex-col md:flex-row min-h-[85vh]">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-16 py-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-6">Artisan Bakery · Crafted With Intention</p>
            <h1 className="text-5xl md:text-6xl leading-[1.1] mb-6">
              Where Every Layer Tells a Story
            </h1>
            <p className="text-[var(--text-secondary)] text-lg mb-10">
              Handcrafted pastries & breads by Nastra Bakery — slow-proofed, small-batch, and made with intention.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="btn-primary">Explore Our Menu</a>
              <a href="#story" className="btn-secondary">Our Story</a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              // TODO: taruh foto hero lu di /public/hero-bakery.jpg lalu ganti ini
              backgroundImage: "linear-gradient(135deg, #D9C7A8 0%, #B08D57 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
