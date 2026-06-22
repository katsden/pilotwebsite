import { CATEGORIES } from "../data/menu";

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 px-4 pt-4 overflow-x-auto pb-1">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition ${
            active === cat
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
