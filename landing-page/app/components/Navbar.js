"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Menu", "Location"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold tracking-tight">
          RestoName {/* TODO: replace */}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-600">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-black transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#location"
          className="hidden md:inline-block text-sm bg-[var(--color-primary)] text-white px-4 py-2 rounded-full hover:opacity-80 transition"
        >
          Find Us
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-gray-600">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-black transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
