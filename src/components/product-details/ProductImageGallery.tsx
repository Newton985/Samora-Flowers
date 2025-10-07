'use client';

import { useState } from 'react';
import { Box, IconButton, Stack, Card, CardMedia } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Stack spacing={2}>
      {/* Main Image */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.default',
          borderRadius: 3,
          overflow: 'hidden',
          aspectRatio: '1',
        }}
      >
        <Image
          src={images[selectedImageIndex]}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        
        {/* Navigation Arrows for Mobile */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 16,
            transform: 'translateY(-50%)',
            display: { xs: 'block', md: 'none' },
          }}
        >
          <IconButton
            onClick={handlePrevious}
            sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              width: 48,
              height: 48,
              '&:hover': {
                bgcolor: 'secondary.dark',
              },
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: 20, ml: 0.5 }} />
          </IconButton>
        </Box>
        
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
            display: { xs: 'block', md: 'none' },
          }}
        >
          <IconButton
            onClick={handleNext}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              width: 48,
              height: 48,
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Thumbnail Navigation (Desktop) */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'grid' },
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          overflowX: 'auto',
          pb: { xs: 1, md: 0 },
        }}
      >
        {images.map((image, index) => (
          <Card
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            sx={{
              cursor: 'pointer',
              minWidth: { xs: 76, md: 'auto' },
              border: selectedImageIndex === index ? 2 : 1,
              borderColor: selectedImageIndex === index ? 'primary.main' : 'divider',
              borderRadius: { xs: 1.5, md: 2 },
              overflow: 'hidden',
              aspectRatio: '1',
              position: 'relative',
              '&:hover': {
                borderColor: 'primary.main',
              },
            }}
          >
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                bgcolor: 'background.default',
              }}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 76px, 100px"
                style={{ objectFit: 'cover' }}
              />
            </CardMedia>
          </Card>
        ))}
      </Box>
    </Stack>
  );
}