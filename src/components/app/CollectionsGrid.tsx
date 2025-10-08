"use client";
import React from "react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
    key: "graduation",
    label: "Graduation",
    products: 12,
    icon: "/icons/graduation.svg",
  },
  {
    key: "christmas",
    label: "Christmas",
    products: 40,
    icon: "/icons/christmas.png",
  },
  {
    key: "thankyou",
    label: "Shop All",
    products: 31,
    icon: "/icons/flower.png",
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
      justifyContent={"center"}
      sx={{
        borderRadius: 0.5,
        width: "100%",
        height: "100%",
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
          width: 50,
          height: 50,
          borderRadius: "50%",
          bgcolor: "divider",
          display: "grid",
          placeItems: "center",
          fontWeight: 600,
          fontSize: 12,
          color: "text.secondary",
          mb: 0.5,
        }}
      >
        <Image src={icon} alt={label} width={30} height={30} />
      </Box>
      <Typography
        fontWeight={500}
        textAlign="center"
        fontSize={{ xs: 12, md: 14 }}
      >
        {label}
      </Typography>
    </Stack>
  );
}

export default function OccasionsGrid() {
  return (
    <Box component="section" role="region" aria-labelledby="occasions-heading">
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        width={"100%"}
        paddingY={2}
      >
        <Typography fontSize={{ xs: 20, md: 24 }} fontWeight={500}>
          Shop by Occasion
        </Typography>

        <Button
          LinkComponent={NextLink}
          href="/"
          sx={{ textTransform: "none", fontSize: { xs: 12, md: 14 } }}
          endIcon={<ArrowRightAltIcon />}
        >
          View All
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
          },
          gap: { xs: 0.5, md: 2 },
          px: 1,
          pb: 1,
        }}
      >
        {OCCASIONS.map((o) => (
          <Link
            component={NextLink}
            href={`/`}
            key={o.key}
            sx={{
              minHeight: { xs: 90, sm: 140, md: 160 },
              bgcolor: "background.default",
              pt: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <OccasionCard
                label={o.label}
                products={o.products}
                icon={o.icon}
              />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
