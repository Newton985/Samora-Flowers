"use server"; // Mark only this function as a Server Action
import {
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

