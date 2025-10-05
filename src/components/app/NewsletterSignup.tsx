"use client";
import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

interface NewsletterSignupProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (email: string) => void;
}

export default function NewsletterSignup({
  title = 'Join our newsletter',
  subtitle = 'Be the first to know about new collections and exclusive offers.',
  onSubmit,
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };
  return (
  <Box component="section" role="form" aria-labelledby="newsletter-heading" sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ p: { xs: 3, md: 6 }, borderRadius: 3, bgcolor: 'secondary.light' }}>
        <form onSubmit={handleSubmit} noValidate>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Stack spacing={1} flex={1}>
              <Typography id="newsletter-heading" component="h2" variant="h4" fontWeight={800}>{title}</Typography>
              <Typography variant="body1" color="text.secondary">{subtitle}</Typography>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} flex={1} width="100%" maxWidth={560}>
              <TextField
                fullWidth
                type="email"
                aria-label="Email address"
                placeholder="Your email address"
                size="medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" size="large" sx={{ borderRadius: 999, px: 3, flexShrink: 0 }}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
