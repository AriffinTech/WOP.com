import Papa from "papaparse";

/**
 * BOUQUET CATALOGUE DATA
 * =====================
 * Single source of truth for all bouquet listings.
 */

export interface BouquetSize {
  name: string;
  price: number;
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
        occasion: ["anniversary", "birthday", "just-because"],
        flowerTypes: ["Lilies", "Mix Blooms"],
        colors: ["white", "pink"],
        colorLabel: "Soft Pink & White",
        style: "classic",
        description: "A beautiful arrangement of fresh Oriental Lilies and mix blooms. Perfect for elegant occasions.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["popular", "featured"],
        images: ["/images/real/photo_5_2026-08-06_12-12-47.jpg", "/images/real/photo_6_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "thumbelily-l",
        name: "Thumbelily (L)",
        price: 159,
        sizes: [{ name: "Standard", price: 159 }],
        category: "elegant",
        occasion: ["anniversary", "birthday"],
        flowerTypes: ["Thumbelina", "Lilies"],
        colors: ["pink"],
        colorLabel: "Pink",
        style: "classic",
        description: "A stunning large arrangement featuring Thumbelina and Lilies, crafted with our signature touches.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["best-seller"],
        images: ["/images/real/photo_1_2026-08-06_12-12-47.jpg", "/images/real/photo_2_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "thumbelily-m",
        name: "Thumbelily (M)",
        price: 139,
        sizes: [{ name: "Standard", price: 139 }],
        category: "elegant",
        occasion: ["anniversary", "birthday"],
        flowerTypes: ["Thumbelina", "Lilies"],
        colors: ["pink"],
        colorLabel: "Pink",
        style: "classic",
        description: "A lovely medium arrangement featuring Thumbelina and Lilies, perfect for showing you care.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: [],
        images: ["/images/real/photo_3_2026-08-06_12-12-47.jpg", "/images/real/photo_4_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "thumbelina-s",
        name: "Thumbelina (S)",
        price: 100,
        sizes: [{ name: "Standard", price: 100 }],
        category: "elegant",
        occasion: ["birthday", "just-because"],
        flowerTypes: ["Thumbelina", "Roses", "Mix blooms"],
        colors: ["pink", "white"],
        colorLabel: "Soft Pink & White",
        style: "classic",
        description: "A sweet small arrangement with Thumbelina, Roses, and mix blooms. Handcrafted with playful details.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["new"],
        images: ["/images/real/photo_7_2026-08-06_12-12-47.jpg", "/images/real/photo_8_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "mix-blooms",
        name: "Mix Blooms",
        price: 50,
        sizes: [{ name: "Standard", price: 50 }],
        category: "vibrant",
        occasion: ["just-because", "birthday"],
        flowerTypes: ["Chrysanthemums", "Gerbera", "Fillers"],
        colors: ["mixed"],
        colorLabel: "Mixed Colors",
        style: "rustic",
        description: "A cheerful mix of Chrysanthemums, Gerbera, and seasonal fillers to bring a little moment of joy.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["popular"],
        images: ["/images/real/photo_13_2026-08-06_12-12-47.jpg", "/images/real/photo_14_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "lilies-bloom-l",
        name: "Lilies Bloom (L)",
        price: 129,
        sizes: [{ name: "Standard", price: 129 }],
        category: "elegant",
        occasion: ["anniversary", "birthday"],
        flowerTypes: ["Lilies", "Mix blooms"],
        colors: ["white", "green"],
        colorLabel: "White & Green",
        style: "classic",
        description: "A large, elegant bouquet of Lilies and mix blooms, thoughtfully arranged by hand.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: ["featured"],
        images: ["/images/real/photo_9_2026-08-06_12-12-47.jpg", "/images/real/photo_10_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
      },
      {
        id: "lilies-bloom-m",
        name: "Lilies Bloom (M)",
        price: 79,
        sizes: [{ name: "Standard", price: 79 }],
        category: "elegant",
        occasion: ["anniversary", "birthday"],
        flowerTypes: ["Lilies", "Mix blooms"],
        colors: ["white", "green"],
        colorLabel: "White & Green",
        style: "classic",
        description: "A medium, elegant bouquet of Lilies and mix blooms to make ordinary moments magical.",
        careInstructions: "Trim stems at an angle and change water every 2 days.",
        availability: "available",
        tags: [],
        images: ["/images/real/photo_11_2026-08-06_12-12-47.jpg", "/images/real/photo_12_2026-08-06_12-12-47.jpg"],
        customisable: true,
        dateAdded: "2026-08-01",
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
    ? `Hi! 🌸 I'm interested in the "${bouquetName}" bouquet${price ? ` (from RM ${price})` : ""}. Is it currently available?`
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
