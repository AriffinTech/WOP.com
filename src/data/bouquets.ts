/**
 * BOUQUET CATALOGUE DATA
 * =====================
 * Single source of truth for all bouquet listings.
 * To add/remove/update bouquets, edit this file.
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

export const bouquets: Bouquet[] = [
  {
    id: "peony-blush",
    name: "Peony Blush",
    price: 189,
    sizes: [
      { name: "Standard", price: 189 },
      { name: "Premium", price: 259 },
    ],
    category: "romance",
    occasion: ["anniversary", "birthday", "just-because"],
    flowerTypes: ["Peonies", "Garden Roses", "Eucalyptus"],
    colors: ["pink", "white"],
    colorLabel: "Soft Pink & White",
    style: "classic",
    description:
      "A dreamy arrangement of blush peonies and ivory garden roses, finished with delicate eucalyptus greenery. Perfect for romantic occasions or to brighten someone's day.",
    careInstructions:
      "Trim stems at an angle and change water every 2 days. Keep away from direct sunlight. Expected vase life: 5–7 days.",
    availability: "available",
    tags: ["best-seller", "popular"],
    images: ["/images/bouquets/peony-blush.jpg"],
    customisable: true,
    dateAdded: "2026-01-15",
  },
  {
    id: "sunset-garden",
    name: "Sunset Garden",
    price: 159,
    sizes: [
      { name: "Standard", price: 159 },
      { name: "Premium", price: 219 },
      { name: "Grand", price: 299 },
    ],
    category: "vibrant",
    occasion: ["birthday", "congratulations", "just-because"],
    flowerTypes: ["Roses", "Gerbera Daisies", "Carnations", "Hypericum Berries"],
    colors: ["orange", "yellow", "red"],
    colorLabel: "Warm Sunset Tones",
    style: "rustic",
    description:
      "A vibrant burst of warmth featuring sunset-hued roses, cheerful gerberas, and pops of hypericum berries. An uplifting arrangement that brings joy to any room.",
    careInstructions:
      "Trim stems at an angle and change water every 2 days. Add flower food if provided. Expected vase life: 7–10 days.",
    availability: "available",
    tags: ["popular"],
    images: ["/images/bouquets/sunset-garden.jpg"],
    customisable: true,
    dateAdded: "2026-02-10",
  },
  {
    id: "white-serenity",
    name: "White Serenity",
    price: 219,
    sizes: [
      { name: "Standard", price: 219 },
      { name: "Premium", price: 299 },
    ],
    category: "elegant",
    occasion: ["sympathy", "wedding", "anniversary"],
    flowerTypes: ["White Roses", "Lilies", "Baby's Breath", "Dusty Miller"],
    colors: ["white", "green"],
    colorLabel: "Pure White & Green",
    style: "classic",
    description:
      "An ethereal all-white arrangement of pristine roses and fragrant lilies, softened by clouds of baby's breath. Conveys peace, elegance, and heartfelt emotion.",
    careInstructions:
      "Remove lily pollen to avoid staining. Trim stems and change water every 2 days. Expected vase life: 7–10 days.",
    availability: "available",
    tags: ["featured"],
    images: ["/images/bouquets/white-serenity.jpg"],
    customisable: false,
    dateAdded: "2026-03-01",
  },
  {
    id: "lavender-dream",
    name: "Lavender Dream",
    price: 139,
    sizes: [
      { name: "Standard", price: 139 },
      { name: "Premium", price: 199 },
    ],
    category: "pastel",
    occasion: ["birthday", "just-because", "graduation"],
    flowerTypes: ["Lavender Roses", "Lisianthus", "Statice"],
    colors: ["purple", "lavender"],
    colorLabel: "Soft Lavender",
    style: "romantic",
    description:
      "Delicate shades of purple and lilac come together in this romantic arrangement. Featuring lavender roses and ruffled lisianthus for an irresistibly feminine touch.",
    careInstructions:
      "Trim stems at an angle. Keep in a cool spot away from fruits. Expected vase life: 5–7 days.",
    availability: "available",
    tags: ["new"],
    images: ["/images/bouquets/lavender-dream.jpg"],
    customisable: true,
    dateAdded: "2026-06-20",
  },
  {
    id: "rustic-wildflower",
    name: "Rustic Wildflower",
    price: 129,
    sizes: [
      { name: "Standard", price: 129 },
      { name: "Premium", price: 179 },
    ],
    category: "rustic",
    occasion: ["birthday", "just-because", "housewarming"],
    flowerTypes: ["Chamomile", "Sunflowers", "Dried Wheat", "Daisies"],
    colors: ["yellow", "white", "green"],
    colorLabel: "Natural Meadow",
    style: "rustic",
    description:
      "Inspired by sun-drenched meadows, this cheerful mix of chamomile, mini sunflowers, and dried wheat brings a breath of fresh air and countryside charm.",
    careInstructions:
      "Trim stems and refresh water daily. Dried elements will last much longer. Expected vase life: 5–7 days for fresh stems.",
    availability: "available",
    tags: ["popular"],
    images: ["/images/bouquets/rustic-wildflower.jpg"],
    customisable: true,
    dateAdded: "2026-04-05",
  },
  {
    id: "crimson-love",
    name: "Crimson Love",
    price: 199,
    sizes: [
      { name: "Standard", price: 199 },
      { name: "Premium", price: 279 },
      { name: "Grand", price: 369 },
    ],
    category: "romance",
    occasion: ["anniversary", "valentines", "romance"],
    flowerTypes: ["Red Roses", "Red Spray Roses", "Eucalyptus"],
    colors: ["red"],
    colorLabel: "Classic Red",
    style: "classic",
    description:
      "The timeless declaration of love. Premium long-stemmed red roses beautifully wrapped with hints of eucalyptus. Nothing says 'I love you' quite like this.",
    careInstructions:
      "Trim stems at an angle and place in clean water. Change water every 2 days. Expected vase life: 7–10 days.",
    availability: "available",
    tags: ["best-seller", "featured"],
    images: ["/images/bouquets/crimson-love.jpg"],
    customisable: true,
    dateAdded: "2026-01-01",
  },
  {
    id: "spring-meadow",
    name: "Spring Meadow",
    price: 149,
    sizes: [
      { name: "Standard", price: 149 },
      { name: "Premium", price: 209 },
    ],
    category: "vibrant",
    occasion: ["birthday", "congratulations", "housewarming", "just-because"],
    flowerTypes: ["Tulips", "Ranunculus", "Sweet Peas", "Greenery"],
    colors: ["pink", "yellow", "green"],
    colorLabel: "Cheerful Spring Mix",
    style: "garden",
    description:
      "A lively celebration of spring blooms! Tulips, ranunculus, and sweet peas mingle in a joyful palette that captures the energy of a sunlit garden.",
    careInstructions:
      "Tulips continue to grow in the vase — this is normal! Refresh water daily. Expected vase life: 5–7 days.",
    availability: "available",
    tags: ["new"],
    images: ["/images/bouquets/spring-meadow.jpg"],
    customisable: true,
    dateAdded: "2026-07-01",
  },
  {
    id: "blush-elegance",
    name: "Blush Elegance",
    price: 249,
    sizes: [
      { name: "Premium", price: 249 },
      { name: "Grand", price: 349 },
    ],
    category: "elegant",
    occasion: ["wedding", "anniversary", "birthday"],
    flowerTypes: ["Roses", "Peonies", "Hydrangea", "Ranunculus"],
    colors: ["pink", "blush", "cream"],
    colorLabel: "Blush & Cream",
    style: "romantic",
    description:
      "Our most luxurious arrangement — a lush cascade of blush roses, peonies, and hydrangea in the softest palette. Designed for moments that deserve something truly extraordinary.",
    careInstructions:
      "Mist hydrangea petals lightly. Trim stems and change water every 2 days. Expected vase life: 5–7 days.",
    availability: "available",
    tags: ["featured", "best-seller"],
    images: ["/images/bouquets/blush-elegance.jpg"],
    customisable: false,
    dateAdded: "2026-05-12",
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    price: 179,
    sizes: [
      { name: "Standard", price: 179 },
      { name: "Premium", price: 249 },
    ],
    category: "vibrant",
    occasion: ["birthday", "congratulations", "housewarming"],
    flowerTypes: ["Bird of Paradise", "Orchids", "Anthurium", "Tropical Leaves"],
    colors: ["orange", "purple", "green"],
    colorLabel: "Tropical Brights",
    style: "modern",
    description:
      "Bold, exotic, and unforgettable. This striking tropical arrangement features bird of paradise, vibrant orchids, and lush tropical foliage for a statement that turns heads.",
    careInstructions:
      "Tropical flowers love warmth. Keep in a warm room and mist occasionally. Expected vase life: 10–14 days.",
    availability: "available",
    tags: [],
    images: ["/images/bouquets/tropical-paradise.jpg"],
    customisable: true,
    dateAdded: "2026-04-20",
  },
  {
    id: "pastel-petite",
    name: "Pastel Petite",
    price: 89,
    sizes: [{ name: "Petite", price: 89 }],
    category: "pastel",
    occasion: ["just-because", "birthday", "thank-you"],
    flowerTypes: ["Mini Roses", "Carnations", "Wax Flower"],
    colors: ["pink", "lavender", "white"],
    colorLabel: "Soft Pastels",
    style: "classic",
    description:
      "A sweet, petite posy perfect for small gestures that mean a lot. Mini roses and delicate wax flower in a pretty pastel palette.",
    careInstructions:
      "Trim stems and place in fresh water. Change water every 2 days. Expected vase life: 5–7 days.",
    availability: "available",
    tags: ["popular"],
    images: ["/images/bouquets/pastel-petite.jpg"],
    customisable: false,
    dateAdded: "2026-03-15",
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    price: 169,
    sizes: [
      { name: "Standard", price: 169 },
      { name: "Premium", price: 239 },
    ],
    category: "vibrant",
    occasion: ["birthday", "congratulations", "graduation"],
    flowerTypes: ["Sunflowers", "Yellow Roses", "Solidago", "Craspedia"],
    colors: ["yellow", "gold"],
    colorLabel: "Sunny Gold",
    style: "rustic",
    description:
      "Capture the magic of golden hour with this radiant arrangement of sunflowers and golden roses. A guaranteed mood-lifter that brings sunshine indoors.",
    careInstructions:
      "Sunflowers are thirsty! Check water levels daily. Trim stems every 2 days. Expected vase life: 7–10 days.",
    availability: "available",
    tags: ["new"],
    images: ["/images/bouquets/golden-hour.jpg"],
    customisable: true,
    dateAdded: "2026-07-15",
  },
  {
    id: "midnight-bloom",
    name: "Midnight Bloom",
    price: 209,
    sizes: [
      { name: "Standard", price: 209 },
      { name: "Premium", price: 289 },
    ],
    category: "elegant",
    occasion: ["anniversary", "birthday", "romance"],
    flowerTypes: ["Deep Purple Roses", "Anemones", "Black Scabiosa", "Thistle"],
    colors: ["purple", "burgundy", "black"],
    colorLabel: "Dark & Moody",
    style: "modern",
    description:
      "For those who love the dramatic and the unusual. Deep purple roses, dark scabiosa, and textural thistle create a hauntingly beautiful, mood-rich arrangement.",
    careInstructions:
      "Trim stems at an angle. Keep in a cool place. Change water every 2 days. Expected vase life: 5–7 days.",
    availability: "seasonal",
    tags: ["featured"],
    images: ["/images/bouquets/midnight-bloom.jpg"],
    customisable: false,
    dateAdded: "2026-06-01",
  },
];

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
  { value: "pink", label: "Pink" },
  { value: "red", label: "Red" },
  { value: "white", label: "White" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
  { value: "orange", label: "Orange" },
  { value: "green", label: "Green" },
  { value: "lavender", label: "Lavender" },
  { value: "cream", label: "Cream" },
  { value: "blush", label: "Blush" },
  { value: "burgundy", label: "Burgundy" },
  { value: "gold", label: "Gold" },
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

const WHATSAPP_NUMBER = "60123456789"; // ← Client's number
const INSTAGRAM_URL = "https://instagram.com/yourbouquetbusiness"; // ← Client's IG

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
