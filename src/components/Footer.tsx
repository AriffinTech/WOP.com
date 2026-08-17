"use client";

import Link from "next/link";
import { getWhatsAppLink, getInstagramLink } from "@/data/bouquets";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark border-t border-border-light mt-24 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 md:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Wisp of Petals Logo" className="h-20 md:h-28 w-auto object-contain rounded-sm" />
            </div>
            <p className="text-sm text-text-light leading-relaxed max-w-[260px] mt-1">
              Handcrafted bouquets made with love from our home to yours.
            </p>
            <div className="flex gap-4 mt-2">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-charcoal transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-charcoal transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal mb-1">Quick Links</h4>
            <Link href="/bouquets" className="text-sm text-text-light hover:text-charcoal transition-colors">Shop All Bouquets</Link>
            <Link href="/about" className="text-sm text-text-light hover:text-charcoal transition-colors">Our Story</Link>
            <Link href="/faq" className="text-sm text-text-light hover:text-charcoal transition-colors">FAQ</Link>
            <Link href="/contact" className="text-sm text-text-light hover:text-charcoal transition-colors">Contact Us</Link>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal mb-1">Categories</h4>
            <Link href="/bouquets?occasion=birthday" className="text-sm text-text-light hover:text-charcoal transition-colors">Birthday</Link>
            <Link href="/bouquets?occasion=anniversary" className="text-sm text-text-light hover:text-charcoal transition-colors">Anniversary</Link>
            <Link href="/bouquets?occasion=wedding" className="text-sm text-text-light hover:text-charcoal transition-colors">Wedding</Link>
            <Link href="/bouquets?occasion=sympathy" className="text-sm text-text-light hover:text-charcoal transition-colors">Sympathy</Link>
            <Link href="/bouquets?occasion=just-because" className="text-sm text-text-light hover:text-charcoal transition-colors">Just Because</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal mb-1">Get in Touch</h4>
            <p className="text-sm text-text-light">Mon – Sat: 9 AM – 6 PM</p>
            <p className="text-sm text-text-light">Serving Klang Valley, MY</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 mt-3 px-5 py-2.5 bg-whatsapp text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-whatsapp-hover transition-colors w-fit">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border-light gap-2">
          <p className="text-xs text-text-muted">© {year} Wisp of Petals. All rights reserved.</p>
          <p className="text-xs text-text-muted">Handcrafted with 🌸 in Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
