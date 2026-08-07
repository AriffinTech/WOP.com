import Link from "next/link";
import { getWhatsAppLink } from "@/data/bouquets";

export const metadata = {
  title: "Our Story | Wisp of Petals — Handcrafted Bouquets",
  description:
    "Learn about Wisp of Petals, a home-based florist crafting beautiful bouquets with love and care. Discover our story and values.",
};

export default function AboutPage() {
  return (
    <div className="pt-[104px]">
      {/* Header */}
      <section className="bg-cream-dark border-b border-border-light py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-sage mb-3 block">About Us</span>
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-charcoal mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            From a simple love for flowers to a home-based boutique — here's how it all began.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-rose-bg to-sage-bg rounded-2xl bg-[url('/images/bouquets/photo_2026-08-07_00-28-17.jpg')] bg-cover bg-center" />
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-champagne-light rounded-2xl -z-10 opacity-60" />
            </div>
            <div className="max-w-[480px]">
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-charcoal mb-8">Pretty blooms, prettier moments</h2>
              <p className="text-text-light leading-relaxed mb-6">
                Wisp of petals began as a fun weekend side quest between two sisters who just wanted to create pretty blooms and bring the Pinterest aesthetic to life. 
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Somewhere between late nights, polkadots, ribbons, laces, and countless blooms, we realised we weren’t just making flowers, but little moments of joy and love. So we created wisp of petals, a home-based florist dedicated to designing whimsical, Pinterest & IG-worthy blooms that make ordinary moments feel a little more magical.
              </p>
              <h2 className="font-heading text-2xl font-medium text-charcoal mb-4 mt-8">What makes our bouquets special?</h2>
              <p className="text-text-light leading-relaxed mb-6">
                At wisp of petals, we don’t believe bigger always means better. Sometimes, a bouquet created with intention, playful details and full personality carries much more meaning than an extravagant bouquet with hundreds of stems.
              </p>
              <p className="text-text-light leading-relaxed">
                Each and every one of our bouquets is thoughtfully arranged by hand with soft colours, delicate textures, and our signature touches of polkas, laces, ribbons and pearls. Because we believe beautiful blooms shouldn’t only exist on your Pinterest board. They should exist in your hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-sage mb-3 block">What We Stand For</span>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-charcoal mb-16">Our Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-10 rounded-2xl border border-border-light transition-transform hover:-translate-y-1 hover:shadow-md">
              <span className="text-4xl block mb-6">🌸</span>
              <h3 className="font-heading text-xl font-medium text-charcoal mb-3">Just Because</h3>
              <p className="text-sm text-text-light leading-relaxed">
                We believe everyone deserves blooms as pretty and whimsical as they are. Not just for special occasions, but just because.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-2xl border border-border-light transition-transform hover:-translate-y-1 hover:shadow-md">
              <span className="text-4xl block mb-6">✋</span>
              <h3 className="font-heading text-xl font-medium text-charcoal mb-3">Handcrafted with Care</h3>
              <p className="text-sm text-text-light leading-relaxed">
                We believe just a few fresh blooms handcrafted with care is enough to make say everything and become part of someone’s special memories.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-2xl border border-border-light transition-transform hover:-translate-y-1 hover:shadow-md">
              <span className="text-4xl block mb-6">🌿</span>
              <h3 className="font-heading text-xl font-medium text-charcoal mb-3">Unique to You</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Every bouquet is made fresh to order, which means no two bouquets will ever be exactly the same. Every bouquet is unique and one of a kind.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-2xl border border-border-light transition-transform hover:-translate-y-1 hover:shadow-md">
              <span className="text-4xl block mb-6">✨</span>
              <h3 className="font-heading text-xl font-medium text-charcoal mb-3">Creating Feelings</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Our goal isn’t to recreate the exact bouquet in a photo. Our goal is to recreate the same feeling while staying true to our soft whimsical style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-medium text-charcoal mb-6">Let's Create Something Beautiful</h2>
          <p className="text-lg text-text-light leading-relaxed mb-10">
            Browse our collection or reach out to discuss a custom arrangement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bouquets" className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-[#444] transition-all hover:-translate-y-[1px] shadow-sm">
              Browse Bouquets
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-whatsapp text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-whatsapp-hover transition-all hover:-translate-y-[1px] shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
