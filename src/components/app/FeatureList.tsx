"use client";
import React from 'react';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

interface FeatureItemData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function FeatureItem({ icon, title, subtitle }: FeatureItemData) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          bgcolor: 'secondary.light',
          display: 'grid',
          placeItems: 'center',
          color: 'primary.main',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
    </Stack>
  );
}

const FEATURES: FeatureItemData[] = [
  { icon: <LocalShippingRoundedIcon />, title: 'Free Delivery', subtitle: 'On orders over $50' },
  { icon: <SpaRoundedIcon />, title: 'Fresh Flowers', subtitle: 'Sourced daily' },
  { icon: <SupportAgentRoundedIcon />, title: '24/7 Support', subtitle: 'We\u2019re here to help' },
  { icon: <LockRoundedIcon />, title: 'Secure Payments', subtitle: 'Trusted checkout' },
];

export default function FeatureList() {
  return (
    <Box component="section" role="region" aria-label="Key service features" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={2}>
          {FEATURES.map((f) => (
            <Grid key={f.title} size={{ xs: 12, md: 3 }}>
              <FeatureItem {...f} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
