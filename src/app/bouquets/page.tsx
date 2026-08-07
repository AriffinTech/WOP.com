import { Suspense } from "react";
import CatalogueContent from "@/components/CatalogueContent";
import { getBouquets, getFlowerOptions } from "@/data/bouquets";

export default async function CataloguePage() {
  const bouquets = await getBouquets();
  const flowerOptions = await getFlowerOptions();

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading catalogue...</div>}>
      <CatalogueContent initialBouquets={bouquets} flowerOptions={flowerOptions} />
    </Suspense>
  );
}
