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
        
         <a href="#"
          className="text-2xl tracking-widest uppercase font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Nastra
        </a>

        <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.15em] font-medium">
          <a href="#menu" className="hover:opacity-60 transition">Cookies</a>
          <a href="#cakes" className="hover:opacity-60 transition">Cakes</a>
          <a href="#story" className="hover:opacity-60 transition">About</a>
          <a href="#order" className="hover:opacity-60 transition">Contact</a>
        </div>

        <div className="flex items-center gap-5">
          <button aria-label="Cart" className="hover:opacity-60 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button aria-label="Search" className="hover:opacity-60 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
