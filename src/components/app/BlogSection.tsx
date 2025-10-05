"use client";
import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageAlt?: string;
}

const POSTS: BlogPost[] = [
  { id: 1, title: 'Caring For Fresh Cut Flowers', excerpt: 'Simple tips to extend vase life and keep blooms vibrant.', imageAlt: 'Cut flowers in a vase' },
  { id: 2, title: 'Seasonal Spring Bouquet Trends', excerpt: 'Colors and shapes that dominate this spring’s arrangements.', imageAlt: 'Colorful spring bouquet' },
  { id: 3, title: 'Gifting Guide: Saying More With Petals', excerpt: 'Match the right bouquet to every occasion & sentiment.', imageAlt: 'Bouquet presented as a gift' },
];

function BlogCard({ title, excerpt, imageAlt }: BlogPost) {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 1.5,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow .25s ease, transform .25s ease',
        '&:hover': { boxShadow: '0 12px 32px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' },
      }}
    >
      <CardActionArea sx={{ height: '100%', alignItems: 'stretch', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          role="img"
          aria-label={imageAlt}
          sx={{
            aspectRatio: '16/10',
            width: '100%',
            bgcolor: 'grey.200',
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'grid',
            placeItems: 'center',
            fontWeight: 600,
            color: 'grey.600',
            fontSize: 14,
          }}
        >
          Image
        </CardMedia>
        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Stack spacing={1.2}>
            <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.2 }}>{title}</Typography>
            <Typography variant="body2" color="text.secondary">{excerpt}</Typography>
            <Link component="button" type="button" underline="hover" sx={{ mt: 0.5, fontWeight: 600, alignSelf: 'flex-start' }}>
              Read more →
            </Link>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function BlogSection() {
  return (
    <Box component="section" role="region" aria-labelledby="blog-heading" sx={{ py: { xs: 7, md: 10 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ mb: 4 }}>
        <Box>
          <Typography id="blog-heading" component="h2" variant="h4" fontWeight={800}>From our Blog</Typography>
          <Typography variant="body1" color="text.secondary">Tips & stories to elevate your floral moments</Typography>
        </Box>
        <Button variant="text" endIcon={<ArrowForwardRoundedIcon />} sx={{ borderRadius: 999 }}>View All</Button>
      </Stack>
      <Grid container spacing={3}>
        {POSTS.map(p => (
          <Grid key={p.id} size={{ xs: 12, md: 4 }}>
            <BlogCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
