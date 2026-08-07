import { notFound } from "next/navigation";
import Link from "next/link";
import { getBouquets, getWhatsAppLink } from "@/data/bouquets";
import { WhatsAppIcon } from "@/components/Icons";
import BouquetGallery from "@/components/BouquetGallery";

export async function generateStaticParams() {
  const bouquets = await getBouquets();
  return bouquets.map((bouquet) => ({
    id: bouquet.id,
  }));
}

export default async function BouquetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bouquets = await getBouquets();
  const bouquet = bouquets.find((b) => b.id === id);

  if (!bouquet) {
    notFound();
  }

  const relatedBouquets = bouquets
    .filter((b) => b.category === bouquet.category && b.id !== bouquet.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 pt-[104px]">
      <Link href="/bouquets" className="inline-flex items-center text-sm font-semibold text-text-light hover:text-charcoal transition-colors uppercase tracking-wider mb-8 md:mb-12">
        ← Back to Catalogue
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Images */}
        <BouquetGallery images={bouquet.images || []} />

        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-2">
            {bouquet.tags?.map((tag) => (
              <span key={tag} className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-rose-bg text-[#8b4a5a] mr-2">
                {tag.replace("-", " ")}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-medium text-charcoal mb-4">{bouquet.name}</h1>
          <p className="text-2xl font-medium text-charcoal mb-6">From RM {bouquet.price}</p>
          
          <div className="h-[1px] w-full bg-border-light my-6" />

          <p className="text-lg text-text-light leading-relaxed mb-8">{bouquet.description}</p>

          <div className="bg-surface border border-border-light rounded-xl p-6 mb-8">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Bouquet Details</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start">
                <span className="w-24 text-sm font-medium text-text-muted">Flowers</span>
                <span className="flex-1 text-sm text-charcoal">{bouquet.flowerTypes?.join(", ")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 text-sm font-medium text-text-muted">Colour</span>
                <span className="flex-1 text-sm text-charcoal">{bouquet.colorLabel}</span>
              </li>
              <li className="flex items-start">
                <span className="w-24 text-sm font-medium text-text-muted">Status</span>
                <span className="flex-1 text-sm text-charcoal capitalize">{bouquet.availability.replace("-", " ")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-sage-bg rounded-xl p-6 mb-10">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#4a6e46] mb-2">The WOP Promise</h3>
            <p className="text-sm text-[#4a6e46] leading-relaxed">Every bouquet is handcrafted with love and carefully prepared to ensure your blooms arrive fresh and beautiful. All you have to do is enjoy the moment!</p>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <a
              href={getWhatsAppLink(bouquet.name, bouquet.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 px-8 w-full bg-whatsapp text-white rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-whatsapp-hover transition-all shadow-md hover:shadow-[0_6px_24px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <p className="text-xs text-center text-text-muted">
              You will be redirected to WhatsApp to confirm details, delivery, and payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
