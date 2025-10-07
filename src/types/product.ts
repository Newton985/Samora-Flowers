export type PriceCurrency = 'USD' | 'EUR' | 'GBP' | 'KES';

export interface ProductSize {
  id: string;
  name: string;
  priceAdjustment: number;
  icon: string;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string; // e.g. "bouquets", "gifts", etc.
  occasion?: string; // optional mapping (birthday, anniversary)
  price: number;
  currency: PriceCurrency;
  originalPrice?: number; // if discounted
  rating?: number; // 0-5
  ratingCount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  image: string; // main image URL
  images?: string[]; // gallery
  tags?: string[];
  available?: boolean;
  createdAt: string; // ISO
  updatedAt: string; // ISO
  // Additional fields for product details page
  sizes?: ProductSize[];
  colors?: ProductColor[];
  sku?: string;
  shareUrls?: {
    facebook: string;
    twitter: string;
    instagram: string;
    pinterest: string;
  };
}

export interface ProductQuery {
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  occasion?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'price-asc' | 'price-desc' | 'newest' | 'rating' | 'name-asc' | 'name-desc';
  tag?: string;
}

export interface ProductResult {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const DEFAULT_PAGE_SIZE = 12;
