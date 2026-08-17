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
    "id": "romantic-lilies-bloom",
    "name": "Romantic Lilies Bloom",
    "price": 259,
    "sizes": [
      {
        "name": "Standard",
        "price": 259
      }
    ],
    "category": "elegant",
    "occasion": [
      "romance",
      "anniversary"
    ],
    "flowerTypes": [
      "Lilies",
      "Mix Blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A romantic mix of vibrant lilies, roses, and delicate blooms. Wrapped in soft pastel tones with a touch of dreamy, full, and perfect for heartfelt surprises.",
    "careInstructions": "",
    "availability": "available",
    "tags": [
      "best-seller"
    ],
    "images": [
      "/images/bouquets/Romantic Lilies Bloom (1).jpg",
      "/images/bouquets/Romantic Lilies Bloom (2).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "romantic-rose-lilies-bloom",
    "name": "Romantic Rose Lilies Bloom",
    "price": 269,
    "sizes": [
      {
        "name": "Standard",
        "price": 269
      }
    ],
    "category": "elegant",
    "occasion": [
      "romance",
      "anniversary"
    ],
    "flowerTypes": [
      "Rose Lilies",
      "Mix Blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A romantic mix of soft rose lilies, roses, and delicate blooms. Wrapped in soft pastel tones with a touch of dreamy, full, and perfect for heartfelt surprises.",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Romantic Rose Lilies Bloom (1).jpg",
      "/images/bouquets/Romantic Rose Lilies Bloom (2).jpg",
      "/images/bouquets/Romantic Rose Lilies Bloom (3).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "thumbelily",
    "name": "Thumbelily",
    "price": 139,
    "sizes": [
      {
        "name": "Large",
        "price": 159,
        "images": [
          "/images/bouquets/Thumbelily Size L (1).jpg",
          "/images/bouquets/Thumbelily Size L (2).jpg",
          "/images/bouquets/Thumbelily Size L (3).jpg",
          "/images/bouquets/Thumbelily Size L (4).jpg"
        ]
      },
      {
        "name": "Medium",
        "price": 139,
        "images": [
          "/images/bouquets/Thumbelily Size M (1).jpg",
          "/images/bouquets/Thumbelily Size M (2).jpg",
          "/images/bouquets/Thumbelily Size M (3).jpg"
        ]
      }
    ],
    "category": "elegant",
    "occasion": [
      "birthday",
      "just-because",
      "anniversary"
    ],
    "flowerTypes": [
      "Thumbelina",
      "Lilies"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "Cheerful blend with a pop of pink, vibrant yellow, colourful seasonal flowers. Bright, fresh and full of joy.",
    "careInstructions": "",
    "availability": "available",
    "tags": [
      "best-seller"
    ],
    "images": [
      "/images/bouquets/Thumbelily Size L (1).jpg",
      "/images/bouquets/Thumbelily Size L (2).jpg",
      "/images/bouquets/Thumbelily Size L (3).jpg",
      "/images/bouquets/Thumbelily Size L (4).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "thumbelina",
    "name": "Thumbelina",
    "price": 100,
    "sizes": [
      {
        "name": "Small",
        "price": 100,
        "images": [
          "/images/bouquets/Thumbelina Size S (1).jpg",
          "/images/bouquets/Thumbelina Size S (2).jpg"
        ]
      },
      {
        "name": "Medium",
        "price": 139,
        "images": [
          "/images/bouquets/Thumbelina Size M (1).jpg",
          "/images/bouquets/Thumbelina Size M (2).jpg",
          "/images/bouquets/Thumbelina Size M (3).jpg"
        ]
      }
    ],
    "category": "elegant",
    "occasion": [
      "birthday",
      "just-because"
    ],
    "flowerTypes": [
      "Roses",
      "Gerberas",
      "Thumbelina Mix blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A playful mix of pastel blooms filled with delicate flowers and airy greenery. For the sweet, cheerful, and effortlessly charming.",
    "careInstructions": "",
    "availability": "available",
    "tags": [
      "best-seller"
    ],
    "images": [
      "/images/bouquets/Thumbelina Size M (1).jpg",
      "/images/bouquets/Thumbelina Size M (2).jpg",
      "/images/bouquets/Thumbelina Size M (3).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "mix-blooms",
    "name": "Mix Blooms",
    "price": 50,
    "sizes": [
      {
        "name": "Small",
        "price": 50,
        "images": [
          "/images/bouquets/Mix blooms RM50 (1).jpg",
          "/images/bouquets/Mix blooms RM50 (2).jpg"
        ]
      },
      {
        "name": "Medium",
        "price": 60,
        "images": [
          "/images/bouquets/Mix blooms RM60 (1).jpg"
        ]
      },
      {
        "name": "Large",
        "price": 70,
        "images": [
          "/images/bouquets/Mix blooms RM70 (1).jpg",
          "/images/bouquets/Mix blooms RM70 (2).jpg",
          "/images/bouquets/Mix blooms RM70 (3).jpg"
        ]
      }
    ],
    "category": "elegant",
    "occasion": [
      "just-because",
      "birthday",
      "thank-you"
    ],
    "flowerTypes": [
      "Chrysanthemums",
      "Gerbera",
      "Fillers",
      "Additional Blooms (Depending on availability)"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A dainty mix of pink and white flowers with other soft flowers. A sweet choice for a simple 'thinking of you'.",
    "careInstructions": "",
    "availability": "available",
    "tags": [
      "best-seller"
    ],
    "images": [
      "/images/bouquets/Mix blooms RM70 (1).jpg",
      "/images/bouquets/Mix blooms RM70 (2).jpg",
      "/images/bouquets/Mix blooms RM70 (3).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "lilies-bloom",
    "name": "Lilies Bloom",
    "price": 79,
    "sizes": [
      {
        "name": "Large",
        "price": 129,
        "images": [
          "/images/bouquets/Lilies bloom (L).jpg",
          "/images/bouquets/Lilies bloom (L) (2).jpg"
        ]
      },
      {
        "name": "Medium",
        "price": 79,
        "images": [
          "/images/bouquets/Lilies Bloom Size M (1).jpg",
          "/images/bouquets/Lilies Bloom Size M (2).jpg",
          "/images/bouquets/Lilies Bloom Size M (3).jpg",
          "/images/bouquets/Lilies Bloom Size M (4).jpg"
        ]
      },
      {
        "name": "Extra Blooms",
        "price": 159,
        "images": [
          "/images/bouquets/Lilies Bloom - Extra blooms RM150 (1).jpg",
          "/images/bouquets/Lilies Bloom - Extra blooms RM150 (2).jpg"
        ]
      }
    ],
    "category": "elegant",
    "occasion": [
      "birthday",
      "anniversary",
      "sympathy"
    ],
    "flowerTypes": [
      "Lilies",
      "Mix blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "Bright pops of pink and yellow to add a cheerful touch. Fresh, feminine, and made to brighten someone's day.",
    "careInstructions": "",
    "availability": "available",
    "tags": [
      "best-seller"
    ],
    "images": [
      "/images/bouquets/Lilies Bloom - Extra blooms RM150 (1).jpg",
      "/images/bouquets/Lilies Bloom - Extra blooms RM150 (2).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "single-lily-mix-blooms",
    "name": "Single Lily Mix Blooms",
    "price": 65,
    "sizes": [
      {
        "name": "Standard",
        "price": 65
      }
    ],
    "category": "elegant",
    "occasion": [
      "just-because",
      "birthday"
    ],
    "flowerTypes": [
      "Single Lily",
      "Mix blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A dainty mix of colourful flowers with a single lily blooming for all lily lovers who wants something a little simpler. A sweet choice for a simple 'thinking of you'.",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Single Lily Mix Blooms (1).jpg",
      "/images/bouquets/Single Lily Mix Blooms (2).jpg",
      "/images/bouquets/Single Lily Mix Blooms (3).jpg",
      "/images/bouquets/Single Lily Mix Blooms (4).jpg",
      "/images/bouquets/Single Lily Mix Blooms (5).JPG"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "lilies-with-love",
    "name": "Lilies, with love",
    "price": 65,
    "sizes": [
      {
        "name": "2 Lilies",
        "price": 70,
        "images": [
          "/images/bouquets/Lilies, with love (1).jpg",
          "/images/bouquets/Lilies, with love (2).jpg",
          "/images/bouquets/Lilies, with love (3).jpg",
          "/images/bouquets/Lilies, with love (4).jpg"
        ]
      },
      {
        "name": "1 Lily",
        "price": 65,
        "images": [
          "/images/bouquets/Lilies, with love (1).jpg",
          "/images/bouquets/Lilies, with love (2).jpg",
          "/images/bouquets/Lilies, with love (3).jpg",
          "/images/bouquets/Lilies, with love (4).jpg"
        ]
      }
    ],
    "category": "elegant",
    "occasion": [
      "romance",
      "just-because",
      "anniversary"
    ],
    "flowerTypes": [
      "2 lilies",
      "Mix blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A lovely and delicate arrangement of lilies blooming from an envelope, meant to send a heartfelt message.",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Lilies, with love (1).jpg",
      "/images/bouquets/Lilies, with love (2).jpg",
      "/images/bouquets/Lilies, with love (3).jpg",
      "/images/bouquets/Lilies, with love (4).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "lacey-lily-blush",
    "name": "Lacey Lily Blush",
    "price": 99,
    "sizes": [
      {
        "name": "Standard",
        "price": 99
      }
    ],
    "category": "elegant",
    "occasion": [
      "romance",
      "anniversary",
      "birthday"
    ],
    "flowerTypes": [
      "Lily",
      "Orchid",
      "Mix blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A soft, blushing arrangement of exquisite lily, orchid and delicate filler flowers.",
    "careInstructions": "",
    "availability": "available",
    "tags": [
      "best-seller"
    ],
    "images": [
      "/images/bouquets/Lacey Lily Blush (1).jpg",
      "/images/bouquets/Lacey Lily Blush (2).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "rose-thumbelilies",
    "name": "Rose Thumbelilies",
    "price": 169,
    "sizes": [
      {
        "name": "Standard",
        "price": 169
      }
    ],
    "category": "elegant",
    "occasion": [
      "birthday",
      "just-because"
    ],
    "flowerTypes": [
      "Rose lilies",
      "Lilies",
      "Thumbelina"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "Cheerful blend with pop of pink, vibrant yellow, colourful seasonal flowers. Bright, fresh and full of joy.",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Rose Thumbelily (1).jpg",
      "/images/bouquets/Rose Thumbelily (2).jpg",
      "/images/bouquets/Rose Thumbelily (3).jpg",
      "/images/bouquets/Rose Thumbelily (4).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "lilies-roses",
    "name": "Lilies & Roses",
    "price": 100,
    "sizes": [
      {
        "name": "Standard",
        "price": 100
      }
    ],
    "category": "elegant",
    "occasion": [
      "romance",
      "anniversary"
    ],
    "flowerTypes": [
      "Lilies",
      "Roses",
      "Soft Blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "Romantic twist on the usual love flowers, combining two all time favourite blooms in a soft and elegant bouquet for a heartwarming \"I love you\". ",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Lilies & Roses (1).jpg",
      "/images/bouquets/Lilies & Roses (2).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "orchid-bloom",
    "name": "Orchid Bloom",
    "price": 89,
    "sizes": [
      {
        "name": "Standard",
        "price": 89
      }
    ],
    "category": "elegant",
    "occasion": [
      "birthday",
      "sympathy",
      "thank-you"
    ],
    "flowerTypes": [
      "Orchid",
      "Mix blooms"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "An exotic and striking display of fresh orchids, guaranteed to leave an impression.",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Orchid bloom (2).jpg",
      "/images/bouquets/Orchid bloom.jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
  },
  {
    "id": "mix-blooms-with-love",
    "name": "Mix blooms, with love",
    "price": 60,
    "sizes": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "category": "elegant",
    "occasion": [
      "just-because",
      "thank-you"
    ],
    "flowerTypes": [
      "Chrysanthemums",
      "Gerbera",
      "Fillers",
      "Additional Blooms (Depending on availability)"
    ],
    "colors": [],
    "colorLabel": "",
    "style": "classic",
    "description": "A lovely and delicate arrangement of soft flowers blooming from an envelope, meant to send a heartfelt message.",
    "careInstructions": "",
    "availability": "available",
    "tags": [],
    "images": [
      "/images/bouquets/Mix blooms, with love (1).jpg",
      "/images/bouquets/Mix blooms, with love (2).jpg",
      "/images/bouquets/Mix blooms, with love (3).jpg",
      "/images/bouquets/Mix blooms, with love (4).jpg",
      "/images/bouquets/Mix blooms, with love (5).jpg"
    ],
    "customisable": true,
    "dateAdded": "2026-08-17"
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
