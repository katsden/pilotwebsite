export default function MenuCard({ item, onAdd }) {
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(item.price);

  return (
    <div
      className={`bg-white rounded-2xl p-4 flex gap-4 shadow-sm ${
        !item.available ? "opacity-50" : ""
      }`}
    >
      {/* Image placeholder */}
      <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-gray-300 text-xs">
        Photo
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="font-medium text-sm">{item.name}</p>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm font-semibold">{formatted}</p>
          {item.available ? (
            <button
              onClick={() => onAdd(item)}
              className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full hover:opacity-80 transition"
            >
              + Add
            </button>
          ) : (
            <span className="text-xs text-gray-400">Sold out</span>
          )}
        </div>
      </div>
    </div>
  );
}
