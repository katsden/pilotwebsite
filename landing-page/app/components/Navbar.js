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
    <nav className={`glass-nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="logo">LUMINA<span>.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Vibe</a>
        </div>
        {/* TODO: ganti href ke URL Vercel menu-app lu nanti */}
        <a href="#" className="btn-secondary" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}>
          Lihat Menu
        </a>
      </div>
    </nav>
  );
}
