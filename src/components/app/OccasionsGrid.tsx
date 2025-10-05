"use client";
import React from "react";
import { Box, Button, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Occasion {
  key: string;
  label: string;
  icon: string;
  products?: number;
}

const OCCASIONS: Occasion[] = [
  {
    key: "birthday",
    label: "Birthday",
    products: 56,
    icon: "/icons/birthday.svg",
  },
  {
    key: "wedding",
    label: "Weddings",
    products: 42,
    icon: "/icons/wedding.svg",
  },
  {
    key: "anniversary",
    label: "Anniversary",
    products: 25,
    icon: "/icons/anniversary.svg",
  },
  {
    key: "thankyou",
    label: "Thank You",
    products: 31,
    icon: "/icons/thankyou.svg",
  },
  {
    key: "empathy",
    label: "Empathy",
    products: 18,
    icon: "/icons/empathy.svg",
  },
  {
    key: "graduation",
    label: "Graduation",
    products: 12,
    icon: "/icons/graduation.svg",
  },
];

function OccasionCard({
  label,
  products,
  icon,
}: {
  label: string;
  products?: number;
  icon: string;
}) {
  return (
    <Stack
      spacing={1.2}
      alignItems="center"
      sx={{
        p: 2,
        borderRadius: 2,
        width: "100%",
        position: "relative",
        transition:
          "box-shadow .25s ease, transform .25s ease, border-color .25s ease",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
          transform: "translateY(-4px)",
          borderColor: "primary.main",
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          bgcolor: "divider",
          display: "grid",
          placeItems: "center",
          fontWeight: 600,
          fontSize: 14,
          color: "text.secondary",
          mb: 0.5,
        }}
      >
        <Image src={icon} alt={label} width={60} height={60} />
      </Box>
      <Typography fontWeight={600} textAlign="center">
        {label}
      </Typography>
      {!!products && (
        <Typography variant="caption" sx={{ opacity: 0.6 }}>
          {products} Products
        </Typography>
      )}
    </Stack>
  );
}

export default function OccasionsGrid() {
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby="occasions-heading"
      sx={{ py: { xs: 8, md: 10 } }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            Occasions
          </Typography>
          <Typography
            id="occasions-heading"
            component="h2"
            variant="h3"
            sx={{
              fontSize: { xs: 32, md: 48 },
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Shop By{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Occasions
            </Box>
          </Typography>
        </Box>
        <Button variant="text" size="large" sx={{ fontWeight: 600 }}>
          View All
        </Button>
      </Stack>
      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
        {OCCASIONS.map((o) => (
          <Grid key={o.key} size={{ xs: 6, sm: 4, md: 2 }}>
            <OccasionCard label={o.label} products={o.products} icon={o.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
