import Papa from "papaparse";

/**
 * BOUQUET CATALOGUE DATA
 * =====================
 * Single source of truth for all bouquet listings.
 */

export interface BouquetSize {
  name: string;
  price: number;
  images?: string[];
}

export interface Bouquet {
  id: string;
  name: string;
  price: number;
  sizes: BouquetSize[];
  category: string;
  occasion: string[];
  flowerTypes: string[];
  colors: string[];
  colorLabel: string;
  style: string;
  description: string;
  careInstructions: string;
  availability: "available" | "seasonal" | "sold-out";
  tags: string[];
  images: string[];
  customisable: boolean;
  dateAdded: string;
}

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTQUjxKmRbZLy8MRoT0sC55Rbwk5PTccjvdn5_qwH4dhXSta-SSGfJ8eWruSzUW6aCOqrmA0NmXKz3/pub?output=csv";

const USE_GOOGLE_SHEETS = false; // Set to true when you want to use the live Google Sheet

export async function getBouquets(): Promise<Bouquet[]> {
  if (!USE_GOOGLE_SHEETS) {
    return [
      {
        id: "oriental-lilies-bloom",
        name: "Oriental Lilies Bloom",
        price: 259,
        sizes: [{ name: "Standard", price: 259 }],
        category: "elegant",
        occasion: ["anniversary", "birthday", "just-because", "romance"],
        flowerTypes: ["Lilies", "Mix Blooms"],
        colors: ["pink", "white"],
        colorLabel: "Vibrant Pink & White",
        style: "classic",
        description: "A beautiful arrangement of fresh Oriental Lilies and mix blooms. Perfect for elegant occasions.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["popular", "featured"],
        images: ["/images/bouquets/Oriental Lilies Bloom.jpg", "/images/bouquets/Oriental Lilies Bloom (1).jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "thumbelily",
        name: "Thumbelily",
        price: 139,
        sizes: [
          { name: "Medium", price: 139, images: ["/images/bouquets/Thumbelily (M).jpg", "/images/bouquets/Thumbelily (M) (2).jpg", "/images/bouquets/Thumbelily (M) (3).jpg"] },
          { name: "Large", price: 159, images: ["/images/bouquets/Tumbelily (L).jpg", "/images/bouquets/Tumbelily (L) (2).jpg"] }
        ],
        category: "elegant",
        occasion: ["anniversary", "birthday", "romance", "just-because"],
        flowerTypes: ["Thumbelina", "Lilies"],
        colors: ["pink", "peach", "white"],
        colorLabel: "Pink, Peach & White",
        style: "classic",
        description: "Our signature arrangement featuring beautiful Thumbelina and Lilies. Available in multiple sizes to perfectly suit your occasion.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["best-seller", "popular"],
        images: ["/images/bouquets/Tumbelily (L).jpg", "/images/bouquets/Tumbelily (L) (2).jpg", "/images/bouquets/Thumbelily (M).jpg", "/images/bouquets/Thumbelina (S).jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "thumbelina-s",
        name: "Thumbelina",
        price: 100,
        sizes: [{ name: "Standard", price: 100 }],
        category: "elegant",
        occasion: ["birthday", "just-because"],
        flowerTypes: ["Thumbelina", "Roses", "Mix blooms"],
        colors: ["pink", "white", "blue"],
        colorLabel: "Pastel Pink, White & Blue Accents",
        style: "classic",
        description: "A sweet small arrangement with Thumbelina, Roses, and mix blooms. Handcrafted with playful details.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["new"],
        images: ["/images/bouquets/Thumbelina (S).jpg", "/images/bouquets/Thumbelina (S) (2).jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "mix-blooms",
        name: "Mix Blooms",
        price: 50,
        sizes: [{ name: "Standard", price: 50 }],
        category: "vibrant",
        occasion: ["just-because", "birthday", "thank-you"],
        flowerTypes: ["Chrysanthemums", "Gerbera", "Fillers"],
        colors: ["pink", "white", "yellow"],
        colorLabel: "Pink, White & Yellow",
        style: "rustic",
        description: "A cheerful mix of Chrysanthemums, Gerbera, and seasonal fillers to bring a little moment of joy.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["popular"],
        images: ["/images/bouquets/Mix blooms.jpg", "/images/bouquets/Mix blooms (2).jpg", "/images/bouquets/Mix blooms (3).jpg", "/images/bouquets/Mix blooms (4).jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "lilies-bloom",
        name: "Lilies Bloom",
        price: 79,
        sizes: [
          { name: "Medium", price: 79, images: ["/images/bouquets/ Lilies bloom (M)  (1).jpg", "/images/bouquets/ Lilies bloom (M)  (2).jpg"] },
          { name: "Large", price: 129, images: ["/images/bouquets/Lilies bloom (L).jpg", "/images/bouquets/Lilies bloom (L) (2).jpg"] }
        ],
        category: "elegant",
        occasion: ["anniversary", "birthday", "sympathy"],
        flowerTypes: ["Lilies", "Mix blooms"],
        colors: ["pink", "white"],
        colorLabel: "Vibrant Pink & White",
        style: "classic",
        description: "An elegant bouquet of Lilies and mix blooms, thoughtfully arranged by hand. Available in multiple sizes to make ordinary moments magical.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["featured"],
        images: ["/images/bouquets/Lilies bloom (L).jpg", "/images/bouquets/Lilies bloom (L) (2).jpg", "/images/bouquets/ Lilies bloom (M)  (1).jpg", "/images/bouquets/ Lilies bloom (M)  (2).jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "love-letter-lilies",
        name: "Love Letter Lilies",
        price: 60,
        sizes: [{ name: "Standard", price: 60 }],
        category: "elegant",
        occasion: ["romance", "anniversary", "just-because"],
        flowerTypes: ["Lilies", "Fillers"],
        colors: ["pink", "white", "blue"],
        colorLabel: "Pink, White & Blue Accents",
        style: "romantic",
        description: "A lovely and delicate arrangement of lilies meant to send a heartfelt message.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["new"],
        images: ["/images/bouquets/Love Letter Lilies.jpg", "/images/bouquets/Love Letter Lilies (2).jpg"],
        customisable: true,
        dateAdded: "2026-08-11",
      },
      {
        id: "orchid-bloom",
        name: "Orchid bloom",
        price: 80,
        sizes: [{ name: "Standard", price: 80 }],
        category: "elegant",
        occasion: ["birthday", "thank-you", "sympathy"],
        flowerTypes: ["Orchids"],
        colors: ["cream", "pink", "green"],
        colorLabel: "Cream & Soft Pink",
        style: "modern",
        description: "An exotic and striking display of fresh orchids, guaranteed to leave an impression.",
        careInstructions: "Keep in a cool spot and lightly mist the blooms.",
        availability: "available",
        tags: ["featured", "new"],
        images: ["/images/bouquets/Orchid bloom (2).jpg", "/images/bouquets/Orchid bloom.jpg"],
        customisable: true,
        dateAdded: "2026-08-11",
      },
      {
        id: "lacey-lily-blush",
        name: "Lacey Lily Blush",
        price: 90,
        sizes: [{ name: "Standard", price: 90 }],
        category: "elegant",
        occasion: ["birthday", "romance", "anniversary"],
        flowerTypes: ["Lilies", "Mix blooms"],
        colors: ["blush", "pink", "white"],
        colorLabel: "Blush Pink & White",
        style: "romantic",
        description: "A soft, blushing arrangement of exquisite lilies and delicate filler flowers.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["new", "best-seller"],
        images: ["/images/bouquets/Lacey Lily Blush (2).jpg", "/images/bouquets/Lacey Lily Blush.jpg"],
        customisable: true,
        dateAdded: "2026-08-11",
      }
    ];
  }

  try {
    const res = await fetch(CSV_URL, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch bouquets from Google Sheets");
    let csv = await res.text();

    // Find the actual header row (some sheets have empty first rows)
    const headerIndex = csv.toLowerCase().indexOf('bouquet name');
    if (headerIndex !== -1) {
      const lineStart = csv.lastIndexOf('\n', headerIndex);
      csv = csv.substring(lineStart === -1 ? 0 : lineStart + 1);
    }

    const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

    // Some sheets have a blank first column, so data might be keyed weirdly. 
    // We'll normalize keys to lowercase and strip whitespace to make it robust.
    const normalizeKey = (key: string) => key.toLowerCase().replace(/[^a-z0-9]/g, '');

    const validData = data.filter((row: any) => {
      const name = row['Bouquet Name'] || row.name || Object.entries(row).find(([k]) => normalizeKey(k) === 'bouquetname')?.[1];
      return name && String(name).trim() !== "";
    });

    return validData.map((row: any) => {
      // Helper to extract by fuzzy key
      const getVal = (possibleKeys: string[]) => {
        for (const key of possibleKeys) {
          if (row[key]) return row[key];
          const fuzzyMatch = Object.entries(row).find(([k]) => normalizeKey(k) === normalizeKey(key));
          if (fuzzyMatch && fuzzyMatch[1]) return fuzzyMatch[1];
        }
        return "";
      };

      const name = getVal(['Bouquet Name', 'name', 'title']);
      const rawPrice = getVal(['Price ', 'price', 'cost']);
      const price = parseInt(rawPrice.replace(/[^0-9]/g, "") || "0", 10);
      const rawFlowers = getVal(['Flower type ', 'flowerTypes', 'flowers']);
      const flowerTypes = rawFlowers ? rawFlowers.split(/[+,]/).map((s: string) => s.trim()).filter(Boolean) : [];
      const imagesRaw = getVal(['images', 'image', 'photo', 'photos']);
      const images = imagesRaw ? imagesRaw.split(",").map((s: string) => s.trim()).filter(Boolean) : ["/images/placeholder.jpg"];

      return {
        id: row.id || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        name: name,
        price: price,
        sizes: [{ name: "Standard", price: price }],
        category: row.category || "elegant",
        occasion: row.occasion ? row.occasion.split(",").map((s: string) => s.trim()).filter(Boolean) : [],
        flowerTypes: flowerTypes,
        colors: row.colors ? row.colors.split(",").map((s: string) => s.trim()).filter(Boolean) : [],
        colorLabel: getVal(['Colour description ', 'colorLabel', 'color']),
        style: row.style || "classic",
        description: getVal(['Short description ', 'description', 'desc']),
        careInstructions: row.careInstructions || "",
        availability: (row.availability || "available") as any,
        tags: row.tags ? row.tags.split(",").map((s: string) => s.trim()).filter(Boolean) : [],
        images: images,
        customisable: row.customisable?.toLowerCase() === "true" || row.customisable === "1",
        dateAdded: row.dateAdded || new Date().toISOString().split("T")[0],
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getFlowerOptions() {
  const bouquets = await getBouquets();
  const flowerMap = new Map<string, string>();
  bouquets.flatMap((b) => b.flowerTypes || []).forEach((flower) => {
    const value = flower.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (!flowerMap.has(value)) {
      flowerMap.set(value, flower);
    }
  });

  return Array.from(flowerMap.entries())
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([value, label]) => ({ value, label }));
}

/* ─── Filter Options ────────────────────────── */

export const occasions = [
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "wedding", label: "Wedding" },
  { value: "graduation", label: "Graduation" },
  { value: "congratulations", label: "Congratulations" },
  { value: "sympathy", label: "Sympathy" },
  { value: "housewarming", label: "Housewarming" },
  { value: "just-because", label: "Just Because" },
  { value: "romance", label: "Romance" },
  { value: "valentines", label: "Valentine's Day" },
  { value: "thank-you", label: "Thank You" },
];

export const colorOptions = [
  { value: "pink", label: "Pink", hex: "#ffc0cb" },
  { value: "red", label: "Red", hex: "#ff0000" },
  { value: "white", label: "White", hex: "#f8f9fa" },
  { value: "yellow", label: "Yellow", hex: "#ffd700" },
  { value: "purple", label: "Purple", hex: "#800080" },
  { value: "orange", label: "Orange", hex: "#ffa500" },
  { value: "green", label: "Green", hex: "#008000" },
  { value: "lavender", label: "Lavender", hex: "#e6e6fa" },
  { value: "cream", label: "Cream", hex: "#fffdd0" },
  { value: "blush", label: "Blush", hex: "#de5d83" },
  { value: "burgundy", label: "Burgundy", hex: "#800020" },
  { value: "gold", label: "Gold", hex: "#ffd700" },
];

export const priceRanges = [
  { value: "under-100", label: "Under RM 100", min: 0, max: 99 },
  { value: "100-150", label: "RM 100 – 150", min: 100, max: 150 },
  { value: "150-200", label: "RM 150 – 200", min: 150, max: 200 },
  { value: "200-plus", label: "RM 200+", min: 200, max: Infinity },
];

export const styleOptions = [
  { value: "classic", label: "Classic" },
  { value: "romantic", label: "Romantic" },
  { value: "rustic", label: "Rustic" },
  { value: "modern", label: "Modern" },
  { value: "garden", label: "Garden" },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "popular", label: "Popular" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low → High" },
  { value: "price-high", label: "Price: High → Low" },
];

/* ─── WhatsApp / Instagram Helpers ──────────── */

const WHATSAPP_NUMBER = "60139227688";
const INSTAGRAM_URL = "https://instagram.com/wispofpetalss";

export function getWhatsAppLink(bouquetName?: string, price?: number): string {
  const message = bouquetName
    ? `Hi! 🌸 I'm interested in the "${bouquetName}" bouquet${price ? ` (RM ${price})` : ""}. Is it currently available?`
    : "Hi! 🌸 I'd like to enquire about your flower bouquets.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCustomLink(): string {
  const message =
    "Hi! 🌸 I'd like to enquire about a custom bouquet arrangement.\n\nOccasion: \nBudget: \nPreferred colours: \nAny specific flowers: ";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getInstagramLink(): string {
  return INSTAGRAM_URL;
}
