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
        py: { xs: 2, md: 3 },
        background: (t) =>
          `linear-gradient(180deg, ${t.palette.background.default} 0%, rgba(255,255,255,0) 70%)`,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3} alignItems="center">
          <Chip
            label={
              <>
                <strong>Samora Flowers</strong>
              </>
            }
            sx={{
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
              fontSize: { xs: 28, md: 38 },
              fontWeight: 600,
              lineHeight: 1.05,
              textAlign: "center",
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              Wholesale Flower Collection
            </Box>
          </Typography>

        </Stack>
      </Container>
    </Box>
  );
}
