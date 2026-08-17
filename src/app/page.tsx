import Link from "next/link";
import BouquetCard from "@/components/BouquetCard";
import { getBouquets } from "@/data/bouquets";
import FUITestimonialWithSlide from "@/components/ui/sliding-testimonial";
import Reveal from "@/components/Reveal";

// Horizontal scroll categories like BloomThis
const collections = [
  { label: "Bestsellers", img: "/images/bouquets/Lacey Lily Blush.jpg", href: "/bouquets?sort=popular" },
  { label: "Birthday", img: "/images/bouquets/Thumbelily (M).jpg", href: "/bouquets?occasion=birthday" },
  { label: "Romance", img: "/images/bouquets/Love Letter Lilies.jpg", href: "/bouquets?occasion=romance" },
  { label: "Just Because", img: "/images/bouquets/Mix blooms.jpg", href: "/bouquets?occasion=just-because" },
];

export default async function HomePage() {
  const bouquets = await getBouquets();
  const bestsellers = bouquets.filter((b) => b.tags?.includes("best-seller") || b.tags?.includes("featured") || b.tags?.includes("popular")).slice(0, 4);

  return (
    <>
      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/florist-story.jpg')] bg-cover bg-center opacity-40 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-[140px] md:mt-[180px]">
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

      {/* ── CATEGORIES (Bento Grid) ──── */}
      <section className="py-12 md:py-24 border-b border-border-light bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-charcoal mb-2 block">Curated for you</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-charcoal">Shop by Occasion</h2>
            </div>
            <Link href="/bouquets" className="text-sm font-semibold tracking-wider uppercase hover:text-accent transition-colors hidden md:block border-b-2 border-transparent hover:border-accent pb-1">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {collections.map((cat, idx) => {
              return (
                <Link 
                  key={idx} 
                  href={cat.href} 
                  className={`group relative overflow-hidden rounded-xl bg-surface h-[160px] shadow-sm transition-transform hover:-translate-y-1 ${
                    idx === 3 ? 'col-span-2 md:col-span-4 md:h-[280px]' : 
                    idx === 0 ? 'col-span-2 md:col-span-2 md:h-[240px]' : 
                    'col-span-1 md:col-span-1 md:h-[240px]'
                  }`}
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${cat.img}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                    <span className="inline-block bg-white/95 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold text-charcoal shadow-sm transition-transform duration-300 group-hover:-translate-y-1 w-max">
                      {cat.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── LATEST COLLECTIONS (Large Cards) ───────── */}
      <Reveal>
        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-charcoal mb-2 block">Now in-season</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-charcoal mb-8 md:mb-12">Latest collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-charcoal mb-8 md:mb-12">Bestsellers</h2>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12">
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
