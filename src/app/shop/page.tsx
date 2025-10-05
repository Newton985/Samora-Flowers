import { fetchProducts } from "@/backend/actions/products";
import { ProductQuery } from "@/types/product";
import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { SortBar } from "@/components/shop/SortBar";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ProductGridSkeleton } from "@/components/shop/ProductGridSkeleton"; // (server fallback only now)
import { FiltersPanel, defaultFilters } from "@/components/shop/FiltersPanel";
import { PaginationBar } from "@/components/shop/PaginationBar";
import { ClientShopControls } from "@/components/shop/ClientShopControls";
import TopContactBar from "@/components/ui/TopContactBar";
import StoreAppBar from "@/components/ui/AppBar";
import Footer from "@/components/ui/Footer";
import React from "react";

// ClientShopControls moved to dedicated client component file for proper boundary.

// NOTE: This page is a Server Component. Interactive filter controls are managed client-side
// via a future hook (added separately) that syncs with search params.

function parseQuery(searchParams: {
  [key: string]: string | string[] | undefined;
}): ProductQuery {
  const get = (k: string) => searchParams[k];
  const num = (v: string | string[] | undefined) =>
    typeof v === "string" ? parseInt(v, 10) : undefined;
  const page = num(get("page")) || 1;
  const pageSize = num(get("pageSize"));
  const sort = (get("sort") as ProductQuery["sort"]) || undefined;
  const category = (get("category") as string) || undefined;
  const occasion = (get("occasion") as string) || undefined;
  const search = (get("search") as string) || undefined;
  const minPrice = num(get("minPrice"));
  const maxPrice = num(get("maxPrice"));
  const tag = (get("tag") as string) || undefined;
  return {
    page,
    pageSize,
    sort,
    category,
    occasion,
    search,
    minPrice,
    maxPrice,
    tag,
  };
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: any
}) {
  const query = parseQuery(searchParams);
  const data = await fetchProducts(query);

  return (
    <main>
      <TopContactBar />
      <StoreAppBar />
      <Box paddingX={{ xs: 0, md: 2, lg: 4 }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Typography component="h1" variant="h3" fontWeight={700} mb={2}>
            Shop
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={4}
            maxWidth={680}
          >
            Browse our curated collection of fresh floral arrangements and
            gifts. Use filters to refine by category, occasion, price, and more.
          </Typography>
          {/* Server-rendered fallback markup for initial SEO (non-interactive) */}
          <noscript>
            <Grid container spacing={6} columns={{ xs: 1, md: 12 }}>
              <Grid size={{ xs: 1, md: 3 }}>
                <FiltersPanel
                  value={defaultFilters}
                  onChange={() => {}}
                  disabled
                />
              </Grid>
              <Grid size={{ xs: 1, md: 9 }}>
                <SortBar
                  total={data.total}
                  sort={query.sort}
                  onChange={() => {}}
                  disabled
                />
                <Divider style={{ marginBottom: 16 }} />
                <ProductGrid products={data.items} />
                <PaginationBar
                  page={data.page}
                  totalPages={data.totalPages}
                  onChange={() => {}}
                  disabled
                />
              </Grid>
            </Grid>
          </noscript>
          <ClientShopControls
            initial={{
              query,
              total: data.total,
              page: data.page,
              totalPages: data.totalPages,
              items: data.items,
            }}
          />
        </Container>
      </Box>
      <Footer />
    </main>
  );
}
