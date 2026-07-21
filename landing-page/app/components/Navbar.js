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
      {/* Container utama dengan padding py-6 (medium height) */}
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        
        {/* LOGO: text-3xl font-bold */}
        <a 
          href="#" 
          className="text-3xl font-bold tracking-wider uppercase text-black"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          NASTRA
        </a>

        {/* MENU LINKS: text-sm dengan tracking yang pas */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] font-semibold uppercase text-black">
          <a href="#cookies" className="hover:opacity-50 transition">Cookies</a>
          <a href="#cakes" className="hover:opacity-50 transition">Cakes</a>
          <a href="#about" className="hover:opacity-50 transition">About</a>
          <a href="#wholesale" className="hover:opacity-50 transition">Wholesale</a>
          <a href="#contact" className="hover:opacity-50 transition">Contact</a>
        </div>

        {/* ICONS: Ukuran SVG 22px */}
        <div className="flex items-center gap-6 text-black">
          <button aria-label="Cart" className="hover:opacity-50 transition flex items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button aria-label="Search" className="hover:opacity-50 transition flex items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}
