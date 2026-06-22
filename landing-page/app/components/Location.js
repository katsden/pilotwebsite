export default function Location() {
  // TODO: replace with real Google Maps embed URL
  const GMAPS_EMBED =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."; // paste embed URL here

  return (
    <section id="location" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
        Find Us
      </p>
      <h2 className="text-4xl font-semibold tracking-tight mb-4">
        We're in South Tangerang {/* TODO */}
      </h2>
      <p className="text-gray-500 mb-10">
        Jl. [Address Here] — Open daily 10:00 – 22:00 {/* TODO */}
      </p>

      <div className="rounded-2xl overflow-hidden h-80 bg-gray-100">
        {/* Uncomment when you have the embed URL */}
        {/* <iframe
          src={GMAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        /> */}
        <div className="h-full flex items-center justify-center text-gray-400 text-sm">
          Google Maps Embed Placeholder
        </div>
      </div>
    </section>
  );
}
