"use client";
import React from 'react';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';

interface Metric {
  label: string;
  value: string;
  sub?: string;
}

const METRICS: Metric[] = [
  { value: '10K+', label: 'Happy Customers', sub: 'Served with care' },
  { value: '250+', label: 'Unique Bouquets', sub: 'Curated designs' },
  { value: '98%', label: 'Satisfaction Rate', sub: 'Feedback score' },
  { value: '24h', label: 'Support Response', sub: 'Average time' },
];

function MetricItem({ value, label, sub }: Metric) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h4" fontWeight={800} color="primary.main">{value}</Typography>
      <Typography fontWeight={600}>{label}</Typography>
      {sub && <Typography variant="body2" color="text.secondary">{sub}</Typography>}
    </Stack>
  );
}

export default function MetricsStrip() {
  return (
    <Box component="section" role="region" aria-label="Business performance metrics" sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{ p: { xs: 3, md: 5 }, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {METRICS.map((m) => (
            <Grid key={m.label} size={{ xs: 6, md: 3 }}>
              <MetricItem {...m} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
