'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Stack, 
  Card, 
  CardContent, 
  Avatar,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { ProductSize, ProductColor } from '@/types/product';
import { currencyFormat } from '@/utils/currencyFormat';

interface ProductCustomizationProps {
  sizes?: ProductSize[];
  colors?: ProductColor[];
}

export default function ProductCustomization({ sizes, colors }: ProductCustomizationProps) {
  const [selectedSize, setSelectedSize] = useState<string>(sizes?.[0]?.id || '');
  const [selectedColor, setSelectedColor] = useState<string>(colors?.[0]?.id || '');
  const [cardMessage, setCardMessage] = useState<string>('');

  const handleSizeChange = (sizeId: string) => {
    setSelectedSize(sizeId);
  };

  return (
    <Stack spacing={4}>
      {/* Size Selection */}
      {sizes && sizes.length > 0 && (
        <Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1.125rem', md: '1.25rem' }
            }}
          >
            Size
          </Typography>
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(auto-fit, minmax(120px, 1fr))',
                md: 'repeat(3, 1fr)' 
              },
              gap: 2,
            }}
          >
            {sizes.map((size) => (
              <Card
                key={size.id}
                onClick={() => handleSizeChange(size.id)}
                sx={{
                  cursor: 'pointer',
                  border: 2,
                  borderColor: selectedSize === size.id ? 'primary.main' : 'divider',
                  bgcolor: selectedSize === size.id ? 'primary.50' : 'background.paper',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: 2,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                    py: 3,
                    px: 2,
                  }}
                >
                  {/* Size Icon */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      lineHeight: 1,
                    }}
                  >
                    {size.icon}
                  </Typography>

                  {/* Size Name */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: selectedSize === size.id ? 'primary.main' : 'text.primary',
                      fontSize: { xs: '1rem', md: '1.125rem' },
                    }}
                  >
                    {size.name}
                  </Typography>

                  {/* Price Adjustment */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    {size.priceAdjustment === 0 
                      ? 'Base price'
                      : `+ $${currencyFormat(size.priceAdjustment)}`
                    }
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}


    </Stack>
  );
}