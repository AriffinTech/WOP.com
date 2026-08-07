import Link from "next/link";
import BouquetCard from "@/components/BouquetCard";
import { getBouquets } from "@/data/bouquets";
import FUITestimonialWithSlide from "@/components/ui/sliding-testimonial";
import Reveal from "@/components/Reveal";

// Horizontal scroll categories like BloomThis
const collections = [
  { label: "Bestsellers", img: "/images/real/photo_1_2026-08-06_12-12-47.jpg", href: "/bouquets?sort=popular" },
  { label: "Birthday", img: "/images/real/photo_3_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=birthday" },
  { label: "Romance", img: "/images/real/photo_11_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=romance" },
  { label: "Sympathy", img: "/images/real/photo_5_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=sympathy" },
  { label: "Graduation", img: "/images/real/photo_1_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=graduation" },
  { label: "Anniversary", img: "/images/real/photo_15_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=anniversary" },
  { label: "Just Because", img: "/images/real/photo_17_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=just-because" },
  { label: "Wedding", img: "/images/real/photo_13_2026-08-06_12-12-47.jpg", href: "/bouquets?occasion=wedding" },
];

export default async function HomePage() {
  const bouquets = await getBouquets();
  const bestsellers = bouquets.filter((b) => b.tags?.includes("best-seller") || b.tags?.includes("featured") || b.tags?.includes("popular")).slice(0, 4);

  return (
    <>
      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/florist-story.jpg')] bg-cover bg-center opacity-40 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-[104px]">
          <h2 className="text-white text-sm md:text-base font-bold tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up">
            Whimsical • Handcrafted • Unique
          </h2>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1] opacity-0 animate-fade-in-up animate-delay-1 drop-shadow-md">
            Pretty blooms,<br />prettier moments
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-2">
            <Link href="/bouquets" className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-accent-hover transition-colors shadow-lg">
              Send Flowers
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-accent-hover transition-colors shadow-lg">
              Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* ── CIRCULAR CATEGORIES (BloomThis style) ──── */}
      <section className="py-12 border-b border-border-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar">
            {collections.map((cat, idx) => (
              <Link key={idx} href={cat.href} className="flex flex-col items-center gap-3 shrink-0 snap-start group">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent transition-colors shadow-sm">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${cat.img})` }} />
                </div>
                <span className="text-[13px] font-medium text-charcoal">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ────────────────────────────── */}
      <section className="py-16 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border-light">
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-4xl mb-4 text-accent">🌸</span>
              <h3 className="font-heading text-lg font-medium text-charcoal">Luxurious modern designs</h3>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-4xl mb-4 text-accent">👐</span>
              <h3 className="font-heading text-lg font-medium text-charcoal">Artisan curated & handcrafted</h3>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-4xl mb-4 text-accent">🚚</span>
              <h3 className="font-heading text-lg font-medium text-charcoal">Free same & next-day delivery</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST COLLECTIONS (Large Cards) ───────── */}
      <Reveal>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-sm font-semibold tracking-wider uppercase text-charcoal mb-2 block">Now in-season</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-charcoal mb-12">Latest collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/bouquets?occasion=birthday" className="group relative aspect-[4/5] overflow-hidden bg-cream-dark flex flex-col justify-end p-8 text-left transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/real/photo_3_2026-08-06_12-12-47.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider mb-2 block">Premium quality</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-medium">Birthday flowers & gifts</h3>
                </div>
              </Link>
              <Link href="/bouquets?occasion=romance" className="group relative aspect-[4/5] overflow-hidden bg-cream-dark flex flex-col justify-end p-8 text-left transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/real/photo_1_2026-08-06_12-12-47.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider mb-2 block">Up to 15% off</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-medium">Romance & Anniversaries</h3>
                </div>
              </Link>
              <Link href="/contact" className="group relative aspect-[4/5] overflow-hidden bg-cream-dark flex flex-col justify-end p-8 text-left transition-transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/real/photo_5_2026-08-06_12-12-47.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider mb-2 block">Personalised just for you</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-medium">Bespoke Custom Orders</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── BESTSELLERS GRID ───────────────────────── */}
      <Reveal>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-charcoal mb-12">Bestsellers</h2>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
              {bestsellers.map((b) => (
                <div key={b.id} className="w-[calc(50%-0.375rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] max-w-[300px]">
                  <BouquetCard bouquet={b} />
                </div>
              ))}
            </div>

            <Link href="/bouquets" className="inline-flex items-center justify-center px-10 py-4 border-2 border-charcoal text-charcoal text-sm font-bold tracking-wider uppercase hover:bg-charcoal hover:text-white transition-colors">
              View All Bouquets
            </Link>
          </div>
        </section>
      </Reveal>
      <FUITestimonialWithSlide />
    </>
  );
}
