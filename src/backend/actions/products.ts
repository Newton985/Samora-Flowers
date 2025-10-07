"use server"; // Mark only this function as a Server Action
import {
  Product,
  ProductQuery,
  ProductResult,
  DEFAULT_PAGE_SIZE,
} from "@/types/product";
import { applyFilters, applySort, MOCK_PRODUCTS } from "./product-utils";

export async function fetchProducts(
  query: ProductQuery = {}
): Promise<ProductResult> {
  await new Promise((r) => setTimeout(r, 120));
  const page = query.page && query.page > 0 ? query.page : 1;
  const pageSize =
    query.pageSize && query.pageSize > 0
      ? Math.min(query.pageSize, 48)
      : DEFAULT_PAGE_SIZE;
  const filtered = applyFilters(MOCK_PRODUCTS, query);
  const sorted = applySort(filtered, query.sort);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  const items = sorted.slice(start, start + pageSize);
  return { items, total, page, pageSize, totalPages };
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((r) => setTimeout(r, 100));
  
  const product = MOCK_PRODUCTS.find(p => p.slug === slug);
  if (!product) return null;
  
  // Enhance product data for details page with additional images and sizes
  return {
    ...product,
    images: [
      product.image,
      product.image, // Mock additional images - in real app these would be different
      product.image,
      product.image
    ],
    // Add size options for the product
    sizes: [
      { 
        id: 'standard', 
        name: 'Standard', 
        priceAdjustment: 0,
        icon: '🌸'
      },
      { 
        id: 'deluxe', 
        name: 'Deluxe', 
        priceAdjustment: 15,
        icon: '🌺'
      },
      { 
        id: 'premium', 
        name: 'Premium', 
        priceAdjustment: 45,
        icon: '🌻'
      }
    ],
    // Add color options
    colors: [
      { id: 'blue', name: 'Blue', hex: '#3B82F6' },
      { id: 'pink', name: 'Pink', hex: '#EC4899' }
    ],
    // Additional product details
    sku: `FLWR${(product.id.match(/\d+/) || ['1'])[0].padStart(5, '0')}ABC`,
    shareUrls: {
      facebook: '#',
      twitter: '#', 
      instagram: '#',
      pinterest: '#'
    }
  };
}

