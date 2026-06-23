"use client";
import { useState } from "react";
import { MENU_ITEMS, CATEGORIES } from "./data/menu";
import MenuCard from "./components/MenuCard";
import CartSidebar from "./components/CartSidebar";

export default function MenuPage() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [cartOpen, setCartOpen] = useState(false);

  const filtered =
    activeCategory === "Semua"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === activeCategory);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) return prev.map((c) => c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { item, qty: 1 }];
    });
    setCartOpen(true);
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  }

  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);

  return (
    <div className="menu-page">
      {/* Topbar */}
      <div className="menu-topbar">
        <div>
          <p className="table-info">Meja 5 · Dine-in</p>
          <p className="logo">LUMINA<span>.</span></p>
        </div>
        <button className="btn-cart" onClick={() => setCartOpen(true)}>
          🛒 Keranjang
          {totalItems > 0 && <span className="cart-badge-count">{totalItems}</span>}
        </button>
      </div>

      {/* Category Filter */}
      <div className="menu-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>

      {/* Cart */}
      {cartOpen && (
        <CartSidebar
          cart={cart}
          onRemove={removeFromCart}
          onClose={() => setCartOpen(false)}
        />
      )}

      {/* FAB */}
      {!cartOpen && (
        <button className="fab-cart" onClick={() => setCartOpen(true)}>
          <span className="fab-icon">🛒</span>
          {totalItems > 0 && <span className="fab-badge">{totalItems}</span>}
        </button>
      )}
    </div>
  );
}
