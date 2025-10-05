"use client";
import React from 'react';
import { Box, Button, Grid2 as Grid, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function PromoBanner({
  title = 'Limited Time: Spring Sale',
  subtitle = 'Save up to 40% on selected collections. Make someone’s day brighter with flowers.',
  primaryCtaLabel = 'Shop Deals',
  secondaryCtaLabel = 'Learn More',
  onPrimaryClick,
  onSecondaryClick,
}: PromoBannerProps) {
  return (
    <Box component="section" role="region" aria-labelledby="promo-banner-heading" sx={{ py: { xs: 7, md: 10 } }}>
      <Box
        sx={{
          p: { xs: 3, md: 6 },
            borderRadius: 3,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            overflow: 'hidden',
            position: 'relative',
        }}
      >
        {/* Decorative radial accent */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 85% 20%, rgba(255,144,231,0.35), transparent 60%)', pointerEvents: 'none', mixBlendMode: 'overlay' }} />
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography id="promo-banner-heading" component="h2" variant="h3" fontWeight={800}>{title}</Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mt: 1.5, maxWidth: 700 }}>
              {subtitle}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="secondary" endIcon={<ArrowForwardRoundedIcon />} sx={{ borderRadius: 999, px: 3 }} onClick={onPrimaryClick}>
                {primaryCtaLabel}
              </Button>
              <Button variant="outlined" color="inherit" sx={{ borderRadius: 999, px: 3 }} onClick={onSecondaryClick}>{secondaryCtaLabel}</Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box role="img" aria-label="Promotional illustrative image placeholder"
              sx={{
                aspectRatio: '4/3',
                width: '100%',
                bgcolor: 'grey.200',
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                border: '1px dashed',
                borderColor: 'grey.300',
                color: 'grey.600',
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Promo Image
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
