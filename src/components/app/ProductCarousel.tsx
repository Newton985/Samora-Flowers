"use client";
import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ProductCard, { ProductCardProps } from "./ProductCard";

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products?: ProductCardProps[];
  actionsSlot?: React.ReactNode;
}

export default function ProductCarousel({
  title,
  subtitle,
  products = [],
  actionsSlot,
}: ProductCarouselProps) {
  // Basic horizontally scrollable container for now; can be upgraded to embla/swiper later
  const list = products.length
    ? products
    : Array.from({ length: 8 }).map((_, i) => ({ name: `Bouquet ${i + 1}` }));

  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: 1 | -1) => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const headingId = `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}-heading`;
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby={headingId}
      sx={{ py: { xs: 7, md: 10 } }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            id={headingId}
            component="h2"
            variant="h4"
            fontWeight={800}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          {actionsSlot}
          <IconButton
            aria-label="scroll left"
            onClick={() => scrollBy(-1)}
            size="small"
            sx={{ border: "1px solid", borderColor: "divider" }}
          >
            <ChevronLeftRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="scroll right"
            onClick={() => scrollBy(1)}
            size="small"
            sx={{ border: "1px solid", borderColor: "divider" }}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        ref={scrollRef}
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: { xs: "85%", sm: "45%", md: "24%" },
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          pb: 1,
          "& > *": { scrollSnapAlign: "start" },
          "&::-webkit-scrollbar": { display: "none" },
          MsOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {list.map((p, i) => (
          <Box key={i} sx={{ minWidth: 0 }}>
            <ProductCard {...p} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
