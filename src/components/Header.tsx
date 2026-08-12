"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWhatsAppLink, getInstagramLink } from "@/data/bouquets";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "/bouquets", label: "All Bouquets" },
    { href: "/bouquets?occasion=birthday", label: "Birthday" },
    { href: "/bouquets?sort=popular", label: "Bestsellers" },
    { href: "/about", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#61ab7a] text-white text-[11px] md:text-xs font-medium text-center py-2 px-4 fixed top-0 w-full z-[60] tracking-wide">
        Handcrafted with love in every arrangement ✨
      </div>

      <header
        className={`fixed top-[32px] md:top-[34px] left-0 right-0 z-50 transition-all duration-300
          ${isTransparent ? "bg-transparent" : "bg-white border-b border-border-light shadow-sm"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Mobile Burger */}
          <button
            className={`md:hidden flex flex-col gap-[5px] p-1 z-[110] ${isTransparent ? "text-white" : "text-charcoal"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${menuOpen ? "bg-charcoal rotate-45 translate-y-[6.5px]" : "bg-current"}`} />
            <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${menuOpen ? "opacity-0" : "bg-current"}`} />
            <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${menuOpen ? "bg-charcoal -rotate-45 -translate-y-[6.5px]" : "bg-current"}`} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2 z-[110] transition-colors ${
              isTransparent ? "text-white" : "text-charcoal"
            } ${menuOpen ? "!text-charcoal" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-2xl">✿</span>
            <span className="font-heading text-xl md:text-2xl font-bold tracking-tight">Wisp of Petals</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                  isTransparent ? "text-white/90 hover:text-white" : "text-charcoal hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className={`hidden md:flex items-center gap-5 transition-colors ${isTransparent ? "text-white" : "text-charcoal"}`}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/30 z-[99] transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)} />

        {/* Mobile Drawer */}
        <nav className={`md:hidden fixed top-0 left-0 w-[300px] h-dvh bg-white z-[105] flex flex-col pt-28 px-8 gap-6 transition-transform duration-300 overflow-y-auto ${menuOpen ? "translate-x-0" : "-translate-x-full shadow-2xl"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-lg font-medium text-charcoal py-3 border-b border-border-light"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto pb-12 flex flex-col gap-4 pt-8 border-t border-border-light">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-accent-hover transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
