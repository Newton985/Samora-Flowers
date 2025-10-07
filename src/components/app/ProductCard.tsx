"use client";
import React, { useState } from "react";
import { Box, Button, Chip, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import { flowers } from "../../../dummy/flowers";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/shoppingBagOutlined";
import AddToCartDialog from "./AddToCartDialog";

// Select a random flower image (stable per render if passed via ref) - simple approach
function randomFlower() {
  return flowers[Math.floor(Math.random() * flowers.length)];
}

export interface ProductCardProps {
  name?: string;
  description?: string;
  price?: string;
  isNew?: boolean;
  slug?: string;
}

export default function ProductCard({
  name = "Bouquet Name",
  description = "Fresh and fragrant seasonal flowers",
  price = "$39.00",
  isNew = true,
  slug = "sample-slug",
}: ProductCardProps) {
  const imageRef = React.useRef<string>(randomFlower());
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Stack
      spacing={1.2}
      sx={{
        p: 0.5,
        borderRadius: 1,
        bgcolor: "background.default",
        cursor: "pointer",
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
      <Link
        component={Link}
        href={`/shop/${slug}`}
        underline="none"
        color="inherit"
      >
        <Box position="relative">
          <Image
            className="product-img"
            src={imageRef.current}
            alt={name}
            height={300}
            width={300}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              aspectRatio: "0.8 / 0.999", // Makes images shorter (4:3 aspect ratio)
              borderRadius: 10,
              transition: "transform .2s ease",
            }}
            sizes="(max-width: 600px) 50vw, (max-width: 1200px) 25vw, 20vv"
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
      </Link>

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
            onClick={handleAddToCart}
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

      <AddToCartDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        productName={name}
        productImage={imageRef.current}
      />
    </Stack>
  );
}
