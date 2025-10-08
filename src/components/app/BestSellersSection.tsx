"use client";
import React from "react";
import { Box, Chip, Grid2 as Grid, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const FILTERS = ["All", "Roses", "Tulips", "Mixed", "Lilies"];

export default function BestSellersSection() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby="best-sellers-heading"
      sx={{ py: { xs: 3, md: 5 } }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ mb: 3 }}
        spacing={2}
      >
        <Box>
          <Typography
            id="best-sellers-heading"
            component="h2"
            variant="h6"
            fontWeight={800}
          >
            Featured
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Favorites our customers love
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {FILTERS.map((f) => {
            const active = activeFilter === f;
            return (
              <Chip
                key={f}
                label={f}
                onClick={() => setActiveFilter(f)}
                clickable
                color={active ? "primary" : undefined}
                variant={active ? "filled" : "outlined"}
                sx={{ borderRadius: 999 }}
              />
            );
          })}
        </Stack>
      </Stack>
      <Grid container spacing={{ xs: 0.5, sm: 1, md: 2 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductCard slug={`floral-arrangement-${i + 1}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
