"use client";
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ProductQuery } from '@/types/product';
import { defaultFilters, FiltersState } from '@/components/shop/FiltersPanel';

function parseParams(sp: URLSearchParams): ProductQuery {
  const get = (k: string) => sp.get(k) || undefined;
  const num = (k: string) => { const v = sp.get(k); return v ? parseInt(v,10): undefined; };
  return {
    page: num('page') || 1,
    pageSize: num('pageSize'),
    sort: get('sort') as ProductQuery['sort'] | undefined,
    category: get('category') || undefined,
    occasion: get('occasion') || undefined,
    search: get('search') || undefined,
    minPrice: num('minPrice'),
    maxPrice: num('maxPrice'),
    tag: get('tag') || undefined,
  };
}

function filtersToQuery(filters: FiltersState, prev: ProductQuery): Partial<ProductQuery> {
  return {
    ...prev,
    category: filters.categories[0], // single-select mapping for now
    occasion: filters.occasions[0],
    minPrice: filters.price[0],
    maxPrice: filters.price[1],
    tag: filters.tags[0],
    page: 1, // reset page when filters change
  };
}

export function useProductSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = React.useTransition();

  const query = React.useMemo(() => parseParams(searchParams), [searchParams]);

  const toFilters = React.useCallback((): FiltersState => ({
    ...defaultFilters,
    categories: query.category ? [query.category] : [],
    occasions: query.occasion ? [query.occasion] : [],
    price: [query.minPrice ?? defaultFilters.price[0], query.maxPrice ?? defaultFilters.price[1]],
    tags: query.tag ? [query.tag] : [],
  }), [query]);

  const update = (partial: Partial<ProductQuery>) => {
    const sp = new URLSearchParams(searchParams.toString());
    Object.entries(partial).forEach(([k,v]) => {
      if (v === undefined || v === '' || v === null) sp.delete(k); else sp.set(k, String(v));
    });
    startTransition(()=> {
      router.replace(`${pathname}?${sp.toString()}`);
    });
  };

  const setPage = (page: number) => update({ page });
  const setSort = (sort: ProductQuery['sort']) => update({ sort });
  const setFilters = (filters: FiltersState) => {
    const q = filtersToQuery(filters, query);
    update(q);
  };

  return {
    query,
    filters: toFilters(),
    setFilters,
    setSort,
    setPage,
    pending,
  };
}
