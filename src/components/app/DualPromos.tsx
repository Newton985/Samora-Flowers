"use client";
import React from 'react';
import { Box, Button, Grid2 as Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

interface PromoProps {
  variant: 'light' | 'dark';
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
}

function PromoCard({ variant, eyebrow, title, body, cta }: PromoProps) {
  const light = variant === 'light';
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        p: { xs: 4, md: 5 },
        minHeight: 340,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: light ? 'background.default' : 'primary.main',
        color: light ? 'text.primary' : 'primary.contrastText',
        border: '1px solid',
        borderColor: light ? 'divider' : 'transparent',
      }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ fontWeight: 600, letterSpacing: 1, opacity: 0.85 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h4" sx={{ fontSize: { xs: 32, md: 38 }, fontWeight: 600, lineHeight: 1.1 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 280 }}>
          {body}
        </Typography>
      </Stack>
      <Button
        variant={light ? 'contained' : 'contained'}
        color={light ? 'primary' : 'secondary'}
        sx={{ mt: 4, alignSelf: 'flex-start', borderRadius: 150, px: 3 }}
        LinkComponent={Link}
        href="/shop"
      >
        {cta}
      </Button>
      {/* Decorative gradient overlay */}
      <Box sx={{ position: 'absolute', inset: 0, background: light ? 'radial-gradient(circle at 80% 20%, rgba(94,0,165,0.08), transparent 60%)' : 'radial-gradient(circle at 80% 20%, rgba(255,144,231,0.25), transparent 60%)', pointerEvents: 'none' }} />
    </Box>
  );
}

export default function DualPromos() {
  return (
    <Box component="section" role="region" aria-label="Current promotional offers" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <PromoCard
            variant="light"
            eyebrow="Flat 20% Discount"
            title="Lovely Fresh Bouquets"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            cta="Shop Now"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PromoCard
            variant="dark"
            eyebrow="Flat 25% Discount"
            title="Pure Bloom Collection"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            cta="Shop Now"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
