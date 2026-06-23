"use client";
import { useState } from "react";

export default function MenuCard({ item, onAdd }) {
  const [added, setAdded] = useState(false);

  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(item.price);

  function handleAdd() {
    onAdd(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  }

  return (
    <div className="menu-card glass-card">
      <div
        className={`card-img${!item.image ? " placeholder-img" : ""}`}
        style={item.image ? { backgroundImage: `url('${item.image}')` } : {}}
      />
      <div className="card-content">
        <div className="card-title">
          <h3>{item.name}</h3>
          <span className="price">{formatted}</span>
        </div>
        <p>{item.description}</p>
        <button className={`btn-order${added ? " added" : ""}`} onClick={handleAdd}>
          {added ? "✓ Ditambahkan" : "Tambah ke Keranjang"}
        </button>
      </div>
    </div>
  );
}
