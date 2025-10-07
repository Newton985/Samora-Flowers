'use client';

import { useState } from 'react';
import { Box, Typography, Stack, TextField, Button, Paper } from '@mui/material';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Paper
      sx={{
        position: 'relative',
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 6 },
        mt: 8,
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
        borderRadius: 0,
        overflow: 'hidden',
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          right: { xs: -20, md: 50 },
          fontSize: { xs: '4rem', md: '6rem' },
          opacity: 0.1,
          transform: 'rotate(45deg)',
          color: 'primary.main',
        }}
      >
        🌸
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: { xs: -30, md: 30 },
          fontSize: { xs: '3rem', md: '5rem' },
          opacity: 0.1,
          transform: 'rotate(-25deg)',
          color: 'secondary.main',
        }}
      >
        🌺
      </Box>

      <Stack spacing={4} alignItems="center" maxWidth="md" mx="auto">
        {/* Header */}
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography 
            variant="h5"
            color="text.primary"
            sx={{ 
              fontWeight: 500,
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }}
          >
            Our Newsletter
          </Typography>
          
          <Typography 
            variant="h3"
            component="h2"
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2rem' },
              textAlign: 'center',
              lineHeight: 1.2,
              maxWidth: 500
            }}
          >
            Subscribe to Our Newsletter to Get{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Updates on Our Latest Offers
            </Box>
          </Typography>
        </Stack>

        {/* Description */}
        <Typography 
          variant="body1" 
          color="text.secondary"
          textAlign="center"
          sx={{ 
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.75,
            maxWidth: 450
          }}
        >
          Get 20% off on your first order just by subscribing to our newsletter
        </Typography>

        {/* Newsletter Form */}
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 25,
                bgcolor: 'white',
                height: 66,
                fontSize: { xs: '1rem', md: '1.125rem' },
                '& fieldset': {
                  borderColor: 'divider',
                },
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />
          
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              py: 2.5,
              borderRadius: 25,
              fontWeight: 700,
              fontSize: '1.125rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}