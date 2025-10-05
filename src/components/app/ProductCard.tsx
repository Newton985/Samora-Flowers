"use client";
import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { flowers } from "../../../dummy/flowers";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

// Select a random flower image (stable per render if passed via ref) - simple approach
function randomFlower() {
  return flowers[Math.floor(Math.random() * flowers.length)];
}

export interface ProductCardProps {
  name?: string;
  description?: string;
  price?: string;
  isNew?: boolean;
}

export default function ProductCard({
  name = "Bouquet Name",
  description = "Fresh and fragrant seasonal flowers",
  price = "$39.00",
  isNew = true,
}: ProductCardProps) {
  const imageRef = React.useRef<string>(randomFlower());
  return (
    <Stack
      spacing={1.2}
      sx={{
        p: 0.5,
        borderRadius: 1,
        bgcolor: "background.default",
        transition:
          "box-shadow .2s ease, transform .2s ease, border-color .2s ease",
        "&:hover": {
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          transform: "translateY(-2px)",
        },
        "&:hover .product-img": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box position="relative">
        <Image
          src={imageRef.current}
          alt={name}
          height={300}
          width={300}
          style={{ objectFit: "cover", width: "100%", borderRadius: 10 }}
          sizes="(max-width: 600px) 50vw, (max-width: 1200px) 25vw, 20vw"
          priority={false}
        />

        <Stack
          direction="row"
          spacing={1}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          {isNew && (
            <Chip
              size="small"
              label="New"
              color="secondary"
              sx={{ fontWeight: 700, borderRadius: 999 }}
            />
          )}
        </Stack>
      </Box>
      <Typography fontWeight={600} fontSize={14}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 0.5, px: 1 }}
      >
        <Typography fontWeight={700} color="primary.main">
          {price}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="contained"
            startIcon={<ShoppingBagOutlinedIcon />}
            style={{
              paddingBlock: 2,
              fontWeight: 600,
              fontSize: 16,
              paddingInline: 10,
            }}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
