import { notFound } from "next/navigation";
import Link from "next/link";
import { getBouquets } from "@/data/bouquets";
import BouquetInteractiveClient from "@/components/BouquetInteractiveClient";

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

      <BouquetInteractiveClient bouquet={bouquet} />
    </div>
  );
}
