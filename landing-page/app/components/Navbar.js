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
        className={`container flex items-center justify-between py-6 ${
          scrolled ? "text-[var(--text-primary)]" : "text-white"
        }`}
      >
        <a href="#" className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          Nastra
        </a>

        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          <a href="#menu" className="hover:opacity-70 transition">Cookies</a>
          <a href="#cakes" className="hover:opacity-70 transition">Cakes</a>
          <a href="#story" className="hover:opacity-70 transition">About</a>
          <a href="#order" className="hover:opacity-70 transition">Contact</a>
        </div>

        <a href="#order" className="text-xs uppercase tracking-widest hover:opacity-70 transition">
          Order
        </a>
      </div>
    </nav>
  );
}
