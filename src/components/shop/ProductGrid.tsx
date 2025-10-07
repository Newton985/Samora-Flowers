"use client";
import React from "react";
import { Grid2 as Grid, Box, Typography } from "@mui/material";
import ProductCard from "../app/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <Box py={6} textAlign="center" aria-live="polite">
        <Typography variant="h6" fontWeight={600}>
          No products found
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Try adjusting your filters or search terms.
        </Typography>
      </Box>
    );
  }
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2, md: 2 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {products.map((p) => (
        <Grid key={p.id} size={{ xs: 1, sm: 4, md: 3 }}>
          <ProductCard
            name={p.name}
            description={p.description}
            price={`$${p.price.toFixed(2)}`}
            isNew={p.isNew}
            slug={p.slug}
          />
        </Grid>
      ))}
    </Grid>
  );
}
