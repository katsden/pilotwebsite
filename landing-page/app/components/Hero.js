export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      {/* TODO: replace with a real hero image using next/image */}
      <div className="w-full max-w-6xl h-[60vh] bg-gray-100 rounded-2xl mb-10 flex items-center justify-center text-gray-400 text-sm">
        Hero Image Placeholder
      </div>

      <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
        Est. 2024 {/* TODO: replace */}
      </p>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight max-w-3xl">
        Good food,{" "}
        <span className="text-[var(--color-accent)]">honest taste.</span>
        {/* TODO: replace with client tagline */}
      </h1>
      <p className="mt-6 text-gray-500 max-w-md text-base">
        A neighborhood spot in South Tangerang. Come hungry, leave happy.
        {/* TODO: replace */}
      </p>
      <a
        href="#menu"
        className="mt-8 inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full text-sm hover:opacity-80 transition"
      >
        See Our Menu
      </a>
    </section>
  );
}
