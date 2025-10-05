import { Product, ProductQuery } from "@/types/product";
import { flowers } from "../../../dummy/flowers";

// Simple in-memory mock dataset (deterministic on first load)
const categories = ["bouquets", "gifts", "plants"] as const;
const occasions = [
  "birthday",
  "anniversary",
  "wedding",
  "get-well",
  "valentine",
] as const;

function buildMockProducts(): Product[] {
  const list: Product[] = [];
  for (let i = 0; i < 80; i++) {
    const name = `Floral Arrangement ${i + 1}`;
    const base = 15 + (i % 12) * 3 + (i % 5);
    const price = parseFloat((base + (i % 7) * 2).toFixed(2));
    const originalPrice = i % 4 === 0 ? price + 8 : undefined;
    const cat = categories[i % categories.length];
    const occasion = occasions[i % occasions.length];
    const image = flowers[i % flowers.length];
    list.push({
      id: `prod-${i + 1}`,
      slug: `floral-arrangement-${i + 1}`,
      name,
      description: "A beautifully curated selection of fresh seasonal blooms.",
      category: cat,
      occasion,
      price,
      originalPrice,
      currency: "USD",
      rating: 3 + (i % 3) + Math.random() * 1.2,
      ratingCount: 10 + (i % 20),
      isNew: i > 60,
      isFeatured: i % 10 === 0,
      image,
      images: [image],
      tags: [cat, occasion],
      available: i % 13 !== 0,
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
      updatedAt: new Date(Date.now() - i * 43200000).toISOString(),
    });
  }
  return list;
}

export const MOCK_PRODUCTS: Product[] = buildMockProducts();

export function applyFilters(all: Product[], q: ProductQuery): Product[] {
  return all.filter((p) => {
    if (q.search) {
      const s = q.search.toLowerCase();
      if (
        !p.name.toLowerCase().includes(s) &&
        !p.description.toLowerCase().includes(s)
      )
        return false;
    }
    if (q.category && p.category !== q.category) return false;
    if (q.occasion && p.occasion !== q.occasion) return false;
    if (q.minPrice != null && p.price < q.minPrice) return false;
    if (q.maxPrice != null && p.price > q.maxPrice) return false;
    if (q.tag && !p.tags?.includes(q.tag)) return false;
    return true;
  });
}

export function applySort(list: Product[], sort?: ProductQuery["sort"]): Product[] {
  if (!sort) return list;
  const arr = [...list];
  switch (sort) {
    case "price-asc":
      arr.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      arr.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      arr.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      break;
    case "rating":
      arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case "name-asc":
      arr.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      arr.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
  return arr;
}

export const productFacetOptions = {
  categories: Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category))).sort(),
  occasions: Array.from(
    new Set(MOCK_PRODUCTS.map((p) => p.occasion).filter(Boolean))
  ) as string[],
  price: {
    min: 0,
    max: Math.ceil(Math.max(...MOCK_PRODUCTS.map((p) => p.price))),
  },
  tags: Array.from(new Set(MOCK_PRODUCTS.flatMap((p) => p.tags || []))).sort(),
};
