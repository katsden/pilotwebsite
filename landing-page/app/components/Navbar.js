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
        scrolled 
          ? "bg-[var(--bg-cream)] border-b border-[var(--border-subtle)] shadow-sm" 
          : "bg-transparent"
      }`}
    >
      {/* Container utama dibuat tipis dengan py-4 dan max-w yang rapi */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO: Dikecilin jadi text-2xl font-black */}
        <a 
          href="#" 
          className="text-2xl font-black tracking-wider uppercase text-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          NASTRA
        </a>

        {/* MENU LINKS: Dikecilin ke text-xs dengan tracking agak renggang */}
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] font-semibold uppercase text-black">
          <a href="#cookies" className="hover:opacity-50 transition">Cookies</a>
          <a href="#cakes" className="hover:opacity-50 transition">Cakes</a>
          <a href="#about" className="hover:opacity-50 transition">About</a>
          <a href="#wholesale" className="hover:opacity-50 transition">Wholesale</a>
          <a href="#contact" className="hover:opacity-50 transition">Contact</a>
        </div>

        {/* ICONS: Ukuran SVG dikecilin ke 20px */}
        <div className="flex items-center gap-5 text-black">
          <button aria-label="Cart" className="hover:opacity-50 transition flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button aria-label="Search" className="hover:opacity-50 transition flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}
