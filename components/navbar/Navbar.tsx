"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useContactHref } from "@/components/useContactHref";

export default function Navbar({ showVjencanja = false }: { showVjencanja?: boolean }) {
  const [open, setOpen] = useState(false);
  const contactHref = useContactHref();

  const links = [
    { name: "Početna", href: "/" },
    { name: "O nama", href: "/about" },
    { name: "Galerija", href: "/gallery" },
    ...(showVjencanja ? [{ name: "Vjenčanja", href: "/vjencanja" }] : []),
    { name: "Paketi", href: "/packages" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl tracking-wide">
          <Image 
            width={200}
            height={40}
            alt="Foto studio Video Alfa logo"
            src="/images/logo-alfa.png"
            priority
          />
        </Link>

        {/* Desktop Navigation (od 1220px) */}
        <nav className="hidden min-[1220px]:flex items-center gap-10 text-sm uppercase tracking-[0.15em]">
          {links.filter((link) => link.href !== "/").map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="opacity-80 hover:opacity-100 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden min-[1220px]:block">
          <Link
            href={contactHref}
            className="border border-white px-6 py-2 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500"
          >
            Zatraži ponudu
          </Link>
        </div>

        {/* Mobile Button (ispod 1220px) */}
        <button
          className="min-[1220px]:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="min-[1220px]:hidden bg-black text-white px-6 pb-8 space-y-6 uppercase tracking-[0.2em] text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block opacity-80 hover:opacity-100 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={contactHref}
            onClick={() => setOpen(false)}
            className="inline-block border border-white px-6 py-2 mt-4"
          >
            Zatraži ponudu
          </Link>
        </div>
      )}
    </header>
  );
}
