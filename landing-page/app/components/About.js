export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
            Our Story
          </p>
          <h2 className="text-4xl font-semibold tracking-tight leading-snug mb-6">
            Built from a love of food {/* TODO: replace */}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros.
            {/* TODO: replace with client story */}
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400 text-sm">
          About Image Placeholder
          {/* TODO: replace with next/image */}
        </div>
      </div>
    </section>
  );
}
