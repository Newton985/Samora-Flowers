"use client";
import React from 'react';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  initial?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Verified Buyer',
    quote: 'The bouquet arrived on time and looked even better than the photos. The fragrance filled the room!',
  },
  {
    id: 2,
    name: 'Maria Lopez',
    role: 'Repeat Customer',
    quote: 'Fresh, vibrant, and beautifully arranged. My go-to place for gifting now.',
  },
  {
    id: 3,
    name: 'Daniel Wu',
    role: 'First-time Buyer',
    quote: 'Great experience and fast delivery. The flowers lasted over a week!',
  },
];

function TestimonialCard({ name, role, quote }: Testimonial) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <Stack spacing={2} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', height: '100%', transition: 'box-shadow .2s ease, transform .2s ease', '&:hover': { boxShadow: '0 10px 24px rgba(0,0,0,0.06)', transform: 'translateY(-2px)' } }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: 'grey.300', display: 'grid', placeItems: 'center', fontWeight: 700, color: 'grey.700' }}>
          {initial}
        </Box>
        <Box>
          <Typography fontWeight={700}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">{role}</Typography>
        </Box>
      </Stack>
      <Typography>{quote}</Typography>
    </Stack>
  );
}

export default function TestimonialsSection() {
  return (
    <Box component="section" role="region" aria-labelledby="testimonials-heading" sx={{ py: { xs: 7, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography id="testimonials-heading" component="h2" variant="h4" fontWeight={800}>What Customers Say</Typography>
        <Typography variant="body1" color="text.secondary">Real stories from happy recipients</Typography>
      </Stack>
      <Grid container spacing={2}>
        {TESTIMONIALS.map(t => (
          <Grid key={t.id} size={{ xs: 12, md: 4 }}>
            <TestimonialCard {...t} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
