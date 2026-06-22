// This is a HIGHLIGHT section — not the full menu.
// Full menu lives in the menu-app.

const FEATURED_ITEMS = [
  { name: "Signature Burger", price: "Rp 65.000", tag: "Best Seller" },
  { name: "Truffle Fries", price: "Rp 45.000", tag: "New" },
  { name: "Iced Matcha Latte", price: "Rp 35.000", tag: "" },
];
// TODO: replace with real items

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
          What We Serve
        </p>
        <h2 className="text-4xl font-semibold tracking-tight mb-12">
          Fan Favorites
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.name}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="bg-gray-100 rounded-xl h-40 mb-4 flex items-center justify-center text-gray-400 text-xs">
                Photo Placeholder
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.price}</p>
                </div>
                {item.tag && (
                  <span className="text-xs bg-[var(--color-accent)] text-white px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
