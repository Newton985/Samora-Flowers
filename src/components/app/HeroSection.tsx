"use client";
import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import Link from "next/link";

/**
 * HeroSection
 * Figma mapping:
 *  - Heading sizes: desktop ~58px, mobile ~38px (mapped via h1 + responsiveFontSizes)
 *  - Subheading ~18-20px body text with 1.5 line-height
 *  - Pill chip banner (white bg) + primary/pink accent words
 *  - CTA buttons: primary filled (purple), secondary text underline or outlined
 */
export default function HeroSection() {
  return (
    <Box
      component="section"
      role="region"
      aria-labelledby="hero-heading"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background: (t) =>
          `linear-gradient(180deg, ${t.palette.background.default} 0%, rgba(255,255,255,0) 70%)`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Chip
                label={
                  <>
                    <strong>Your Trusted Online Flower Shop</strong>
                  </>
                }
                sx={{
                  alignSelf: "flex-start",
                  bgcolor: "common.white",
                  borderRadius: 150,
                  px: 2,
                  fontSize: 14,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                }}
              />
              <Typography
                id="hero-heading"
                component="h1"
                variant="h1"
                sx={{
                  fontSize: { xs: 38, md: 58 },
                  fontWeight: 600,
                  lineHeight: 1.05,
                }}
              >
                The Ultimate{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Flower Shopping Destination
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: 16, md: 18 },
                  maxWidth: 560,
                  opacity: 0.8,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                  LinkComponent={Link}
                  href="/shop"
                >
                  Shop Now
                </Button>
                <Button
                  variant="text"
                  size="large"
                  sx={{ textDecoration: "underline", fontWeight: 600 }}
                >
                  View All Products
                </Button>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ pt: 1 }}
              >
                {/* Rating cluster placeholder */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      bgcolor: "secondary.main",
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    4.9+
                  </Box>
                  <Box>
                    <Typography fontWeight={600}>4.9+ Ratings</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.7 }}>
                      Trusted by 95k+ Customers
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Placeholder for hero imagery cluster; swap with decorative assets */}
            <Box
              role="img"
              aria-label="Decorative hero imagery placeholder"
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: 2,
                bgcolor: "background.paper",
                display: "grid",
                placeItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/hero_img_1.png"
                alt="Decorative hero imagery"
                width={400}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(255,144,231,0.25), transparent 60%)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
