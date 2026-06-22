"use client";
import { useState } from "react";
import { MENU_ITEMS, CATEGORIES } from "./data/menu";
import MenuCard from "./components/MenuCard";
import Cart from "./components/Cart";
import CategoryFilter from "./components/CategoryFilter";

export default function MenuPage() {
  const [cart, setCart] = useState([]); // [{ item, qty }]
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  const filtered =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === activeCategory);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { item, qty: 1 }];
    });
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  }

  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Table 5</p> {/* TODO: dynamic from QR param */}
          <h1 className="text-lg font-semibold">RestoName Menu</h1> {/* TODO */}
        </div>
        <button
          onClick={() => setCartOpen(true)}
          className="relative bg-gray-900 text-white px-4 py-2 rounded-full text-sm"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Category filter */}
      <CategoryFilter
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {/* Menu grid */}
      <div className="px-4 pt-4 grid grid-cols-1 gap-4 max-w-lg mx-auto">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={addToCart} />
        ))}
      </div>

      {/* Cart drawer */}
      {cartOpen && (
        <Cart
          cart={cart}
          onRemove={removeFromCart}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}
