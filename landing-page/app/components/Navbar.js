"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--bg-cream)] border-b border-[var(--border-subtle)]" : "bg-transparent"
      }`}
    >
      <div
        className={`container flex items-center justify-between py-5 ${
          scrolled ? "text-[var(--text-primary)]" : "text-white"
        }`}
      >
        <a href="#" className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          Nastra
        </a>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#menu" className="hover:text-[var(--accent)] transition">Menu</a>
          <a href="#story" className="hover:text-[var(--accent)] transition">Our Story</a>
          <a href="#craft" className="hover:text-[var(--accent)] transition">Craft</a>
          <a href="#order" className="hover:text-[var(--accent)] transition">Order</a>
        </div>

        
          href="#order"
          className="hidden sm:inline-block"
          style={{
            fontSize: "0.85rem",
            padding: "0.6rem 1.4rem",
            borderRadius: "999px",
            border: `1px solid ${scrolled ? "var(--border-subtle)" : "rgba(255,255,255,0.6)"}`,
            color: scrolled ? "var(--text-primary)" : "#fff",
          }}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
