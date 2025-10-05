"use client";
import React from 'react';
import { Box, Grid2 as Grid, IconButton, Stack, Typography } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

interface InstaItem { id: number; alt: string; }

const ITEMS: InstaItem[] = Array.from({ length: 6 }).map((_, i) => ({ id: i + 1, alt: `Instagram image ${i + 1}` }));

function InstagramTile({ alt }: InstaItem) {
  return (
    <Box
      role="img"
      aria-label={alt}
      sx={{
        aspectRatio: '1/1',
        width: '100%',
        position: 'relative',
        bgcolor: 'grey.200',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        color: 'grey.600',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'transform .3s ease',
        '&:hover': { transform: 'scale(1.02)' },
        '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main' }
      }}
      tabIndex={0}
    >
      Img
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.45))', opacity: 0, transition: 'opacity .3s ease', display: 'flex', alignItems: 'flex-end', p: 1.5, color: 'white', '&:hover': { opacity: 1 } }}>
        <IconButton size="small" sx={{ ml: 'auto', bgcolor: 'rgba(255,255,255,0.15)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' } }} aria-label="Open Instagram post">
          <OpenInNewRoundedIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function InstagramGallery() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={800}>Follow us on Instagram</Typography>
        <Typography variant="body1" color="text.secondary">Daily blooms & behind-the-scenes</Typography>
      </Stack>
      <Grid container spacing={2}>
        {ITEMS.map(item => (
          <Grid key={item.id} size={{ xs: 6, sm: 4, md: 2 }}>
            <InstagramTile {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
