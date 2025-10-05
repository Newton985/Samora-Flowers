"use client";
import React from 'react';
import { Grid2 as Grid, Box, Divider, Button, Drawer, Stack, Badge } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FiltersPanel, defaultFilters } from './FiltersPanel';
import { SortBar } from './SortBar';
import { ProductGrid } from './ProductGrid';
import { ProductGridSkeleton } from './ProductGridSkeleton';
import { PaginationBar } from './PaginationBar';
import { ProductQuery } from '@/types/product';
import { useProductSearch } from '@/hooks/useProductSearch';

interface ClientShopControlsProps {
  initial: {
    query: ProductQuery;
    total: number;
    page: number;
    totalPages: number;
    items: any[];
  };
}

export function ClientShopControls({ initial }: ClientShopControlsProps) {
  const { filters, setFilters, setSort, setPage, pending, query } = useProductSearch();
  const [data, setData] = React.useState<{ items: any[]; total: number; page: number; totalPages: number; loading: boolean }>({
    items: initial.items,
    total: initial.total,
    page: initial.page,
    totalPages: initial.totalPages,
    loading: false,
  });

  const firstRunRef = React.useRef(true);

  React.useEffect(() => {
    // Skip fetch on first run because we already have initial SSR data if query matches
    if (firstRunRef.current) { firstRunRef.current = false; return; }
    let cancelled = false;
    (async () => {
      setData(d => ({ ...d, loading: true }));
      const params = new URLSearchParams();
      Object.entries(query).forEach(([k,v]) => { if (v != null) params.set(k, String(v)); });
      const res = await fetch(`/api/products?${params.toString()}`, { cache: 'no-store' })
        .then(r=> r.ok? r.json(): null)
        .catch(()=> null);
      if (!cancelled && res) setData({ ...res, loading: false });
      if (!cancelled && !res) setData(d => ({ ...d, loading: false }));
    })();
    return () => { cancelled = true; };
  }, [query]);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(false);
  const activeFilterCount = React.useMemo(() => {
    let count = 0;
    if (filters.categories.length) count++;
    if (filters.occasions.length) count++;
    const defaultPrice = filters.price[0] === defaultFilters.price[0] && filters.price[1] === defaultFilters.price[1];
    if (!defaultPrice) count++;
    if (filters.tags.length) count++;
    return count;
  }, [filters]);

  const filtersContent = (
    <Box sx={{ width: { xs: '100%', sm: 340 }, p: 2 }} role="dialog" aria-label="Product Filters">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1, display: { md: 'none' } }}>
        <Box component="span" style={{ fontWeight: 600 }}>Filters</Box>
        <Button startIcon={<CloseRoundedIcon />} size="small" onClick={()=> setOpen(false)}>Close</Button>
      </Stack>
      <FiltersPanel value={filters} onChange={setFilters} disabled={pending} />
    </Box>
  );

  return (
    <>
      <Grid container spacing={6} columns={{ xs: 1, md: 12 }}>
        {isMdUp && (
          <Grid size={{ xs: 1, md: 3 }}>
            <FiltersPanel value={filters} onChange={setFilters} disabled={pending} />
          </Grid>
        )}
        <Grid size={{ xs: 1, md: 9 }}>
          <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
              {!isMdUp && (
                <Badge color="secondary" badgeContent={activeFilterCount || 0} invisible={!activeFilterCount} sx={{ mr: 1 }}>
                  <Button variant="outlined" size="small" startIcon={<FilterListRoundedIcon />} onClick={()=> setOpen(true)}>
                    Filters
                  </Button>
                </Badge>
              )}
              <Box flexGrow={1} />
              <SortBar total={data.total} sort={query.sort} onChange={setSort} disabled={pending} />
            </Stack>
            <Divider sx={{ mb: 2 }} />
            {data.loading ? <ProductGridSkeleton /> : <ProductGrid products={data.items} />}
            <PaginationBar page={data.page} totalPages={data.totalPages} onChange={setPage} disabled={pending} />
          </Box>
        </Grid>
      </Grid>
      <Drawer anchor="left" open={open} onClose={()=> setOpen(false)} ModalProps={{ keepMounted: true }} sx={{ display: { md: 'none' } }}>
        {filtersContent}
      </Drawer>
    </>
  );
}
